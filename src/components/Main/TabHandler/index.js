import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import ShowAbfragen from '../ShowAbfragen';
import Formular from '../Formular';
import InfoPage from '../InfoPage';
export default class Test extends Component {
  render() {
    let { value } = this.props;
    return (
      <Box>
        {value === 0 ? <InfoPage /> : null}
        {value === 1 ? (
          <Box>
            <Formular />
          </Box>
        ) : null}
        {value === 2 ? (
          <Box>
            <ShowAbfragen />
          </Box>
        ) : null}
      </Box>
    );
  }
}
