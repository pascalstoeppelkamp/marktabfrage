import React, { Component } from 'react';
import HeaderLogos from './components/HeaderLogos';
import HeaderLogin from './components/HeaderLogin';
import LoginModal from './components/LoginModal';
import Header from './components/Header';
import Form from './sites/Form';
import Site2 from './sites/Site2';
import { Box, Grid, Button } from '@material-ui/core';
import Table from './components/Table';
import ShowAbfragen from './components/ShowAbfragen';
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
    this.state = {
      allData: {},
      tableData: {},
      userToken: null,
      userRole: null,
    };
  }

  fetchData = async (allData, tableData) => {
    let data = {};
    for (let item in allData) {
      data[allData[item].id] = allData[item].value;
    }
    /*   for (let item in tableData) {
      data.push(tableData[(item.label = tableData[item.value])]);
    } */
    await fetch('http://localhost:5000/api/v1/eintraege', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => (data = data.json()))
      .then((data) => console.log(data));
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
        <HeaderLogin username={username} userRole={userRole} />
      </Box>
    );
  }
}
