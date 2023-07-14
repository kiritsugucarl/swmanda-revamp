import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './layout/Root/index.jsx';
import Home from './pages/Home/Home.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy.jsx';
import RegisterProcess from './pages/RegisterProcess/RegisterProcess.jsx'
import Registration from './pages/Registration/Registration.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/register-process',
        element: <RegisterProcess/>
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy/>
      },
      {
        path: '/registration',
        element: <Registration/>
      }
    ]
  }
]);

function App () {
  return <RouterProvider router={router} />;
}

export default App;
