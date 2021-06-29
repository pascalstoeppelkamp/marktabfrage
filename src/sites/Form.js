import React, { Component } from 'react'
import data from '../data/Data';
import { Box } from '@material-ui/core';
import FormComponent from '../components/FormComponent';

const styles = {
    container: {
        height: '100%',
        width: '100%'
    },
    header: {
        backgroundColor: "lightgreen",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        width: '100%',
        display: "flex"
    }
}
export default class Form extends Component {
    _getTextFields = () => {
        let arr = [];
        for (const [key, value] of Object.entries(data)) {
            arr.push(<FormComponent data={value} key={key} />);
        }
        return arr;
    }
    render() {
        return (
            <Box style={styles.container}>
                <Box style={styles.header}><h3 style={{ fontFamily: "sans-serif" }}>Ansprechpartner</h3></Box>
                {this._getTextFields()}
            </Box>

        )
    }
}
