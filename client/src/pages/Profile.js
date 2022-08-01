import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Row, Col, Form, Tabs, Input, Button, Space } from "antd";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/actions/userActions";
import { useState } from "react";
const { TabPane } = Tabs;
const { TextArea } = Input;

function Profile() {
  const [personalInfo, setPersonalInfo] = useState();
  const [activeTab, setActiveTab] = useState("1");
  const dispatch = useDispatch();
  function onPersonalInfoSubmit(values) {
    setPersonalInfo(values);
    console.log(values);
    setActiveTab("2");
  }

  function onFinalFinish(values) {
    const finalObj = { ...personalInfo, ...values };

    console.log(finalObj);

    dispatch(updateUser(finalObj));
  }

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <DefaultLayout>
        <Tabs>
          <TabPane>
            <Tabs defaultActiveKey="1" activeKey={activeTab}>
              <TabPane tab="Personal Info" key="1">
                <Form
                  layout="vertical"
                  onFinish={onPersonalInfoSubmit}
                  initialValues={user}
                >
                  <Row gutter={16}>
                    <Col lg={12} sm={24}>
                      <Form.Item
                        label="First Name"
                        required
                        rules={[{ required: true }]}
                        name="firstName"
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col lg={12} sm={24}>
                      <Form.Item
                        label="Last Name"
                        required
                        rules={[{ required: true }]}
                        name="lastName"
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col lg={12} sm={24}>
                      <Form.Item
                        label="Email"
                        required
                        rules={[{ required: true }]}
                        name="email"
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col lg={12} sm={24}>
                      <Form.Item label="Portfolio" name="portfolio">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col lg={24} sm={24}>
                      <Form.Item label="Introduction" name="about">
                        <TextArea rows={4} />
                      </Form.Item>
                    </Col>
                    <Col lg={24} sm={24}>
                      <Form.Item label="Address" name="address">
                        <TextArea rows={4} />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Button type="text" htmlType="submit">
                    Next
                  </Button>
                </Form>
              </TabPane>
              <TabPane tab="Education & Experience" key="2">
                <Form
                  initialValues={user}
                  layout="vertical"
                  onFinish={onFinalFinish}
                >
                  <Row>
                    <Col lg={24} sm={24}>
                      <Form.List name="education">
                        {(education, { add, remove }) => (
                          <div>
                            {education.map((field, index) => (
                              <div className="flex">
                                <Form.Item
                                  required
                                  {...field}
                                  label="Education"
                                  style={{ width: "80%" }}
                                  rules={[{ required: true }]}
                                >
                                  <TextArea rows={4} />
                                </Form.Item>{" "}
                                <br />
                                <Space>
                                  <Button
                                    className="add-btn"
                                    type="text"
                                    onClick={() => {
                                      add();
                                    }}
                                  >
                                    Add
                                  </Button>
                                  {index !== 0 && (
                                    <Button
                                      type="text"
                                      onClick={() => {
                                        remove(index);
                                      }}
                                    >
                                      Delete
                                    </Button>
                                  )}
                                </Space>
                              </div>
                            ))}
                          </div>
                        )}
                      </Form.List>
                    </Col>

                    <Col lg={24} sm={24}>
                      <Form.List name="skills">
                        {(skills, { add, remove }) => (
                          <div>
                            {skills.map((field, index) => (
                              <div className="flex">
                                <Form.Item
                                  required
                                  {...field}
                                  label="Skills"
                                  style={{ width: "80%" }}
                                  rules={[{ required: true }]}
                                >
                                  <TextArea rows={4} />
                                </Form.Item>{" "}
                                <br />
                                <Space>
                                  <Button
                                    className="add-btn"
                                    type="text"
                                    onClick={() => {
                                      add();
                                    }}
                                  >
                                    Add
                                  </Button>
                                  {index !== 0 && (
                                    <Button
                                      type="text"
                                      onClick={() => {
                                        remove(index);
                                      }}
                                    >
                                      Delete
                                    </Button>
                                  )}
                                </Space>
                              </div>
                            ))}
                          </div>
                        )}
                      </Form.List>
                    </Col>

                    <Col lg={24} sm={24}>
                      <Form.List name="projects">
                        {(projects, { add, remove }) => (
                          <div>
                            {projects.map((field, index) => (
                              <div className="flex">
                                <Form.Item
                                  required
                                  {...field}
                                  label="Project"
                                  style={{ width: "80%" }}
                                  rules={[{ required: true }]}
                                >
                                  <TextArea rows={4} />
                                </Form.Item>{" "}
                                <br />
                                <Space>
                                  <Button
                                    className="add-btn"
                                    type="text"
                                    onClick={() => {
                                      add();
                                    }}
                                  >
                                    Add
                                  </Button>
                                  {index !== 0 && (
                                    <Button
                                      type="text"
                                      onClick={() => {
                                        remove(index);
                                      }}
                                    >
                                      Delete
                                    </Button>
                                  )}
                                </Space>
                              </div>
                            ))}
                          </div>
                        )}
                      </Form.List>
                    </Col>

                    <Col lg={24} sm={24}>
                      <Form.List name="experience">
                        {(experience, { add, remove }) => (
                          <div>
                            {experience.map((field, index) => (
                              <div className="flex">
                                <Form.Item
                                  required
                                  {...field}
                                  label="Experience"
                                  style={{ width: "80%" }}
                                  rules={[{ required: true }]}
                                >
                                  <TextArea rows={4} />
                                </Form.Item>{" "}
                                <br />
                                <Space>
                                  <Button
                                    className="add-btn"
                                    type="text"
                                    onClick={() => {
                                      add();
                                    }}
                                  >
                                    Add
                                  </Button>
                                  {index !== 0 && (
                                    <Button
                                      type="text"
                                      onClick={() => {
                                        remove(index);
                                      }}
                                    >
                                      Delete
                                    </Button>
                                  )}
                                </Space>
                              </div>
                            ))}
                          </div>
                        )}
                      </Form.List>
                    </Col>
                  </Row>
                  <div className="left-btn">
                    <Button
                      type="text"
                      onClick={() => {
                        setActiveTab("1");
                      }}
                    >
                      Previous
                    </Button>
                  </div>
                  <div className="right-btn">
                    <Button type="text" htmlType="submit">
                      Update
                    </Button>
                  </div>
                </Form>
              </TabPane>
            </Tabs>
          </TabPane>
        </Tabs>
      </DefaultLayout>
    </div>
  );
}

export default Profile;
