import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <ul className='list'>
        {
           this.props.data.map((item) => {
               return (
                    <li key={item.id} style={{listStyle: 'none'}}>
                        <span style={{marginLeft: '10px', float: 'left'}}>{item.name}</span>
                        <a href='javascript:;' style={ item.complete ? {textDecoration: 'line-through'} : null }>{item.text}</a>
                        <span onClick={() => this.props.delete(item.id)} style={{marginLeft: '10px'}}>×</span>
                    </li>
               )   
           })  
        }
      </ul>
    );
  }
}

export default List;
