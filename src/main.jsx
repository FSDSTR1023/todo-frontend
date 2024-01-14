import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import Layout from './components/Layout.jsx'
import List from './pages/List.jsx'
import Form from './pages/Form.jsx'
import Page404 from './pages/Page404.jsx'
import Login from './pages/Login.jsx'
import { TasksProvider } from './context/TasksContext.jsx'
import { FormDataProvider } from './context/FormDataContext.jsx'
import App from './pages/App.jsx'

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Page404 />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/tasks/list",
        element: <List />,
      },
      {
        path: "/tasks/create",
        element: <Form />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormDataProvider>
      <TasksProvider>
        <RouterProvider router={router} />
      </TasksProvider>
    </FormDataProvider>
  </React.StrictMode>,
)
