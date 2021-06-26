import React, { Component } from 'react'
import data from '../data/TextFields';
import FormComponent from '../components/FormComponent';
export default class Form extends Component {
    _getTextFields = () => {
        let arr = [];
        for (const [key, value] of Object.entries(data)) {
            arr.push(<FormComponent label={value.label} published={value.published} />);
        }
        return arr;
    }
    render() {
        return (
            this._getTextFields()
        )
    }
}
