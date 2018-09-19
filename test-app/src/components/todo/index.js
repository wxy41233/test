import React, { Component } from 'react';
import { Button } from 'antd';
import List from './common/list';
import '../.././styles/todo.scss';

class Todo extends Component {
  constructor (props) {
    super(props);
    this.state = {
        data: []
    }
    this.arr = [];
    this.submitData = this.submitData.bind(this);
    this.deleteData = this.deleteData.bind(this);
  }

  componentDidMount () {
    this.input.focus();
  }

  submitData (e) {
    e.preventDefault();
    this.arr.forEach((item) => {
        item.complete = Boolean(item.complete < new Date().getTime());
    });
    const inputVal = this.input.value;
    const inputId = new Date().getTime();
    const opt = {
      text: inputVal,
      id: inputId,
      name: 'juju',
      complete: false
    };
    this.arr.push(opt);
    this.setState({
       data: this.arr
    });
  }

  deleteData (id) {
    this.arr = this.arr.filter((item) => item.id !== id);
    this.setState({
      data: this.arr
    });
  }

  render() {
    return (
      <div id='todo'>
        <input ref={(input) => this.input = input} />
        <Button type="primary" className='submit' onClick={this.submitData}>submit</Button>
        <List data={this.state.data} delete={this.deleteData}/>
      </div>
    );
  }
}

export default Todo;
