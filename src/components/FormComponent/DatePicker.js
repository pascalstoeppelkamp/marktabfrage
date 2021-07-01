import React, { Component } from 'react';
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/moment'; // choose your lib
export default class DatePickerr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date()
        }
    }

    handleDateChange = (selectedDate, data) => {
        this.setState({ selectedDate });
        data.value = new Date(selectedDate);
        this.props.setAllData(data);
    }
    render() {
        let { selectedDate } = this.state;
        let { data } = this.props;
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker format={"DD/MM/YYYY"} style={{ width: '100%' }} value={selectedDate} onChange={(date) => this.handleDateChange(date, data)} />
            </MuiPickersUtilsProvider>
        )
    }
}
