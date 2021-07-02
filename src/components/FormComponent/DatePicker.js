import React, { Component } from 'react';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/moment';
import "moment/locale/de";

const styles = {
    KeyboardDatePicker: {
        width: '100%', backgroundColor: "#FFE4C470"
    },

}
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
                <KeyboardDatePicker
                    style={styles.KeyboardDatePicker}
                    format={"MM/YYYY"}
                    value={selectedDate}
                    onChange={(date) => this.handleDateChange(date, data)} />
            </MuiPickersUtilsProvider>
        )
    }
}
