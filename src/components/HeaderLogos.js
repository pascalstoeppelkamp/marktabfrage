import React, { Component } from 'react';
import Header from './../assets/image1.png';
export default class HeaderFile extends Component {
  render() {
    return (
      <img
        src={Header}
        alt="logos"
        style={{
          width: '100%',
          minHeight: 50,
          backgroundColor: 'rgb(106, 172, 69)',
          boxShadow:
            '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 4%), 0px 1px 10px 0px rgb(0 0 0 / 52%)',
        }}
      />
    );
  }
}
