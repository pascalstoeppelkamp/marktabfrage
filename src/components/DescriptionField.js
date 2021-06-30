import React from "react";
import { TextField, Box } from "@material-ui/core";


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
    render() {
        return (
            <Box style={{ height: '100%', width: '100%' }}>
                <t style={{ fontFamily: "sans-serif" }}>Ausführliche Projektbeschreibung inkl. Beschreibung des Projektstatus:</t>
                <Box style={{ height: '100%', width: '100%' }}>
                    <textarea
                        style={styles.input}
                    />
                </Box>
            </Box>
        );
    }
}
