import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';




export default class DataTable extends React.Component {
    createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }
    render() {
        const rows = [
            this.createData('Wasserstoff', 'Einspeiseleistung', 'MWh/hth', 24, 4.0),
            this.createData('Wasserstoff', 'Einspeisemenge pro Jahr', 'MWh/hth', 24, 4.0),
            this.createData('Wasserstoff', 'Ausspeiseleistung', 'MWh/hth', 24, 4.0),
            this.createData('Wasserstoff', 'Ausspeisemenge pro Jahr', 'MWh/hth', 24, 4.0),
            this.createData('Synthetisches Methan', 'Einspeiseleistung', 'MWh/hth', 24, 4.0),
            this.createData('Synthetisches Methan', 'Einspeisemenge pro Jahr', 'MWh/hth', 24, 4.0),
            this.createData('Biomethan', 'Einspeiseleistung', 'MWh/hth', 24, 4.0),
            this.createData('Biomethan', 'Einspeisemenge pro Jahr', 'MWh/hth', 24, 4.0),
            this.createData('Bei geplanter Elektrolyse:', 'Elektrische Leistung der Anlage', 'MWh/hth', 24, 4.0),
        ];
        return (
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Punktart</TableCell>
                            <TableCell >Ein-/Ausspeisung (Bitte Angaben als Brennwert)</TableCell>
                            <TableCell >Einheit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell >{row.calories}</TableCell>
                                <TableCell >{row.fat}</TableCell>
                                <TableCell >{row.carbs}</TableCell>
                                <TableCell >{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}