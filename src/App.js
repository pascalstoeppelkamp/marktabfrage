import React, { Component } from 'react'
import HeaderLogos from './components/HeaderLogos';
import Header from './components/Header';
import Form from './sites/Form';
import { Box, Grid } from '@material-ui/core';

const styles = {
  container: {
    height: '100vh',
    width: '100%'
  },
  form: {
    height: '100%', width: '100%'
  },
  rightPage: {
    height: '100%',
    width: '100%',
    backgroundColor: 'blue'
  }
}
export default class App extends Component {
  render() {
    return (
      <Box style={styles.container}>
        <HeaderLogos />
        <Header />
        <Grid container spacing={3} style={{}}>
          <Grid item xs={12} sm={6}>
            <Box style={styles.form}><Form /></Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box style={styles.rightPage}>xs=12 sm=6</Box>
          </Grid>
        </Grid>
      </Box>
    )
  }
}
