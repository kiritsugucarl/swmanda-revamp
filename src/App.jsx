import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './layout/Root/index.jsx';
import Assistance from './pages/Assistance/Assistance.jsx'
import AssistanceApplication from './pages/AssistanceApplication/AssistanceApplication.jsx';
import AssistanceDetails from './pages/AssistanceDetails/AssistanceDetails.jsx';
import AssistanceSuccess from './pages/AssistanceSuccess/AssistanceSuccess.jsx';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import MyAssistance from './pages/MyAssistance/MyAssistance.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy.jsx';
import Profile from './pages/Profile/Profile.jsx';
import RegisterProcess from './pages/RegisterProcess/RegisterProcess.jsx'
import RegisterSuccess from './pages/RegisterSuccess/RegisterSuccess.jsx';
import Registration from './pages/Registration/Registration.jsx';
import SetupAccount from './pages/SetupAccount/SetupAccount.jsx';
import Status from './pages/Status/Status.jsx';

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
      },
      {
        path: '/setup-account',
        element: <SetupAccount/>
      },
      {
        path: '/register-success',
        element: <RegisterSuccess/>
      },
      {
        path: '/assistance',
        element: <Assistance />
      },
      {
        path: '/my-assistance',
        element: <MyAssistance/>
      },
      {
        path: '/assistance/:id',
        element: <AssistanceDetails/>
      },
      {
        path: '/assistance-application/:id',
        element: <AssistanceApplication/>
      },
      {
        path: '/assistance-success/:id',
        element: <AssistanceSuccess/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/status',
        element: <Status/>
      },
      {
        path: '/profile',
        element: <Profile/>
      }
    ]
  }
]);

function App () {
  return <RouterProvider router={router} />;
}

export default App;
