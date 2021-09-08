import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import DescriptionField from '../components/Main/DescriptionField';
import NetworkDevelopmentPlan from '../components/Main/NetworkDevelopmentPlan';
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 50,
  },
  description: {
    flex: 1,
    paddingRight: 10,
  },
  image: { flex: 1 },
};
export default class Site2 extends Component {
  render() {
    return (
      <Grid container style={styles.container}>
        <Grid style={styles.description}>
          <DescriptionField
            getAllData={this.props.getAllData}
            allData={this.props.allData}
          />
        </Grid>
        <Grid style={styles.image}>
          <NetworkDevelopmentPlan />
        </Grid>
      </Grid>
    );
  }
}
