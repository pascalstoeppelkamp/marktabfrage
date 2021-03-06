import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import ShowAbfragen from '../ShowAbfragen';
import Formular from '../Formular';
import Introduction from '../Introduction';
import Instruction from '../Instruction';

export default class TabHandler extends Component {
  render() {
    let { value, fnb } = this.props;
    return (
      <>
        {value === 0 ? <Introduction /> : null}
        {value === 1 ? (
          <Formular
            clearInputs={this.props.clearInputs}
            getAllData={this.props.getAllData}
            setAllData={this.props.setAllData}
            tableData={this.props.tableData}
            getTableData={this.props.tableData}
          />
        ) : null}
        {value === 2 ? <Instruction /> : null}
        {value === 3 ? <ShowAbfragen fnb={fnb} /> : null}
      </>
    );
  }
}
