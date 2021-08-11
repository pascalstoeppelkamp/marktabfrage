import React, { Component } from 'react';
import Header from '../Header';
import { Box, Grid, Button } from '@material-ui/core';
import Site2 from '../../../sites/Site2';
import Form from '../../../sites/Form';
import Table from '../Table';
import ServerUtils from '../../../utils/ServerUtils';
const styles = {
  form: {
    height: '100%',
    width: '100%',
  },
  rightPage: {
    height: '100%',
    width: '100%',
  },
  sendButton: {
    height: 50,
    width: 150,
    background: 'grey',
    margin: 10,
  },
};
export default class index extends Component {
  constructor(props) {
    super(props);
    this.ServerUtils = new ServerUtils();
    this.state = {
      allData: {},
      tableData: {},
      userToken: null,
      userRole: null,
      errMessage: null,
    };
  }
  fetchData = async (allData, tableData) => {
    let data = {};
    for (let item in allData) {
      data[allData[item].id] = allData[item].value;
    }
    data.TableData = { ...tableData };
    let sendData = await this.ServerUtils.sendData(data);
    if (!sendData.success) {
      let err = sendData.error.split(',');
      this.setState({ errMessage: err });
    } else {
      this.setState({ errMessage: null });
    }
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

  setErrMsg = (err) => {
    return err.map((item) => (
      <p style={{ color: 'red' }}>
        {item}
        {'\n'}
      </p>
    ));
  };

  render() {
    let { allData, tableData, errMessage } = this.state;
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
          style={styles.sendButton}
          onClick={() => this.fetchData(allData, tableData)}
        >
          Senden
        </Button>
        {errMessage ? this.setErrMsg(errMessage) : null}
      </>
    );
  }
}
