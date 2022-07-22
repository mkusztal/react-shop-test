import React from 'react';
//import styles from './Currency.module.scss';

class Currency extends React.Component{

  constructor(props){
    super(props);
    this.state = {value : '$'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event)  {
    this.setState({value: event.target.value});
  }

  render(){
    return (
      <select value={this.state.value} onChange={this.handleChange}>
        <option value="dollar">$ USD</option>
        <option value="euro">€ EUR</option>
        <option value="yen">¥ YPY</option>
      </select>
    );
  };
}
export default Currency;
