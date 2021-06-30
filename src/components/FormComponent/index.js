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

    _returnData = (data) => {
        const { published, values, label, type } = data;
        switch (type) {
            case "Textfield":
                return <TextField published={published} />
            case "Radiobutton":
                return <RadioButton values={values} published={published} label={label} />
            case "Select":
                return <DropDown values={values} published={published} />
            case "Checkbox":
                return <CheckBox values={values} published={published} />
            default:
                return <TextField published={published} />
        }

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
