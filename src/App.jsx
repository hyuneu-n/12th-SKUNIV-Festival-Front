import { GlobalStyle } from './styles/components/GlobalStyles.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import BoothPage from './pages/BoothPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import NoticePage from './pages/NoticePage.jsx';
import TimeTablePage from './pages/TimeTablePage.jsx';
import FallingAni from './components/FallingAni.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/booth',
    element: <BoothPage />,
  },
  {
    path: '/timetable',
    element: <TimeTablePage />,
  },
  {
    path: '/notice',
    element: <NoticePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="app">
        <FallingAni />
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
