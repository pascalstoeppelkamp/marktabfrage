import React, { Component } from 'react';
import HeaderLogos from './components/HeaderLogos';
import Pages from './components/Main/Pages';
import LoginModal from './components/LoginModal';
import { Box } from '@material-ui/core';
import ServerUtils from './utils/ServerUtils';
const styles = {
  container: {
    height: '100vh',
    width: '100%',
  },
  form: {
    height: '100%',
    width: '100%',
  },
  rightPage: {
    height: '100%',
    width: '100%',
  },
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.ServerUtils = new ServerUtils();
    this.state = {
      userToken: null,
      userRole: null,
    };
  }

  _Login = (data) => {
    this.setState({
      userToken: data.token,
      username: data.username,
      userRole: data.role,
    });
  };

  render() {
    let { userToken, username, userRole } = this.state;
    return (
      <Box style={styles.container}>
        <HeaderLogos />
        {!userToken ? <LoginModal _Login={this._Login} /> : null}
        <Pages username={username} userRole={userRole} />
      </Box>
    );
  }
}
