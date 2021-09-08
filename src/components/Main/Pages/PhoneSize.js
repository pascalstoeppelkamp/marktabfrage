import { IconButton } from '@material-ui/core';
import { List } from '@material-ui/icons';
import React from 'react';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { Box, ClickAwayListener, AppBar, Drawer } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Lock from '@material-ui/icons/Lock';
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(106, 172, 69)',
    maxHeight: 80,
    zIndex: theme.zIndex.drawer + 1,
    boxShadow:
      '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
  },
  menuItem: {
    margin: 1,
    backgroundColor: '#fff',
    boxShadow:
      '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 150,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  show: {
    transform: 'translateY(0)',
    transition: 'transform .5s',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(106, 172, 69)',
    maxHeight: 80,
    zIndex: theme.zIndex.drawer + 1,
    boxShadow:
      '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
  },
  hide: {
    transform: 'translateY(-110%)',
    transition: 'transform .5s',
  },
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(106, 172, 69)',
    maxHeight: 80,
    zIndex: theme.zIndex.drawer + 1,
    boxShadow:
      '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
  },
});

class SimpleMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldShow: null,
      anchorEl: null,
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

    if (lastScroll === this.lastScroll || window.scrollY < 10) {
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

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (val) => {
    this.props.handleChange(val);
    this.setState({ anchorEl: null });
  };

  handleClickAway = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { anchorEl } = this.state;
    let { username, userRole, classes } = this.props;

    return (
      <>
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
          <ClickAwayListener onClickAway={this.handleClickAway}>
            <IconButton
              style={{
                backgroundColor: 'white',
                padding: 10,
                margin: 10,
                height: 40,
                width: 40,
              }}
              onClick={this.handleClick}
              children={<List style={{ color: 'rgb(106, 172, 69)' }} />}
            />
          </ClickAwayListener>

          {username ? (
            <Box
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <Box className={classes.email}>
                <p
                  style={{
                    fontFamily: 'sans-serif',
                    fontSize: 14,
                    margin: 10,
                    color: 'white',
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
                />
              </Box>
            </Box>
          ) : (
            <Box className={classes.logoutBtn}>
              <Button
                onClick={() => this.props.login()}
                startIcon={<Lock style={{ fontSize: 30, color: 'white' }} />}
              />
            </Box>
          )}
        </AppBar>
        <Drawer
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerContainer}>
            <MenuItem
              key={'0'}
              className={classes.menuItem}
              value={0}
              onClick={() => this.handleClose(0)}
            >
              <p style={{ color: 'rgb(106, 172, 69)' }}>Einleitung</p>
            </MenuItem>
            <MenuItem
              key={'1'}
              className={classes.menuItem}
              value={1}
              onClick={() => this.handleClose(1)}
            >
              <p style={{ color: 'rgb(106, 172, 69)' }}>Formular</p>
            </MenuItem>
            <MenuItem
              key={'2'}
              className={classes.menuItem}
              value={2}
              onClick={() => this.handleClose(2)}
            >
              <p style={{ color: 'rgb(106, 172, 69)' }}>Anleitung</p>
            </MenuItem>
            {userRole === 'user' || userRole === 'admin' ? (
              <MenuItem
                key={'3'}
                className={classes.menuItem}
                value={3}
                onClick={() => this.handleClose(3)}
              >
                <p style={{ color: 'rgb(106, 172, 69)' }}>Verwaltung</p>
              </MenuItem>
            ) : null}
          </div>
        </Drawer>
      </>
    );
  }
}

export default withStyles(styles)(SimpleMenu);
