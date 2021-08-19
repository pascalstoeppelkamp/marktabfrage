import { IconButton } from '@material-ui/core';
import { List } from '@material-ui/icons';
import React from 'react';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { Box, ClickAwayListener, AppBar, Drawer } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ExitToApp from '@material-ui/icons/ExitToApp';
import VpnKey from '@material-ui/icons/VpnKey';
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
    backgroundColor: '#f0f0f0',
    maxHeight: 80,
    zIndex: theme.zIndex.drawer + 1,
    boxShadow:
      '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
  },
  menuItem: {
    margin: 1,
    backgroundColor: '#f0f0f0',
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
  root: {
    display: 'flex',
  },
});

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

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
      <div className={classes.root}>
        <AppBar position="sticky" className={classes.appBar}>
          <ClickAwayListener onClickAway={this.handleClickAway}>
            <IconButton
              style={{
                backgroundColor: 'rgb(106, 172, 69)',
                padding: 10,
                margin: 10,
                height: 40,
                width: 40,
              }}
              onClick={this.handleClick}
              children={<List />}
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
                    color: 'rgb(106, 172, 69)',
                  }}
                >
                  {username}
                </p>
              </Box>
              <Box className={classes.logoutBtn}>
                <Button
                  onClick={() => this.props.logout()}
                  startIcon={
                    <ExitToApp style={{ fontSize: 30, color: '#4caf50' }} />
                  }
                />
              </Box>
            </Box>
          ) : (
            <Box className={classes.logoutBtn}>
              <Button
                onClick={() => this.props.login()}
                startIcon={
                  <VpnKey style={{ fontSize: 30, color: '#4caf50' }} />
                }
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
      </div>
    );
  }
}

export default withStyles(styles)(SimpleMenu);
