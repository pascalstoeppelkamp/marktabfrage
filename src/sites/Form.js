import React, { Component } from 'react'
import data from '../data/Data';
import FormComponent from '../components/FormComponent';
export default class Form extends Component {
    _getTextFields = () => {
        let arr = [];
        for (const [key, value] of Object.entries(data)) {
            arr.push(<FormComponent data={value} key={key} />);
        }
        return arr;
    }
    render() {
        return (
            this._getTextFields()
        )
    }
}
