import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
export default class TextFieldComponent extends Component {
    render() {
        return (
            <TextField style={{ width: '100%', backgroundColor: this.props.published ? "#FFE4C470" : "white" }} />
        )
    }
}
