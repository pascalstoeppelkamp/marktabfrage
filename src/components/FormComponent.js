import React, { Component } from 'react'
import { TextField, Box } from '@material-ui/core';
const styles = {
    container: {
        display: "flex",
        width: '100%',
        heigth:'100%',
        marginTop:10
    },
    label: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        fontFamily: "sans-serif"
    },
    textfield: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-end",
    }
}
export default class FormComponent extends Component {
    render() {
        return (
            <Box style={styles.container} >
                <Box style={styles.label}>
                    {this.props.label}
                </Box>
                <Box style={styles.textfield}>
                    <TextField style={{ width: '100%', backgroundColor: this.props.published ? "#FFE4C470" : "white" }} />
                </Box>
            </Box>
        )
    }
}
