import React from "react";
import { TextField, Box, Typography } from "@material-ui/core";


const styles = {
    input: {
        width: '100%',
        height: '100%',
        backgroundColor: "#FFE4C470",
        textAlignVertical: 'top',
        resize: "none",
        fontFamily: "sans-serif",
        fontSize: 12,
    }
}

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            descriptionField: {
                label: "Ausführliche Projektbeschreibung inkl. Beschreibung des Projektstatus",
                type: "TextField",
                published: true,
                id: "descriptionField",
                value: ""
            },
        }
    }

    _changeTextField = (value) => {
        value = value.target.value;
        let { descriptionField } = this.state;
        descriptionField.value = value
        this.setState({ descriptionField })
        this.props.allData(descriptionField)

    }

    render() {
        let { descriptionField } = this.state;
        return (
            <Box style={{ height: '100%', width: '100%' }}>
                <Typography style={{ fontFamily: "sans-serif" }}>Ausführliche Projektbeschreibung inkl. Beschreibung des Projektstatus:</Typography>
                <Box style={{ height: '100%', width: '100%' }}>
                    <textarea
                        style={styles.input}
                        value={descriptionField.value}
                        onChange={this._changeTextField}
                    />
                </Box>
            </Box>
        );
    }
}
