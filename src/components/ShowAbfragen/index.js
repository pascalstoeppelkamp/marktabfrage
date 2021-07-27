import React, { Component } from 'react';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.showData();
  }

  async showData() {
    await fetch('http://localhost:5000/api/v1/eintraege').then((data) =>
      (data = data.json()).then((data) => {
        this.setState({ data: data.data });
        console.log(data.data);
      })
    );
  }

  getItems = (item) => {
    /* let arr = [];
    for (let key in item) {
      arr.push((key = item[key]));
    } */
    return (
      <div
        style={{
          height: 100,
          width: 500,
          borderColor: 'lightgreen',
          borderStyle: 'solid',
          margin: 30,
          borderWidth: 0.5,
          borderRadius: 10,
          overflow: 'hidden',
        }}
      >
        <p>{JSON.stringify(item)}</p>
      </div>
    );
  };
  render() {
    let { data } = this.state;
    return data.map((item) => this.getItems(item));
  }
}
