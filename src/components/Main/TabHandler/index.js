import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import ShowAbfragen from '../ShowAbfragen';
import Formular from '../Formular';
import Introduction from '../Introduction';
import Instruction from '../Instruction';
export default class TabHandler extends Component {
  render() {
    let { value } = this.props;
    return (
      <Box>
        {value === 0 ? <Introduction /> : null}
        {value === 1 ? (
          <Box>
            <Formular />
          </Box>
        ) : null}
        {value === 2 ? <Instruction /> : null}
        {value === 3 ? (
          <Box>
            <ShowAbfragen />
          </Box>
        ) : null}
      </Box>
    );
  }
}
