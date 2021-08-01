import React from 'react';
import { Box, Typography } from '@material-ui/core';

const styles = {
  input: {
    flex: 1,
    backgroundColor: '#FFE4C470',
    textAlignVertical: 'top',
    resize: 'none',
    fontFamily: 'sans-serif',
    fontSize: 15,
    padding: 5,
    paddingTop: 5,
  },
};

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ProjectDescription: {
        label:
          'Ausführliche Projektbeschreibung inkl. Beschreibung des Projektstatus',
        type: 'TextField',
        published: true,
        id: 'ProjectDescription',
        value: '',
      },
    };
  }

  _changeTextField = (value) => {
    value = value.target.value;
    let { ProjectDescription } = this.state;
    ProjectDescription.value = value;
    this.setState({ ProjectDescription });
    this.props.allData(ProjectDescription);
  };

  render() {
    let { ProjectDescription } = this.state;
    return (
      <Box style={{ height: '100%', width: '100%', display: 'flex' }}>
        <textarea
          style={styles.input}
          value={ProjectDescription.value}
          onChange={this._changeTextField}
        />
      </Box>
    );
  }
}
