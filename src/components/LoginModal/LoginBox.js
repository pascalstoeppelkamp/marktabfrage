import React, { Component } from 'react';
import { Box, TextField, Button } from '@material-ui/core';
import ServerUtils from '../../utils/ServerUtils';

const styles = {
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  loginContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    flex: 1.5,
    marginTop: 20,
  },
  username: {
    marginLeft: 30,
    marginRight: 30,
  },
  password: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 15,
  },
  loginBtn: {
    width: '100%',
    height: 30,
  },
  loginBtnBox: {
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
  },
  errorMsg: {
    fontFamily: 'sans-serif',
    color: 'red',
    fontSize: 23,
    paddingTop: 20,
    marginLeft: 30,
    marginRight: 30,
  },
};
export default class LoginBox extends Component {
  constructor(props) {
    super(props);
    this.ServerUtils = new ServerUtils();
    this.state = {
      username: '',
      password: '',
      error: null,
    };
  }

  Login = async () => {
    let { username, password } = this.state;
    let body = {
      email: username,
      password: password,
    };
    const data = await this.ServerUtils.login(body);
    if (data.success) {
      this.setState({ error: null });
      this.props.Login(data);
    } else {
      this.setState({ error: data.error });
    }
  };

  render() {
    let { error } = this.state;
    return (
      <Box style={styles.container}>
        <Box style={{ marginLeft: 30 }}>
          <p style={{ fontFamily: 'sans-serif', fontSize: 23, paddingTop: 20 }}>
            Anmeldung
          </p>
        </Box>
        <Box style={styles.loginContainer}>
          <TextField
            style={styles.username}
            variant="filled"
            onChange={(username) =>
              this.setState({ username: username.target.value })
            }
            label="Email"
          />
          <TextField
            style={styles.password}
            variant="filled"
            type="password"
            onChange={(password) =>
              this.setState({ password: password.target.value })
            }
            label="password"
          />
          <Box borderColor="primary.main" border={1} style={styles.loginBtnBox}>
            <Button onClick={this.Login} style={styles.loginBtn}>
              Anmelden
            </Button>
          </Box>
          {error ? <p style={styles.errorMsg}>{error}</p> : null}
        </Box>
      </Box>
    );
  }
}
