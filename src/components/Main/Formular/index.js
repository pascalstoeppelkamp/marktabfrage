import React, { Component } from 'react';
import Header from '../Header';
import {
  Box,
  Grid,
  Button,
  CircularProgress,
  Snackbar,
} from '@material-ui/core';
import Site2 from '../../../sites/Site2';
import Form from '../../../sites/Form';
import Table from '../Table';
import ServerUtils from '../../../utils/ServerUtils';

import { Alert } from '@material-ui/lab';

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
    margin: 10,
  },
  progressBar: {
    position: 'absolute',
    marginTop: 15,
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
      err: false,
      isLoading: false,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  fetchData = async () => {
    this.setState({ isLoading: true });
    let allData = this.props.getAllData;
    let tableData = this.props.tableData;
    let data = {};
    for (let item in allData) {
      data[allData[item].id] = allData[item].value;
    }
    data.TableData = { ...tableData };
    let sendData = await this.ServerUtils.sendData(data);
    if (!sendData.success) {
      let err = sendData.error.split(',');
      this.setState({
        errMessage: err,
        isLoading: false,
        err: true,
        success: false,
        btnColor: 'secondary',
      });
      window.scrollTo(0, document.body.scrollHeight);
    } else {
      this.setState({
        errMessage: null,
        isLoading: false,
        btnColor: 'primary',
        err: false,
        success: true,
      });
      this.props.clearInputs();
    }
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
    let { errMessage, isLoading, btnColor, err, success } = this.state;
    return (
      <>
        <Header />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box style={styles.form}>
              <Form
                getAllData={this.props.getAllData}
                setAllData={this.props.setAllData}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box style={styles.rightPage}>
              <Site2
                allData={this.props.setAllData}
                getAllData={this.props.getAllData}
              />
            </Box>
          </Grid>
        </Grid>

        <Box style={{ marginTop: 20 }}>
          <Table
            tableData={this.props.tableData}
            getTableData={this.props.tableData}
          />
        </Box>
        <Button
          style={styles.sendButton}
          variant="outlined"
          color={btnColor}
          onClick={() => this.fetchData()}
        >
          Senden
        </Button>
        {isLoading ? (
          <CircularProgress style={styles.progressBar} disableShrink />
        ) : null}
        {errMessage ? this.setErrMsg(errMessage) : null}
        <Snackbar
          open={err}
          autoHideDuration={6000}
          onClose={() => this.setState({ err: false })}
        >
          <Alert
            onClose={() => this.setState({ err: false })}
            severity="error"
            sx={{ width: '100%' }}
          >
            Das Formular konnte nicht abgesendet werden.
          </Alert>
        </Snackbar>
        <Snackbar
          open={success}
          autoHideDuration={6000}
          onClose={() => this.setState({ success: false })}
        >
          <Alert
            onClose={() => this.setState({ success: false })}
            severity="success"
            sx={{ width: '100%' }}
          >
            Das Formular wurde erfolgreich abgesendet.
          </Alert>
        </Snackbar>
      </>
    );
  }
}
