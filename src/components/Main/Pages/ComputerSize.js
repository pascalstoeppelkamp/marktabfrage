import React, { Component } from 'react';
import { Box, Button, Tab, Tabs, AppBar } from '@material-ui/core';
import ServerUtils from '../../../utils/ServerUtils';
import TabHandler from '../TabHandler';

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
    backgroundColor: '#f0f0f0',
    height: 80,
    marginBottom: 50,
    //backgroundColor: 'rgb(106, 172, 69)',
  },
};

export default class computerSize extends Component {
  render() {
    let { username, userRole, value } = this.props;
    return (
      <AppBar position="sticky" style={styles.appBar}>
        <Tabs
          TabIndicatorProps={{
            style: {
              display: 'none',
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
            label={
              <p style={{ color: 'rgb(106, 172, 69)', fontSize: 16 }}>
                Einleitung
              </p>
            }
          />
          <Tab
            label={
              <p style={{ color: 'rgb(106, 172, 69)', fontSize: 16 }}>
                Formular
              </p>
            }
          />
          <Tab
            label={
              <p style={{ color: 'rgb(106, 172, 69)', fontSize: 16 }}>
                Anleitung
              </p>
            }
          />

          {userRole === 'user' || userRole === 'admin' ? (
            <Tab
              label={
                <p style={{ color: 'rgb(106, 172, 69)', fontSize: 16 }}>
                  Verwaltung
                </p>
              }
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
            <Box style={styles.email}>
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
            <Box style={styles.logoutBtn}>
              <Button onClick={() => this.props.logout()}>Logout</Button>
            </Box>
          </Box>
        ) : (
          <Box style={styles.logoutBtn}>
            <Button onClick={() => this.props.login()}>Login</Button>
          </Box>
        )}
      </AppBar>
    );
  }
}
