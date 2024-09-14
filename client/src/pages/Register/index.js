import React from "react";
import { Form } from "antd";

function Register() {
  return (
    <div className="h-screen bg-primary flex items-center justify-center">
      <div className="authentication-form bg-white p-4">
        <Form layout="vertical">
          <Form.Item label="Name" name="name">
            <input type="text" placeholder="name" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <input type="email" placeholder="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <input type="password" placeholder="password" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Register;
