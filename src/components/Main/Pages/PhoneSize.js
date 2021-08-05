import { IconButton } from '@material-ui/core';
import { List } from '@material-ui/icons';
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Box } from '@material-ui/core';

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

  render() {
    const { anchorEl } = this.state;
    let { username, userRole, fnb, value, phoneSize } = this.props;

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: 'rgb(106, 172, 69)',
          maxHeight: 50,
        }}
      >
        <IconButton
          style={{
            backgroundColor: 'rgb(106, 172, 69)',
            padding: 10,
            margin: 10,
          }}
          onClick={this.handleClick}
          children={<List />}
        />
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} style={{ top: 51 }}>
          <MenuItem
            style={{
              margin: 1,
              backgroundColor: 'rgb(106, 172, 69)',
            }}
            value={0}
            onClick={this.handleClose}
          >
            Einleitung
          </MenuItem>
          <MenuItem
            style={{ margin: 1, backgroundColor: 'rgb(106, 172, 69)' }}
            value={1}
            onClick={this.handleClose}
          >
            Formular
          </MenuItem>
          <MenuItem
            style={{ margin: 1, backgroundColor: 'rgb(106, 172, 69)' }}
            value={2}
            onClick={this.handleClose}
          >
            Anleitung
          </MenuItem>
          {userRole === 'user' || userRole === 'admin' ? (
            <MenuItem
              style={{ margin: 1, backgroundColor: 'rgb(106, 172, 69)' }}
              value={3}
              onClick={this.handleClose}
            >
              Verwaltung
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
                  color: 'white',
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
