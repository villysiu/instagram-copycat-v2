import React from 'react';
// import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import store from './app/store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';

import PostList from './features/posts/PostList';
import Profile from './features/user/Profile';
import Test from './features/Test';
const router = createBrowserRouter([
  {
      path: "/instagram-copycat-v2",
      element: <App />,
      children: [
        {
          path: "/instagram-copycat-v2",
          element: <PostList />
        },
        {
          path: "/instagram-copycat-v2/users/:userId",
          element: <Profile />
        },
        {
          path: "instagram-copycat-v2/test/:num",
          element: <Test />
        }
      ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

