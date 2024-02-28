import { Button, Space, Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "https://api-node-form-dev-rsbk.2.us-1.fl0.io/api/users/";

export const List = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios.get(BASE_URL).then((res) => {
      if (res.status === 200) {
        setUsers(res.data);
        setIsLoading(false);
      }
      console.warn({ res });
    });
  };

  const handleDelete = async (idUser) => {
    const res = await axios.delete(`${BASE_URL}${idUser}`);

    if (res.status === 200) {
      getUsers();
    }
  };


  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "SurName",
      dataIndex: "surname",
      key: "surname",
    },

    {
      title: "Comment",
      dataIndex: "comment",
      key: "comment",
    },
    {
      title: "Action",
      key: "id",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => handleDelete(record.id)}> Borrar</Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <h1>List!!</h1>
      <Table
        dataSource={users}
        loading={isLoading}
        columns={columns}
        rowKey="id"
      />
    </>
  );
};
