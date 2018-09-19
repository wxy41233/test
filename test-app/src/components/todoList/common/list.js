import React, { Component } from 'react';
import { Icon } from 'antd';

export default class List extends Component {
  render() {
    return (
      <ul className='list'>
        {
           this.props.data && this.props.data.map((item) => {
               return (
                    <li key={item.id} style={{listStyle: 'none'}}>
                        <span>{item.name}:</span>
                        <div className='contentText'>{item.text}</div>
                        <span className='submitTime'>{item.time}</span>
                        <Icon type="delete" theme="twoTone" onClick={() => this.props.delete(item.id)}/>
                    </li>
               )   
           })  
        }
      </ul>
    );
  }
}
