import React, { Component } from 'react'
import { Box, Checkbox, FormControlLabel, Typography } from '@material-ui/core';
export default class CheckBox extends Component {
    checkbox = (values, published) => {
        let arr = []
        values.forEach((item) => {
            arr.push(
                <Box style={{ flex: 1}}>
                    <FormControlLabel
                        value={item}
                        control={<Checkbox color="primary" />}
                        label={<Typography style={{ fontSize: 12 }}>{item}</Typography>}
                        labelPlacement="End"
                        style={{ paddingLeft: 10, paddingTop: 1 }}
                    /></Box>
            )
        })
        return <Box border={1} borderColor="grey.500" style={{ width: '100%', display: 'flex', backgroundColor: published ? "#FFE4C470" : "#FFFFFF", justifyContent: "space-evenly" }}>
            {arr}
        </Box>
    }
    render() {
        let { values, published } = this.props
        return (
            this.checkbox(values, published)
        )
    }
}
