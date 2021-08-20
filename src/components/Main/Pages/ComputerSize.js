import React, { Component } from 'react';
import { Box, Button, Tab, Tabs, AppBar } from '@material-ui/core';
import ExitToApp from '@material-ui/icons/ExitToApp';
import VpnKey from '@material-ui/icons/VpnKey';
import HeaderLogos from './../../HeaderLogos';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  email: {
    justifyContent: 'flex-start',
    flex: 1,
    display: 'flex',
    alignItems: 'flex-end',
  },
  logoutBtn: {
    justifyContent: 'flex-end',
    flex: 1,
    display: 'flex',
  },
  appBar: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgb(106, 172, 69)',
    height: 80,
    marginBottom: 50,
    paddingLeft: 15,
    paddingRight: 15,
    //backgroundColor: 'rgb(106, 172, 69)',
  },
  tabRoot: {
    color: 'white',
    '&:hover': {
      color: 'green',
      opacity: 1,
    },
    '&$tabSelected': { color: 'white' },
    '&:focus': { color: 'white' },
  },
  show: {
    transform: 'translateY(0)',
    transition: 'transform .5s',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 80,
    marginBottom: 50,
    paddingLeft: 15,
    paddingRight: 15,
  },
  hide: {
    transform: 'translateY(-110%)',
    transition: 'transform .5s',
  },
  root: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgb(106, 172, 69)',
    height: 80,
    marginBottom: 50,
    paddingLeft: 15,
    paddingRight: 15,
  },
});

class computerSize extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldShow: null,
    };

    this.lastScroll = null;

    this.handleScroll = this.handleScroll.bind(this);
    // Alternatively, you can throttle scroll events to avoid
    // updating the state too often. Here using lodash.
    // this.handleScroll = _.throttle(this.handleScroll.bind(this), 100);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(evt) {
    const lastScroll = window.scrollY;

    if (lastScroll === this.lastScroll) {
      return;
    }

    const shouldShow =
      this.lastScroll !== null ? lastScroll < this.lastScroll : null;

    if (shouldShow !== this.state.shouldShow) {
      this.setState((prevState, props) => ({
        ...prevState,
        shouldShow,
      }));
    }

    this.lastScroll = lastScroll;
  }

  render() {
    let { username, userRole, value, classes } = this.props;
    return (
      <>
        <HeaderLogos />
        <AppBar
          position="sticky"
          /* className={classes.appBar} */ color="default"
          className={`${classes.root} ${
            this.state.shouldShow === null
              ? ''
              : this.state.shouldShow
              ? classes.show
              : classes.hide
          }`}
        >
          <Tabs
            TabIndicatorProps={{
              style: {
                backgroundColor: 'green',
              },
            }}
            variant="scrollable"
            style={{
              width: '100%',
              display: 'flex',
              overflow: 'hidden',
            }}
            value={value}
            onChange={this.props.handleChange}
          >
            <Tab
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label={'Einleitung'}
              style={{ fontSize: 20 }}
            />
            <Tab
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label={'Formular'}
              style={{ fontSize: 20 }}
            />
            <Tab
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label={'Anleitung'}
              style={{ fontSize: 20 }}
            />

            {userRole === 'user' || userRole === 'admin' ? (
              <Tab
                classes={{
                  root: classes.tabRoot,
                  selected: classes.tabSelected,
                }}
                label={'Verwaltung'}
                style={{ fontSize: 20 }}
              />
            ) : null}
          </Tabs>
          {username ? (
            <Box
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                display: 'flex',
                color: 'rgb(106, 172, 69)',
              }}
            >
              <Box className={classes.email}>
                <p
                  style={{
                    fontFamily: 'sans-serif',
                    fontSize: 14,
                    margin: 10,
                  }}
                >
                  {username}
                </p>
              </Box>
              <Box className={classes.logoutBtn}>
                <Button
                  onClick={() => this.props.logout()}
                  startIcon={
                    <ExitToApp style={{ fontSize: 30, color: 'white' }} />
                  }
                >
                  <p style={{ color: 'white' }}>Logout</p>
                </Button>
              </Box>
            </Box>
          ) : (
            <Box className={classes.logoutBtn}>
              <Button
                onClick={() => this.props.login()}
                startIcon={<VpnKey style={{ fontSize: 30, color: 'white' }} />}
              >
                <p style={{ color: 'white' }}>Login</p>
              </Button>
            </Box>
          )}
        </AppBar>
      </>
    );
  }
}

export default withStyles(styles)(computerSize);
