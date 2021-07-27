import React, { Component } from 'react';
import HeaderLogos from '../HeaderLogos';
import Header from '../Header';
import { Box, Grid, Button } from '@material-ui/core';
import Site2 from './../../sites/Site2';
import Form from './../../sites/Form';
import Table from './../Table';
const styles = {
  form: {
    height: '100%',
    width: '100%',
  },
  rightPage: {
    height: '100%',
    width: '100%',
  },
};
export default class index extends Component {
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
    let { allData, tableData } = this.state;
    return (
      <>
        <Header />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box style={styles.form}>
              <Form setAllData={this.setAllData} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box style={styles.rightPage}>
              <Site2 allData={this.setAllData} />
            </Box>
          </Grid>
        </Grid>

        <Box style={{ marginTop: 20 }}>
          <Table tableData={this.setTableData} />
        </Box>
        <Button
          style={{ height: 50, width: 150, background: 'grey', margin: 10 }}
          onClick={() => this.fetchData(allData, tableData)}
        >
          Senden
        </Button>
      </>
    );
  }
}
