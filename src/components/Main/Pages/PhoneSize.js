import { IconButton } from '@material-ui/core';
import { List } from '@material-ui/icons';
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Box, ClickAwayListener } from '@material-ui/core';

const styles = {
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
  },
};

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (event) => {
    this.props.handleChange(event.target.value);
    this.setState({ anchorEl: null });
  };

  handleClickAway = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { anchorEl } = this.state;
    let { username, userRole } = this.props;

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#f0f0f0',
          maxHeight: 80,
          boxShadow:
            '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
        }}
      >
        <ClickAwayListener onClickAway={this.handleClickAway}>
          <IconButton
            style={{
              backgroundColor: 'rgb(106, 172, 69)',
              padding: 10,
              margin: 10,
            }}
            onClick={this.handleClick}
            children={<List />}
          />
        </ClickAwayListener>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          style={{
            marginTop: 75,
            height: '100%',
          }}
        >
          <MenuItem
            style={{
              margin: 1,
              backgroundColor: '#f0f0f0',
              boxShadow:
                '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
            }}
            value={0}
            onClick={this.handleClose}
          >
            <p style={{ color: 'rgb(106, 172, 69)' }}>Einleitung</p>
          </MenuItem>
          <MenuItem
            style={{
              margin: 1,
              backgroundColor: '#f0f0f0',
              boxShadow:
                '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
            }}
            value={1}
            onClick={this.handleClose}
          >
            <p style={{ color: 'rgb(106, 172, 69)' }}>Formular</p>
          </MenuItem>
          <MenuItem
            style={{
              margin: 1,
              backgroundColor: '#f0f0f0',
              boxShadow:
                '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
            }}
            value={2}
            onClick={this.handleClose}
          >
            <p style={{ color: 'rgb(106, 172, 69)' }}>Anleitung</p>
          </MenuItem>
          {userRole === 'user' || userRole === 'admin' ? (
            <MenuItem
              style={{
                margin: 1,
                backgroundColor: '#f0f0f0',
                boxShadow:
                  '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
              }}
              value={3}
              onClick={this.handleClose}
            >
              <p style={{ color: 'rgb(106, 172, 69)' }}>Verwaltung</p>
            </MenuItem>
          ) : null}
        </Menu>

        {username ? (
          <Box
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <Box style={styles.email}>
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
            <Box style={styles.logoutBtn}>
              <Button onClick={() => this.props.logout()}>Logout</Button>
            </Box>
          </Box>
        ) : (
          <Box style={styles.logoutBtn}>
            <Button onClick={() => this.props.login()}>Login</Button>
          </Box>
        )}
      </div>
    );
  }
}

export default SimpleMenu;
