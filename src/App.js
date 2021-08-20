import React, { Component } from 'react';
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
      allData: {},
      tableData: {},
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

  setAllData = (data) => {
    let { allData } = this.state;
    let { id } = data;
    allData[id] = data;
    this.setState({ allData });
  };

  setTableData = (data) => {
    let { tableData } = this.state;
    let { id } = data;
    tableData[id] = data;
    this.setState({ tableData });
  };

  allData = () => {};
  render() {
    let { loginModal, username, userRole, fnb } = this.state;
    return (
      <Box style={{}}>
        {loginModal ? (
          <LoginModal
            _Login={this._Login}
            closeModal={() => this.setState({ loginModal: false })}
          />
        ) : null}
        <Pages
          clearInputs={() => this.setState({ allData: {} })}
          pressedLogin={() => this.setState({ loginModal: true })}
          username={username}
          userRole={userRole}
          fnb={fnb}
          setAllData={this.setAllData}
          getAllData={this.state.allData}
          tableData={this.setTableData}
          getTableData={this.state.tableData}
        />
      </Box>
    );
  }
}
