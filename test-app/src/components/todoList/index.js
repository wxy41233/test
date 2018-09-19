import React, { Component } from 'react';
import { Button, Form, Input, Icon } from 'antd';
import moment from 'moment';
import List from './common/list';
import '../.././styles/todoList.scss';

class TodoList extends Component {
  constructor (props) {
    super(props);
    this.state = {
        data: []
    }
    this.arr = [];
    this.submitData = this.submitData.bind(this);
    this.delete = this.delete.bind(this);
    // this.validatePassword = this.validatePassword.bind(this);
  }

  componentDidMount () {
    const { form } = this.props;
    const data = {
        userName: 'juju',
        content: '真坑呀！！！'
    };
    form.setFieldsValue(data);
  }

  submitData (e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const time = new Date().getTime();
        const dateTime = moment().startOf('hour').fromNow();
        const valuesArr = {
            id: time,
            text: values.content,
            name: values.userName,
            time: dateTime
        };
        this.props.store.dispatch({
            type: 'ADD_TODO_LIST',
            data: valuesArr
        });
        this.setState({
            data: this.props.store.getState().todoList
        });
      }
    }); 
  }

  delete (id) {
    this.props.store.dispatch({
        type: 'DELETE_TODO_LIST',
        data: id
    });
    this.setState({
        data: this.props.store.getState().todoList
    });
  }

//   validatePassword (rule, value, callback) {
//     const form = this.props.form;
//     const reg = /^\w{6,12}$/gi;
//     console.log(form.validateFields(['userName'], { force: true }));
//     if (!reg.test(value) || !value) {
//         callback('密码格式不正确!');
//     } else {
//         callback();
//     }
//   }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { TextArea } = Input;
    const FormItem = Form.Item;
    const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };  
    return (
        <div className='formBody'>
            <Form onSubmit={this.submitData} id='todoform'>
                <FormItem
                label="userName"
                {...formItemLayout}
                >
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem
                {...formItemLayout}
                label="发布内容"
                >
                {getFieldDecorator('content', {
                    rules: [
                        { required: true, message: 'Please input your contenuto!' }
                    ],
                })(
                    <TextArea autosize={{ minRows: 2, maxRows: 6 }} style={{resize: 'none'}}/>
                )}
                </FormItem>
                <Button type="primary" htmlType="submit" className="submit">发布</Button>
            </Form>
            <List data={this.state.data} delete={this.delete}/>
        </div>
    );
  }
}
TodoList = Form.create()(TodoList);
export default TodoList;
