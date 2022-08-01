import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Row, Col, Form, Tabs, Input, Button, Select} from "antd";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/actions/userActions";
import { useState } from "react";
import { postJob } from "../redux/actions/jobActions";
const { TabPane } = Tabs;
const { TextArea } = Input;
const { Option } = Select;

function PostJob() {
  const [jobInfo, setJobInfo] = useState({});
  const [activeTab, setActiveTab] = useState("0");
  const dispatch = useDispatch();
  function onFirstFormFinish(values) {
    setJobInfo(values);
    setActiveTab("1");
  }
  function onFinalFormFinish(values) {
    const finalObj = { ...jobInfo, ...values };
    console.log(finalObj);
    dispatch(postJob(finalObj));
  }
  return (
    <div>
      <DefaultLayout>
        <Tabs defaultActiveKey="0" activeKey={activeTab}>
          <TabPane tab="Job Info" key="0">
            <Form layout="vertical" onFinish={onFirstFormFinish}>
              <Row gutter={16}>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="title"
                    rules={[{ required: true, message: 'Please enter the job title'}]}
                    label="Title"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="jobType"
                    rules={[{ required: true, message: 'Please choose the job type'}]}
                    label="Job Type"
                  >
                    <Select>
                      <Option value="Industry">Industry</Option>
                      <Option value="Academia">Academia</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="employeeType"
                    rules={[{ required: true, message: 'Please enter the employee type'}]}
                    label="Employee Type"
                  >
                    <Select>
                      <Option value="Full Time">Full Time</Option>
                      <Option value="Intern">Intern</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col lg={24} sm={24}>
                  <Form.Item
                    name="minimumQualification"
                    rules={[{ required: true, message: 'Please enter the minimum qualification'}]}
                    label="Minimum Qualification"
                  >
                    <TextArea rows={3} />
                  </Form.Item>
                </Col>

                <Col lg={24} sm={24}>
                  <Form.Item
                    name="preferredQualification"
                    rules={[{ required: true, message: 'Please enter the preferred qualification'}]}
                    label="Preferred Qualification"
                  >
                    <TextArea rows={6} />
                  </Form.Item>
                </Col>

                <Col lg={24} sm={24}>
                  <Form.Item name="responsibility" label="Responsibility">
                    <TextArea rows={6} />
                  </Form.Item>
                </Col>
              </Row>
              <Button type = "text" htmlType="submit">Next</Button>
            </Form>
          </TabPane>
          <TabPane tab="Company Info" key="1">
            <Form layout="vertical" onFinish={onFinalFormFinish}>
              <Row gutter={16}>
                <Col lg={12} sm={24}>
                  <Form.Item
                    name="company"
                    label="Company Name"
                    rules={[{ required: true, message: 'Please enter the name of the company' }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={12} sm={24}>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true, message: 'Please enter the email' }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={24} sm={24}>
                  <Form.Item
                    name="description"
                    label="Description"
                  >
                    <TextArea rows={3} />
                  </Form.Item>
                </Col>

                <Col lg={24} sm={24}>
                  <Form.Item
                    name="companyDescription"
                    label="Company Description"
                  >
                    <TextArea rows={3} />
                  </Form.Item>
                </Col>

                <Col lg={24} sm={24}>
                  <Form.Item
                    name="mentorDescription"
                    label="Mentor Description"
                  >
                    <TextArea rows={3} />
                  </Form.Item>
                </Col>
              </Row>
              <div class="left-btn">
                <Button
                    onClick={() => {
                      setActiveTab("0");
                    }}
                    type = "text"
                  >
                    Previous
                </Button>
              </div>
              <div class="right-btn">
                <Button type = "text" htmlType="submit">Post Job</Button>
              </div>
            </Form>
          </TabPane>
        </Tabs>
      </DefaultLayout>
    </div>
  );
}

export default PostJob;
