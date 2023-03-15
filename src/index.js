import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import store from './app/store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';

import PostList from './features/posts/PostList';
import Profile from './features/user/Profile';
import PostFetchPage from './features/posts/post/PostFetchPage';

const router = createBrowserRouter([
  {
      path: "/instagram-copycat-v2",
      element: <App />,
      children: [
        {
          path: "/instagram-copycat-v2",
          element: <PostList />,
       
        },
        {
          path: "/instagram-copycat-v2/users/:userId",
          element: <Profile />
        },
        {
          path: "/instagram-copycat-v2/posts/:postId",
          element: <PostFetchPage />
        },
      ],
      
    },
    {
      path: '/instagram-copycat-v2/*',
      element: <Navigate to="/instagram-copycat-v2" replace />

    },
   
]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    
    <RouterProvider router={router} />
  </Provider>
);

