import React, { Component } from 'react'
import { TextField, Box, FormControlLabel, Typography, RadioGroup, Radio } from '@material-ui/core';

const styles = {
    container: {
        display: "flex",
        width: '100%',
        heigth: '100%',
        marginTop: 10
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
        alignItems: "flex-end"
    },
    radioBox: {
        width: '100%',
        display: 'flex'
    },
    radioGroup: {
        flex: 1,
        display: "flex",
        flexDirection: "row"
    }
}
export default class FormComponent extends Component {
    _returnData = (data) => {
        const { published, values } = data;
        switch (data.type) {
            case "Textfield":
                return <TextField style={{ width: '100%', backgroundColor: published ? "#FFE4C470" : "white" }} />
            case "Checkbox":
                return this._checkBox(values,published)
            default:
                return <TextField style={{ width: '100%', backgroundColor: published ? "#FFE4C470" : "white" }} />
        }
    }

    _checkBox = (values,published) => {
        let arr = []
        values.forEach((item) => {
            arr.push(
                <Box style={{ flex: 1 }}><FormControlLabel
                    value={item}
                    control={<Radio color="primary" />}
                    label={<Typography style={{ fontSize: 12 }}>{item}</Typography>}
                    labelPlacement="End"
                    style={{ paddingLeft: 10, paddingTop: 1 }}
                /></Box>
            )
        })
        return <Box border={1} borderColor="grey.500" style={{ width: '100%', display: 'flex', backgroundColor: published ? "#FFE4C470" : "white" }}>
            <RadioGroup row aria-label="position" style={styles.radioGroup}>
                {arr}
            </RadioGroup>
        </Box>
    }
    render() {
        const data = this.props.data;
        const { label } = this.props.data;
        const { key } = this.props;
        return (
            <Box style={styles.container} key={key}>
                <Box style={styles.label}>
                    {label}
                </Box>
                <Box style={styles.textfield}>
                    {this._returnData(data)}
                </Box>
            </Box>
        )
    }
}
