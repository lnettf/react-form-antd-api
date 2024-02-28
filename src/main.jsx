import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Register } from './pages/register/Register.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { List } from './pages/list/List.jsx';
import { ConfigProvider } from 'antd';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "list",
    element: <List />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#bd9f1b",
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
