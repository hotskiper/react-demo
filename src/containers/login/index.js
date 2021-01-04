import { Form, Input, Button, Checkbox } from 'antd'
import { register, login } from './api';
import { useRef } from 'react';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

const Demo = () => {
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const ref = useRef();
  const handleSubmit = () => {
    console.log(ref.current.getFieldsValue())
    const data = ref.current.getFieldsValue();
    register(data).then((res) => {

    })
  }

  const handleLogin = () => {
    const data = ref.current.getFieldsValue();
    login(data).then((res) => {
      console.log(res);
      if(res.token){
        localStorage.setItem('token', res.token);
        localStorage.setItem('username', res.username);
        window.location.href = '/home';
      }
    })
  }

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{ width: 400, paddingTop: 100 }}
      ref={ref}
    >
      <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => {
            handleSubmit()
          }}
        >
          注册
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => {handleLogin()}}
        >
          登陆
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Demo;
