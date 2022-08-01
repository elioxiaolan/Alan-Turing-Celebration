import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/userActions";
import { Link } from "react-router-dom";
import loginVideo from '../assets/alan_turing_celebration.mp4'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Login() {
  const dispatch = useDispatch();
  function login(values) {
    dispatch(loginUser(values));
  }
  return (
    <div className="login">
      <video 
        id="myVideo"
        src={loginVideo}
        type="video/mp4"
        loop
        controls={false}
        muted
        autoPlay
      />
      <Row justify="center" className="flex align-items-center">
        <Col lg={5}><h1 class="heading1 rainbow-text" data-aos='slide-left'>Alan Turing</h1></Col>
        <Col lg={10} sm={24} className="bs p-5 login-form">
          <h3>Sign in to your account</h3>
          <hr />
          <Form layout="vertical" onFinish={login} >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!', }]}
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
            <Input type="password" />
            </Form.Item>
            <Button htmlType="submit" className='mb-3'>Login</Button> <br />

            <Link to="/register" className="mt-3">Don't have an account? Sign up</Link>
          </Form>
        </Col>
        <Col lg={5}><h1 class="heading2 rainbow-text" data-aos='slide-right'>Celebration</h1></Col>
      </Row>
    </div>
  );
}

export default Login;
