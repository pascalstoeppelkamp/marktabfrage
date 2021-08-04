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
      fnb: null,
    };
  }

  _Login = (data) => {
    this.setState({
      username: data.username,
      userRole: data.role,
      loginModal: false,
      fnb: data.fnb,
    });
  };

  render() {
    let { loginModal, username, userRole, fnb } = this.state;
    return (
      <Box
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: '#f0f0f0',
        }}
      >
        <HeaderLogos />
        {loginModal ? (
          <LoginModal
            _Login={this._Login}
            closeModal={() => this.setState({ loginModal: false })}
          />
        ) : null}
        <Pages
          pressedLogin={() => this.setState({ loginModal: true })}
          username={username}
          userRole={userRole}
          fnb={fnb}
        />
      </Box>
    );
  }
}
