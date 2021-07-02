import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { TextField } from '@material-ui/core';
import rows from './../data/TableData';
const styles = {
    header: {
        fontSize: 15,
        color: "black",
        fontWeight: "bold",
        padding: 1,
    },
    year: {
        backgroundColor: "#FFE4C470",
        padding: 1,
    },
    TextField: {
        height: '100%',
        width: '100%'
    }
}

export default class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    _changeTextField = (textfield, data, row) => {
        let id = textfield.target.id;
        let value = textfield.target.value;
        data[id] = value;
        data.id = row;
        this.props.tableData(data)
    }
    render() {
        return (
            <TableContainer >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" style={styles.header}>Punktart</TableCell>
                            <TableCell align="center" style={styles.header}>Ein-/Ausspeisung (Bitte Angaben als Brennwert)</TableCell>
                            <TableCell align="center" style={styles.header}>Einheit</TableCell>
                            <TableCell align="center" style={styles.header}>2023</TableCell>
                            <TableCell align="center" style={styles.header}>2024</TableCell>
                            <TableCell align="center" style={styles.header}>2025</TableCell>
                            <TableCell align="center" style={styles.header}>2026</TableCell>
                            <TableCell align="center" style={styles.header}>2027</TableCell>
                            <TableCell align="center" style={styles.header}>2028</TableCell>
                            <TableCell align="center" style={styles.header}>2029</TableCell>
                            <TableCell align="center" style={styles.header}>2030</TableCell>
                            <TableCell align="center" style={styles.header}>2031</TableCell>
                            <TableCell align="center" style={styles.header}>2032</TableCell>
                            <TableCell align="center" style={styles.header}>2040</TableCell>
                            <TableCell align="center" style={styles.header}>2050</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {Object.keys(rows).map((row, index) => (
                            <TableRow key={index}>
                                <TableCell align="center">{rows[row].punktart}</TableCell>
                                <TableCell align="center">{rows[row].einAusspeisung}</TableCell>
                                <TableCell align="center">{rows[row].einheit}</TableCell>
                                <TableCell align="center" style={styles.year}><TextField id={"zweidrei"} data={row} onChange={(text, id) => this._changeTextField(text, rows[row], row)} /></TableCell>
                                <TableCell align="center" style={styles.year}><TextField id={"zweivier"} data={row} onChange={(text, id) => this._changeTextField(text, rows[row], row)} /></TableCell>
                                <TableCell align="center" style={styles.year}><TextField id={"zweifuenf"} data={row} onChange={(text, id) => this._changeTextField(text, rows[row], row)} /></TableCell>
                                <TableCell align="center" style={styles.year}><TextField id={"zweisechs"} data={row} onChange={(text, id) => this._changeTextField(text, rows[row], row)} /></TableCell>
                                <TableCell align="center" style={styles.year}><TextField id={"zweisieben"} data={row} onChange={(text, id) => this._changeTextField(text, rows[row], row)} /></TableCell>
                                <TableCell align="center" style={styles.year}><TextField id={"zweiacht"} data={row} onChange={(text, id) => this._changeTextField(text, rows[row], row)} /></TableCell>
                                <TableCell align="center" style={styles.year}><TextField id={"zweineun"} data={row} onChange={(text, id) => this._changeTextField(text, rows[row], row)} /></TableCell>
                                <TableCell align="center" style={styles.year}><TextField id={"dreinull"} data={row} onChange={(text, id) => this._changeTextField(text, rows[row], row)} /></TableCell>
                                <TableCell align="center" style={styles.year}><TextField id={"dreieins"} data={row} onChange={(text, id) => this._changeTextField(text, rows[row], row)} /></TableCell>
                                <TableCell align="center" style={styles.year}><TextField id={"dreizwei"} data={row} onChange={(text, id) => this._changeTextField(text, rows[row], row)} /></TableCell>
                                <TableCell align="center" style={styles.year}><TextField id={"viernull"} data={row} onChange={(text, id) => this._changeTextField(text, rows[row], row)} /></TableCell>
                                <TableCell align="center" style={styles.year}><TextField id={"fuenfnull"} data={row} onChange={(text, id) => this._changeTextField(text, rows[row], row)} /></TableCell>
                            </TableRow>

                        ))}
                    </TableBody>
                </Table >
            </TableContainer >
        )
    }
}