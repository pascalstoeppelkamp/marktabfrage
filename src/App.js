import React, { Component } from 'react'
import HeaderLogos from './components/HeaderLogos';
import Header from './components/Header';
import Form from './sites/Form';
import Site2 from './sites/Site2';
import { Box, Grid } from '@material-ui/core';
import Table from './components/Table';

const styles = {
  container: {
    height: '100vh',
    width: '100%'
  },
  form: {
    height: '100%',
    width: '100%'
  },
  rightPage: {
    height: '100%',
    width: '100%'
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: {
        table: {}
      }
    }
  }

  setAllData = (data) => {
    let { allData } = this.state;
    let { id } = data;
    allData[id] = data;
    this.setState({ allData })
  }

  setTableData = (data) => {
    let { allData } = this.state;
    let { id } = data;
    allData.table[id] = data;
    this.setState({ allData })

  }
  render() {
    return (
      <Box style={styles.container}>
        <HeaderLogos />
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
      </Box>
    )
  }
}
