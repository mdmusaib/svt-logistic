import React, { useContext, useState, useEffect, useRef } from "react";
import { Table, Input, Button, Popconfirm, Form } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

class EditingTableForVechicle extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "* Vehicle No",
        dataIndex: "vehicle_no",
        editable: true,
        width:"50%"
      },
      {
        title: "* From",
        dataIndex: "from_loc",
        editable: true,
        width:"50%"
      },
      {
        title: "* To",
        dataIndex: "to_loc",
        editable: true,
        width:"50%"
      },
      {
        title: "* Material",
        dataIndex: "material",
        editable: true,
        width:"50%"
      },
      {
        title: "* Party Name",
        dataIndex: "party_name",
        editable: true,
        width:"50%"
      },
      {
        title: "* Rate",
        dataIndex: "rate",
        editable: true,
        width:"50%"
      },
      {
        title: "* Scale",
        dataIndex: "scale",
        editable: true,
        width:"50%"
      },
      {
        title: "* Tot Amt",
        dataIndex: "total_amount",
        editable: true,
      },
      {
        title: "* Expences",
        dataIndex: "expences",
        editable: true,
      },
      {
        title: "* Driver Name",
        dataIndex: "driver_name",
        editable: true,
      },
      {
        title: "* Profit",
        dataIndex: "profit",
        editable: true,
      },
      {
        title: "",
        dataIndex: "operation",
        render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => this.handleDelete(record.key)}
            >
              <DeleteOutlined />
            </Popconfirm>
          ) : null,
      },
    ];
    this.state = {
      dataSource: [],
      count: 2,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      JSON.stringify(prevProps.rowData) !== JSON.stringify(this.props.rowData)
    ) {
      this.setState({
        dataSource: this.props.rowData,
      });
    }
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      vehicle_no: "0",
      from_loc: "0",
      to_loc: "0",
      material: "0",
      party_name: "0",
      rate: "0",
      scale: "0",
      total_amount: "0",
      expences: "0",
      driver_name: "0",
      profit: "0",
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };

  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState(
      {
        dataSource: newData,
      },
      () => this.props.getTableData(this.state.dataSource)
    );
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div style={{ width: "100%",overflowX:"scroll" }}>
        <Button
          onClick={this.handleAdd}
          type="primary"
          style={{
            marginBottom: 16,
          }}
        >
          Add a row
        </Button>
        <Table
          components={components}
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={columns}
          pagination={false}
        />
      </div>
    );
  }
}

export default EditingTableForVechicle;
