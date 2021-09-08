import React from 'react';
import rows from '../../data/TableData';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  {
    field: 'punktart',
    headerName: 'Punktart',
    sortable: false,
    width: 165,
  },
  {
    field: 'einAusspeisung',
    headerName: 'Ein-/Ausspeisung (Bitte Angaben als Brennwert)',
    sortable: false,
    width: 225,
  },
  {
    field: 'einheit',
    headerName: ' Einheit',
    type: 'number',
    sortable: false,
    width: 120,
  },
  {
    field: 'zweidrei',
    headerName: ' 2023',
    type: 'number',
    editable: true,
    sortable: false,
    width: 120,
  },
  {
    field: 'zweivier',
    headerName: ' 2024',
    type: 'number',
    width: 120,
    editable: true,
    sortable: false,
  },
  {
    field: 'zweifuenf',
    headerName: ' 2025',
    type: 'number',
    width: 120,
    editable: true,
    sortable: false,
  },
  {
    field: 'zweisechs',
    headerName: ' 2026',
    type: 'number',
    width: 120,
    editable: true,
    sortable: false,
  },
  {
    field: 'zweisieben',
    headerName: ' 2027',
    type: 'number',
    width: 120,
    editable: true,
    sortable: false,
  },
  {
    field: 'zweiacht',
    headerName: ' 2028',
    type: 'number',
    width: 120,
    editable: true,
    sortable: false,
  },
  {
    field: 'zweineun',
    headerName: ' 2029',
    type: 'number',
    width: 120,
    editable: true,
    sortable: false,
  },
  {
    field: 'dreinull',
    headerName: ' 2030',
    type: 'number',
    width: 120,
    editable: true,
    sortable: false,
  },
  {
    field: 'dreieins',
    headerName: ' 2031',
    type: 'number',
    width: 120,
    editable: true,
    sortable: false,
  },
  {
    width: 120,
    field: 'dreizwei',
    headerName: ' 2032',
    type: 'number',
    editable: true,
    sortable: false,
  },
];

export default class DataTable extends React.Component {
  _changeTextField = (textfield, data, row) => {
    let id = textfield.target.id;
    let value = textfield.target.value;
    data[id] = value;
    data.id = row;
    this.props.tableData(data);
  };

  handleEditRowsModelChange = (model) => {
    if (!model) return;
    let v = null;
    let id = null;
    let data = null;
    let keyy = null;

    for (const [key, value] of Object.entries(model)) {
      id = key;
      for (const [kkey, val] of Object.entries(value)) {
        v = val.value;
        keyy = kkey;
      }
    }
    if (!keyy || !id) return;
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].id == id) {
        data = rows[i];
        data.id = i;
        data[keyy] = v;
      }
    }
    if (!data) return;
    this.props.tableData(data);
  };

  render() {
    return (
      <DataGrid
        checkboxSelection={false}
        style={{ height: '100%', backgroundColor: '#FFE4C470' }}
        rows={rows}
        autoHeight={true}
        columns={columns}
        hideFooterSelectedRowCount={true}
        hideFooterPagination={true}
        hideFooterRowCount={true}
        disableColumnFilter={true}
        disableColumnMenu={true}
        onEditRowsModelChange={this.handleEditRowsModelChange}
      />
    );
  }
}
