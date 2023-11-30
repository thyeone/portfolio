import Home from '@pages/Home';
import Portfolio from '@pages/Portfolio';
import Project from '@pages/Project';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <Home /> },
      { path: 'project', element: <Project /> },
      { path: 'portfolio', element: <Portfolio /> },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
