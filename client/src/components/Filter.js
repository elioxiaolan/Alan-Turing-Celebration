import { Input, Modal, Form, Select, Button } from "antd";
import React, { useState } from "react";
import {
  FilterOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { filterJobs, searchJobs } from "../redux/actions/jobActions";

const { Search } = Input;
const { Option } = Select;
function Filter() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function filter(values) {
    dispatch(filterJobs(values))

    handleCancel()
  }

  return (
    <div className="flex">
      <Search
        style={{
          width: 400,
        }}
        onSearch={(value) => {
          dispatch(searchJobs(value));
        }}
        enterButton = "Search"
      />
      <FilterOutlined style={{ fontSize: '250%'}} onClick={showModal} />
      <Modal
        title="Select Filters"
        footer={false}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
      >
        <Form
          layout="vertical"
          onFinish={filter}
        >
          <Form.Item name="jobType" label="Job Type">
            <Select>
              <Option value="Industry">Industry</Option>
              <Option value="Academia">Academia</Option>
            </Select>
          </Form.Item>

          <Form.Item name="employeeType" label="Employee Type">
            <Select>
              <Option value="Intern">Intern</Option>
              <Option value="Full Time">Full Time</Option>
            </Select>
          </Form.Item>
          <Button htmlType="submit">Filter</Button>
        </Form>
      </Modal>
    </div>
  );
}

export default Filter;
