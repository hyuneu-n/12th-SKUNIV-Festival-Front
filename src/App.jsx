import { GlobalStyle } from './styles/components/GlobalStyles.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import BoothPage from './pages/BoothPage.jsx';
import EvacuationPage from './pages/EvacuationPage.jsx';
import FallingAni from './components/FallingAni.jsx';
import Notice, { loader as getData } from './pages/NoticePage.jsx';
import TimeTable from './pages/TimeTable.jsx';
import TimeTable2 from './pages/TimeTable2.jsx';
import TimeTable3 from './pages/TimeTable3.jsx';
import TimeTable4 from './pages/TimeTable4.jsx';
import LostPage, { loads as getList } from './pages/LostPage.jsx';
import NoticeInput, { action as postData } from './pages/NoticeInputPage.jsx';
import LostInput from './pages/LostInputPage.jsx';
import LostFind from './pages/LostFindPage.jsx';
import RootLayout from './components/RootLayout.jsx';
import NoticeShowPage, {
  loader as getDetailData,
} from './pages/NoticeShowPage';
import NoticeRootLayout from './components/NoticRootLayout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'booth',
        element: <BoothPage />,
      },
      {
        path: 'notice',
        element: <NoticeRootLayout />,
        children: [
          {
            index: true,
            element: <Notice />,
            loader: getData,
          },
          {
            path: ':id',
            element: <NoticeShowPage />,
            loader: getDetailData,
          },
        ],
      },
      {
        path: 'safety',
        element: <EvacuationPage />,
      },
      {
        path: 'timetable',
        element: <TimeTable />,
      },

      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'timetable2',
        element: <TimeTable2 />,
      },
      {
        path: 'timetable3',
        element: <TimeTable3 />,
      },
      {
        path: 'timetable4',
        element: <TimeTable4 />,
      },
      {
        path: 'timetable2',
        element: <TimeTable2 />,
      },
      {
        path: 'lostItems',
        element: <LostPage />,
        loader: getList,
      },
      {
        path: 'noticeInput',
        element: <NoticeInput />,
        action: postData,
      },
      {
        path: 'lostInput',
        element: <LostInput />,
      },
      {
        path: 'findItems',
        element: <LostFind />,
        loader: getList,
      },
    ],
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
