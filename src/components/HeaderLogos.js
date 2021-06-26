import React, { Component } from 'react'
import Header from './../assets/image1.png';
export default class HeaderFile extends Component {
    render() {
        return (
            <img src={Header} alt="logos" style={{ width: '100%' }} />
        )
    }
}
