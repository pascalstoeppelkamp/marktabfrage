import React, { Component } from 'react'
import { Box, FormControlLabel, Typography, MenuItem, Select, Radio, RadioGroup } from '@material-ui/core';
import TextField from './TextField';

const styles = {
    radioGroup: {
        flex: 1,
        display: "flex",
        flexDirection: "row"
    }
}

export default class RadioButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            SelectedValue: "",

        }
    }
    radiobtn = (label, values, published) => {
        let arr = [];
        let coordsField = false;

        label === "Koordinaten des Projektstandortes (rechts/links)" ?
            coordsField = true
            : coordsField = false

        values.forEach((item) => {
            arr.push(
                <Box style={{ flex: 1 }}><FormControlLabel
                    value={item}
                    control={<Radio color="primary" value={item} onClick={coordsField ? this._coordsField : this._radioButtonField} />}
                    label={<Typography style={{ fontSize: 12 }}>{item}</Typography>}
                    labelPlacement="End"
                    style={{ paddingLeft: 10, paddingTop: 1 }}
                />
                    {coordsField ?
                        <div>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id={"demo-controlled-open-select"}
                                open={this.state.anchorEl}
                                onClose={this.handleClose}
                                onOpen={this.handleClick}
                                style={{ width: '100%' }}
                                onChange={this.handleChange}
                                value={this.state.SelectedValue}
                            >
                                <MenuItem value={item} onClick={this.handleClose}>{"Bitte Ausfüllen"}</MenuItem>
                                <MenuItem value={item} onClick={this.handleClose}>{"2"}</MenuItem>
                                <MenuItem value={item} onClick={this.handleClose}>{"3"}</MenuItem>
                            </Select>
                            <TextField published={published} /></div>
                        : null}</Box>
            )
        })

        return <Box border={1} borderColor="grey.500" style={{ width: '100%', display: 'flex', backgroundColor: published ? "#FFE4C470" : "#FFFFFF" }}>
            <RadioGroup row aria-label="position" style={styles.radioGroup}>
                {arr}
            </RadioGroup>
        </Box>

    }
    render() {
        let { label, values, published } = this.props;
        return (
            this.radiobtn(label, values, published)
        )
    }
}
