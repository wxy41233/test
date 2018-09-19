import React, { Component } from 'react';
import { Button } from 'antd';
// import count from '../../reducers/count';
import '../.././styles/count.scss';

class Count extends Component {
  constructor (props) {
    super(props);
    this.state = {
        num : 0
    }
    this.addCount = this.addCount.bind(this);
    this.deleteCount = this.deleteCount.bind(this);
  }

  componentDidMount () {
    console.log(this.props);
  }

  addCount () {
    this.setState({
        num: this.state.num + 1 
    });
  }

  deleteCount () {
    this.setState({
        num: this.state.num - 1
    });
  }

  render() {
    return (
      <div className="Count">
           <span className='countNum'>{this.state.num}</span>
           <Button type="primary" className='add' onClick={this.addCount}>add</Button>
           <Button type="primary" className='delete' onClick={this.deleteCount}>delete</Button>
      </div>
    );
  }
}

export default Count;
