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
  pages: {
    display: "flex",
    backgroundColor: "red",
    height: '100%',
    width: '100%'
  },
  paper: {
    height: '100%'
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
            <Box style={{ height: '100%', width: '100%' }}><Form /></Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box style={{ height: '100%', width: '100%', backgroundColor: 'blue' }}>xs=12 sm=6</Box>
          </Grid>
        </Grid>
      </Box>
    )
  }
}
