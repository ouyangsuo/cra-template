import { Form, Input, Button, Checkbox, Card, message } from 'antd';

import { useNavigate } from 'react-router-dom'
import { login, setUsername } from '../store/actions';
import { connect } from 'react-redux';

let navigate = null
const Demo = ({ doLogin, resetUsername }) => {

  navigate = useNavigate()

  const onFinish = (value) => {
    console.log('Success:', value);

    // 执行登录逻辑
    doLogin(value)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    resetUsername()
  };

  return (
    <Card title="登录" bordered={true} style={{ width: 500, margin: "100px auto" }}>
      <Form
        name="basic"

        labelCol={{
          span: 4,
        }}

        wrapperCol={{
          span: 20,
        }}

        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >

        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 4,
            span: 20,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 20,
          }}
        >
          <Button type="primary" htmlType="submit" block={true}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    doLogin: ({ username, password }) =>

      // 派发一个异步ation 得到其返回的promise对象
      dispatch(
        login({ username, password })
      )

        .then(data => {
          console.log("data", data)
          // 派发一个同步action去修改用户名
          dispatch(
            setUsername(username)
          )

          // 提示并跳转管理页
          message.success("登录成功")
          navigate("/admin")
        })

        .catch(err => {
          console.log("err=", err)
          message.error("登录失败")
        }),
    resetUsername: () => dispatch(setUsername(null))
  }


}

/* 给组件注入了登录方法 */
export default connect(null, mapDispatchToProps)(Demo);