import React, { Component } from 'react';
import HeaderLogos from '../HeaderLogos';
import Header from '../Header';
import { Box, Grid, Button, Table } from '@material-ui/core';
export default class index extends Component {
  render() {
    return (
      <>
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
