import React, { Component } from 'react';
import ServerUtils from '../../../utils/ServerUtils';
import TabHandler from '../TabHandler';
import ComputerSize from './ComputerSize';
import PhoneSize from './PhoneSize';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.ServerUtils = new ServerUtils();
    this.state = {
      value: 0,
      phoneSize: false,
    };
    window.addEventListener('resize', this.update);
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    this.checkIfPhone(window.innerWidth);
  };

  checkIfPhone = (size) => {
    let { phoneSize } = this.state;
    if (size < 799) {
      phoneSize = true;
    } else {
      phoneSize = false;
    }
    this.setState({ phoneSize });
  };

  _Logout = async () => {
    await this.ServerUtils.logout();
  };

  _Login = () => {
    this.props.pressedLogin();
  };

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  handleChangePhone = (value) => {
    this.setState({ value });
  };

  render() {
    let { username, userRole, fnb } = this.props;
    let { value, phoneSize } = this.state;

    return (
      <>
        {phoneSize ? (
          <PhoneSize
            username={username}
            userRole={userRole}
            handleChange={this.handleChangePhone}
            logout={this._Logout}
            login={this._Login}
          />
        ) : (
          <ComputerSize
            username={username}
            userRole={userRole}
            value={value}
            handleChange={this.handleChange}
            logout={this._Logout}
            login={this._Login}
          />
        )}
        <TabHandler
          clearInputs={this.props.clearInputs}
          setAllData={this.props.setAllData}
          value={value}
          index={0}
          fnb={fnb}
          getAllData={this.props.getAllData}
          tableData={this.props.tableData}
          getTableData={this.props.tableData}
        />
      </>
    );
  }
}
