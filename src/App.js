import React, { Component } from 'react';
import HeaderLogos from './components/HeaderLogos';
import Pages from './components/Main/Pages';
import LoginModal from './components/LoginModal';
import { Box } from '@material-ui/core';
import ServerUtils from './utils/ServerUtils';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.ServerUtils = new ServerUtils();
    this.state = {
      userRole: null,
    };
  }

  _Login = (data) => {
    this.setState({
      username: data.username,
      userRole: data.role,
      loginModal: false,
    });
  };

  render() {
    let { loginModal, username, userRole } = this.state;
    return (
      <Box
        style={{
          height: '100vh',
          width: '100%',
        }}
      >
        <HeaderLogos />
        {loginModal ? <LoginModal _Login={this._Login} /> : null}
        <Pages
          pressedLogin={() => this.setState({ loginModal: true })}
          username={username}
          userRole={userRole}
        />
      </Box>
    );
  }
}
