import React from 'react';
import { Box } from '@material-ui/core';

const styles = {
  input: {
    flex: 1,
    backgroundColor: '#FFE4C470',
    textAlignVertical: 'top',
    resize: 'none',
    fontFamily: 'sans-serif',
    fontSize: 14,
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
    let { getAllData } = this.props;
    return (
      <Box
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
        }}
      >
        <textarea
          value={
            getAllData['ProjectDescription']?.value
              ? getAllData['ProjectDescription']?.value
              : ''
          }
          style={styles.input}
          onChange={this._changeTextField}
        />
      </Box>
    );
  }
}
