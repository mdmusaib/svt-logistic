import React, { useEffect, useRef, useState } from "react";
import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import {
  MailOutlined,
  MobileOutlined,
  UserOutlined,
  PercentageOutlined,
} from "@ant-design/icons";
import moment from "moment";
import EditingTableInBooking from "./EditingTableInBooking";
import EditingTableForVechicle from "./EditingTableForVechicle";
import useApi from "src/core/useApi";
import TextArea from "antd/lib/input/TextArea";

const { Option } = Select;

const BookingPage = (props) => {
  const [form] = Form.useForm();
  let containerRef = useRef();
  let api=useApi();
  const [tableData, setTableData] = useState([]);
  const [vehicleTableData, setVehicleTableData] = useState([]);
  useEffect(() => {
    let lgScreen = window.matchMedia("(min-width: 768px)").matches;
    if (lgScreen) {
      containerRef.current.style.padding = "20px 60px";
    }
  }, []);

  const handleSubmit =async (value) => {
    let bookingDetails={...value,delivery_date:new Date(value.delivery_date).toLocaleDateString(),date:new Date(value.date).toLocaleDateString(),items:JSON.stringify(tableData),vehicle_details:JSON.stringify(vehicleTableData)}
    let response=await api.invoke({endPoint:"https://svt-logictics.herokuapp.com/api/addBooking",method:"post",data:bookingDetails});
    if(response.status===1){
      form.resetFields();
      setTableData([]);
      setVehicleTableData([]);
    }else{
      alert('Something Went Wroung You Booking Couldn`t able to create!');
    }

    console.log("called", response);

  };

  const getTableData = (data) => {
    if (data.length > 0) {
      let calcTotalWeight = 0;
      data.map((list) => {
        calcTotalWeight = calcTotalWeight + parseInt(list.weight);
      });
      setTableData(data);
      form.setFieldsValue({
        total_weight: calcTotalWeight,
      });
      updateFinalRate();
    }
  };

  const getTableDataForVehicle = (data) => {
    setVehicleTableData(data);
  };

  const updateFinalRate = () => {
    let value = form.getFieldValue();
    let ratePerKg = parseFloat(value.rate);
    let serviceTax = parseFloat(value.tax);
    let totalWeight = parseFloat(value.total_weight);
    let totalPrice = ratePerKg * totalWeight;
    let taxRate = (totalPrice * serviceTax) / 100;
    let finalPrice = totalPrice + taxRate;
    if (ratePerKg && totalWeight)
      form.setFieldsValue({
        total_amount: parseFloat(finalPrice) ? finalPrice : 0,
      });
  };

  const handleReset = () => {
    form.resetFields();
    setTableData([]);
  };

  return (
    <div ref={containerRef} style={{ padding: "20px 10px" }}>
      <Row>
        <p style={{ fontSize: "calc(10px + 1vmin)" }}>Booking</p>
      </Row>
      <hr />
      <Form style={{ paddingTop: 20 }} form={form} onFinish={handleSubmit}>
        <Row>
          <Col xl={12}>
            <Row>
              <Col span={11}>
                <label>Select Coustmer Type *</label>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="customer_type"
                  rules={[
                    { required: true, message: "Please select customer type!" },
                  ]}
                >
                  <Select placeholder="Select">
                    <Option value="Accounted Coustmer">
                      Accounted Coustmer
                    </Option>
                    <Option value="Walkin Coustmer">Walkin Coustmer</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <p style={{ fontSize: "calc(10px + 1vmin)" }}>Sender Details..</p>
            </Row>
            <Row>
              <Col span={11}>
                <label>Email *</label>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="sender_email"
                  rules={[
                    { type: "email", message: "Please Enter Valid Mail" },
                    { required: true, message: "Please enter your mail!" },
                  ]}
                >
                  <Input placeholder="Email" prefix={<MailOutlined />} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <label>Mobile Number *</label>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="sender_mobile"
                  rules={[
                    { required: true, message: "Please enter your number!" },
                  ]}
                >
                  <Input
                    placeholder="Mobile Number"
                    maxLength={10}
                    prefix={<MobileOutlined />}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <label>Origin *</label>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="sender_origin"
                  rules={[
                    { required: true, message: "Please enter your origin!" },
                  ]}
                >
                  <Input placeholder="Origin" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <label>Origin Service Location *</label>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="originServiceLocation"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your origin service location!",
                    },
                  ]}
                >
                  <Input placeholder="Origin Service Location" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <p style={{ fontSize: "calc(10px + 1vmin)" }}>
                Receiver Details..
              </p>
            </Row>
            <Row>
              <Col span={11}>
                <label>Name *</label>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="receiver_name"
                  rules={[
                    { required: true, message: "Please enter your name!" },
                  ]}
                >
                  <Input placeholder="Name" prefix={<UserOutlined />} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <label>Email *</label>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="receiver_email"
                  rules={[
                    { type: "email", message: "Please Enter Valid Mail" },
                    { required: true, message: "Please enter your mail!" },
                  ]}
                >
                  <Input placeholder="Email" prefix={<MailOutlined />} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <label>Mobile Number *</label>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="receiver_mobile"
                  rules={[
                    { required: true, message: "Please enter your number!" },
                  ]}
                >
                  <Input
                    placeholder="Mobile Number"
                    maxLength={10}
                    prefix={<MobileOutlined />}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <label>Address *</label>
              </Col>
              <Col span={11}>
               
                <Form.Item
                  name="receiver_address"
                  rules={[
                    {
                      required: true,
                      message: "Please enter receiver address",
                    },
                  ]}
                >
                  <TextArea placeholder="Receiver Address" />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col xl={12}>
            <Row>
              <EditingTableInBooking
                getTableData={getTableData}
                rowData={tableData}
              />
            </Row>
            <hr />
            <Row>
              <Col span={11}>
                <label>Total Weight *</label>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="total_weight"
                  rules={[
                    { required: true, message: "Please enter total weight!" },
                  ]}
                  initialValue={0}
                >
                  <Input placeholder="Total Weight" disabled />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <label>Rate/KG *</label>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="rate"
                  rules={[{ required: true, message: "Please enter rate/kg!" }]}
                >
                  <Input placeholder="Rate/Kg" onChange={updateFinalRate} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <label>Date *</label>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="date"
                  rules={[{ required: true, message: "Please select date!" }]}
                  initialValue={moment()}
                >
                  <DatePicker
                    disabled
                    style={{ width: "100%" }}
                    format="DD/MM/YYYY"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <label>Expected Delivery Date *</label>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="delivery_date"
                  rules={[
                    { required: true, message: "Please select expected date!" },
                  ]}
                >
                  <DatePicker
                    style={{ width: "100%" }}
                    format="DD/MM/YYYY"
                    disabledDate={(current) => {
                      return (
                        current &&
                        current < new Date(Date.now() - 24 * 60 * 60 * 1000)
                      );
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <label>Service Tax *</label>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="tax"
                  rules={[
                    { required: true, message: "Please enter service tax!" },
                  ]}
                  initialValue={"12.5"}
                >
                  <Input
                    placeholder="Service Tax"
                    suffix={<PercentageOutlined />}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <label>Final Total Amount *</label>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="total_amount"
                  rules={[{ required: true, message: "Please enter Freight!" }]}
                >
                  <Input placeholder="Freight" />
                </Form.Item>
              </Col>
              
            </Row>
            <Row>
              <Col span={11}>
                <label>GST *</label>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="gst_type"
                  rules={[{ required: true, message: "Please enter Freight!" }]}
                >
                  <Select placeholder="Select">
                    <Option value="With Tax">
                      With Tax
                    </Option>
                    <Option value="Without Tax">Without Tax</Option>
                  </Select>
                </Form.Item>
              </Col>
              
            </Row>
          </Col>
        </Row>
        <hr />
        <EditingTableForVechicle
          getTableData={getTableDataForVehicle}
          rowData={vehicleTableData}
        />
        <hr />
        <Row gutter={16}>
          <Col>
            <Form.Item>
              <Button type={"primary"} danger htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
          <Col>
            <Button onClick={handleReset}>Reset</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default BookingPage;
