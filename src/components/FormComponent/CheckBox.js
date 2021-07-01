import React, { Component } from 'react'
import { Box, Checkbox, FormControlLabel, Typography } from '@material-ui/core';
export default class CheckBox extends Component {
    _SetCheckBox = (value, data) => {
        value = value.target.value;
        if (data.value[value]) {
            data.value[value] = false;
        }
        else {
            data.value[value] = true
        }
        this.props.setAllData(data)
    }
    checkbox = (values, published, key, data) => {
        let arr = []
        values.forEach((item) => {
            arr.push(
                <FormControlLabel
                    key={`${key}FormControlLabel`}
                    value={item}
                    control={<Checkbox color="primary" key={key} value={item} onClick={(value) => this._SetCheckBox(value, data)} />}
                    label={<Typography key={`${key}Typography`} style={{ fontSize: 12 }}>{item}</Typography>}
                    labelPlacement="end"
                    style={{ paddingLeft: 10, paddingTop: 1, flex: 1 }}
                />
            )
        })
        return <Box key={`${key}Box`} border={1} borderColor="grey.500" style={{ width: '100%', display: 'flex', backgroundColor: published ? "#FFE4C470" : "#FFFFFF", justifyContent: "space-evenly" }}>
            {arr}
        </Box>
    }
    render() {
        let { values, published, id, data } = this.props;
        let key = id;
        return (
            this.checkbox(values, published, key, data)
        )
    }
}
