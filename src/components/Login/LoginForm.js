import { Form, Input, Button, Typography } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";
import "../../App.css";
const { Title } = Typography;

//this function will return login form
function LoginForm(props) {
  const [userResponse, setUserResponse] = useState({
    isVisible: false,
    message: "",
    userDetail: null,
    loading: false,
  });

  //this function will trigger on submitting login form
  const onFinish = (values) => {
    setUserResponse({
      isVisible: false,
      message: "",
      userDetail: null,
      loading: true,
    });

    //api call to get user detail
    axios
      .post("https://xfoil-technical-interview.herokuapp.com/login", {
        username: values.username,
        password: values.password,
      })
      .then(function (response) {
        let userObject = response?.data;
        if (userObject) {
          setUserResponse({
            isVisible: true,
            message: "success",
            userDetail: userObject,
            loading: false,
          });
        }
      })
      .catch(function (error) {
        setUserResponse({
          isVisible: true,
          message: "error",
          userDetail: {},
          loading: false,
        });
      });
  };

  useEffect(() => {
    let { loginFormDetails } = props;

    loginFormDetails(userResponse);
  }, [userResponse]);

  return (
    <div className="main">
      <div className="header">
        <img alt="logo" className="logo" src="/xfoil.jpeg" />
      </div>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 15, span: 8 }}>
          <Button
            type="primary"
            htmlType="submit"
            loading={userResponse.loading}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginForm;
