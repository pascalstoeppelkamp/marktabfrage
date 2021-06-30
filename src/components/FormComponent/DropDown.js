import React, { Component } from 'react';
import { MenuItem, Select, Box } from '@material-ui/core';


export default class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            SelectedValue: "",
        }
    }

    handleClose = () => {
        this.setState({ anchorEl: null })
    }

    handleClick = () => {
        this.setState
            ({ anchorEl: true })
    }

    handleChange = (item) => {
        console.log(item);
        this.setState({ SelectedValue: item.target.value })
    }


    dropdown = (values, published) => {
        let { anchorEl, SelectedValue } = this.state;
        let arr = []
        values.forEach((item) => {
            arr.push(
                <MenuItem value={item} onClick={this.handleClose}>{item}</MenuItem>
            )
        })
        return <Box border={1} borderColor="grey.500" style={{ width: '100%', display: 'flex', backgroundColor: published ? "#FFE4C470" : "#FFFFFF" }}>

            <Select
                labelId="demo-controlled-open-select-label"
                id={"demo-controlled-open-select"}
                open={anchorEl}
                onClose={this.handleClose}
                onOpen={this.handleClick}
                style={{ width: '100%' }}
                onChange={this.handleChange}
                value={SelectedValue}
            >
                {arr}
            </Select>
        </Box>
    }
    render() {
        let { values, published } = this.props
        return (
            this.dropdown(values, published)
        )
    }
}
