import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import store from './app/store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';

import PostList from './features/posts/PostList';
import Profile from './features/user/profile/Profile';
import About from './features/header/About';
const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <PostList />,
       
        },
        {
          path: "/users/:id",
          element: <Profile />
        },
        {
          path: "/about",
          element: <About />
        },

      ],
      
    },
    // {
    //   path: '/*',
    //   element: <Navigate to="/" replace />

    // },
   
]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
 
  <Provider store={store}>
    
    <RouterProvider router={router} />
  </Provider>

);

