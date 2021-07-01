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

    handleChange = (item, data, fromRadioBtn) => {
        item = item.target.value;
        fromRadioBtn ? data.dropdownValue = item : data.value = item;
        this.props.setAllData(data)
        this.setState({ SelectedValue: item })
    }


    dropdown = (values, published, key, data, fromRadioBtn) => {
        let { anchorEl, SelectedValue } = this.state;
        let arr = []
        values.forEach((item) => {
            arr.push(
                <MenuItem value={item} key={`${key}MenuItem`} onClick={this.handleClose}>{item}</MenuItem>
            )
        })
        return <Box key={`${key}Box`} vborder={1} borderColor="grey.500" style={{ width: '100%', display: 'flex', backgroundColor: published ? "#FFE4C470" : "#FFFFFF" }}>

            <Select
                key={`${key}Select`}
                labelId="demo-controlled-open-select-label"
                id={"demo-controlled-open-select"}
                open={anchorEl}
                onClose={this.handleClose}
                onOpen={this.handleClick}
                style={{ width: '100%' }}
                onChange={(value) => this.handleChange(value, data, fromRadioBtn)}
                value={SelectedValue}
            >
                {arr}
            </Select>
        </Box>
    }
    render() {
        let { values, published, id, data, fromRadioBtn } = this.props;
        let key = id;
        return (
            this.dropdown(values, published, key, data, fromRadioBtn)
        )
    }
}
