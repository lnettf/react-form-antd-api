import { Button, Form, Input } from "antd";
import Swal from "sweetalert2";

export const FormUser = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const handleSubmit = (event) => {
    onSubmit(event);
    form.resetFields();
  };

  const onFinishFailed = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Error!",
    });
  };

  return (
    <>
      <Form
        form={form}
        name="register-user"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your Name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Surname"
          name="surname"
          rules={[{ required: true, message: "Please input your Surname!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Comment"
          name="comment"
          rules={[{ required: true, message: "Please input your comment!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            // type="primary"
            htmlType="submit"
            // style={{ background: "red", borderColor: "yellow" }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
