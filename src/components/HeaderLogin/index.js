import React, { Component } from 'react';
import { Box, Button, Tab, Tabs, TabPanel, AppBar } from '@material-ui/core';
import Test from './../TabHandler';
const styles = {
  container: {
    width: '100%',
    backgroundColor: 'grey',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
  },
  dataContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
  },
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
};
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  _Logout = async () => {
    await fetch('http://localhost:5000/api/v1/auth/logout').then((data) =>
      (data = data.json()).then((data) => console.log(data))
    );
    document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    localStorage.clear();
    window.location.href = '/';
  };

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  render() {
    let { username, userRole } = this.props;
    let { value } = this.state;
    return (
      <>
        <AppBar
          position="static"
          style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'rgb(106, 172, 69)',
          }}
        >
          <Tabs
            style={{ flex: 1 }}
            value={value}
            onChange={this.handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Informationen" {...this.a11yProps(0)} />
            {userRole === 'user' || userRole === 'admin' ? (
              <Tab label="Formular" {...this.a11yProps(1)} />
            ) : null}
            {userRole === 'admin' ? (
              <Tab label="Verwaltung" {...this.a11yProps(2)} />
            ) : null}
          </Tabs>
          {username ? (
            <Box
              style={{
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                display: 'flex',
              }}
            >
              <Box style={styles.email}>
                <p
                  style={{
                    fontFamily: 'sans-serif',
                    fontSize: 15,
                    margin: 10,
                  }}
                >
                  {username}
                </p>
              </Box>
              <Box style={styles.logoutBtn}>
                <Button onClick={this._Logout}>Logout</Button>
              </Box>
            </Box>
          ) : null}
        </AppBar>
        <Test value={value} index={0} />
      </>
    );
  }
}
