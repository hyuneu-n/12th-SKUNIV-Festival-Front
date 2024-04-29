import { GlobalStyle } from './styles/components/GlobalStyles.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import BoothPage from './pages/BoothPage.jsx';
import FallingAni from './components/FallingAni.jsx';
import Notice from './pages/NoticePage.jsx';
import TimeTable from './pages/TimeTablePage.jsx';
import TimeTable2 from './pages/TimeTable2.jsx';
import LostPage from './pages/LostPage.jsx';
import NoticeInput from './pages/NoticeInputPage.jsx';
import LostInput from './pages/LostInputPage.jsx';
import LostFind from './pages/LostFindPage.jsx';
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
    element: <TimeTable />,
  },
  {
    path: '/notice',
    element: <Notice />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/timetable2',
    element: <TimeTable2 />,
  },
  {
    path: '/lostItems',
    element: <LostPage />,
  },
  {
    path: '/noticeInput',
    element: <NoticeInput />,
  },
  {
    path: '/lostInput',
    element: <LostInput />,
  },
  {
    path: '/findItems',
    element: <LostFind />,
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
