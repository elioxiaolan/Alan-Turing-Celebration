import React from "react";
import { Row, Col, Form, Input, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/actions/userActions";
import { Link } from "react-router-dom";
import loginVideo from '../assets/alan_turing_celebration.mp4'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Register() {
  const dispatch = useDispatch();
  function register(values) {
    if (values.password !== values.confirmpassword) {
      message.error("Password Not Matched");
    } else {
      console.log(values);
      dispatch(registerUser(values));
    }
  }

  return (
    <div className="register">
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
        <Col lg={5}><h1 class="heading1 rainbow-text" data-aos='slide-right'>Alan Turing</h1></Col>
        <Col lg={10} sm={24} className="bs p-5 register-form">
          <h3>Create your account</h3>
          <hr />
          <Form layout="vertical" onFinish={register}>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!'}]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input type="password"/>
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="confirmpassword"
              rules={[{ required: true, message: 'Please input your confirmed password!'}]}
            >
              <Input type="password"/>
            </Form.Item>
            <Button htmlType="submit" className='mb-3'>Create account</Button> <br />
            <Link to="/login" className="mt-3">Have an account? Sign in</Link>
          </Form>
        </Col>
        <Col lg={5}><h1 class="heading2 rainbow-text" data-aos='slide-left'>Celebration</h1></Col>
      </Row>
    </div>
  );
}

export default Register;
