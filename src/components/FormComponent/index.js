import React, { Component } from 'react'
import { Box } from '@material-ui/core';
import TextField from './TextField';
import RadioButton from './RadioButton'
import DropDown from './DropDown';
import CheckBox from './CheckBox';

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
    }
}

export default class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            SelectedValue: "",
            checked: [],
        }
    }

    _changeText(data) {
        this.props.changeText(data)
    }

    _returnData = (data) => {
        const { published, values, label, type, id } = data;
        switch (type) {
            case "Textfield":
                return <TextField setAllData={this.props.setAllData} id={id} published={published} data={data} />
            case "Radiobutton":
                return <RadioButton setAllData={this.props.setAllData} id={id} values={values} published={published} data={data} label={label} />
            case "Select":
                return <DropDown setAllData={this.props.setAllData} id={id} values={values} data={data} published={published} />
            case "Checkbox":
                return <CheckBox setAllData={this.props.setAllData} id={id} values={values} data={data} published={published} />
            default:
                return <TextField setAllData={this.props.setAllData} data={data} id={id} published={published} />
        }

    }

    render() {
        const data = this.props.data;
        const { label } = this.props.data;
        return (
            <Box style={styles.container} >
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
