
import Root from '../layouts/Root';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import { useContext } from 'react';
import { UserContext } from '../context/AuthProvider';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from '../layouts/Dashboard';
import NewTask from '../pages/Dashboard/New Task/NewTask';
import DashboardHome from '../pages/Dashboard/DashboardHome/DashboardHome';
import EditTask from '../pages/Dashboard/DashboardHome/EditTask';



const CustomBrowserRouter = () => {
    const { user } = useContext(UserContext);



    const homeRoutes = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/register',
                    element: <Register />,
                },
                {
                    path: '/login',
                    element: <Login />,
                }
            ],
        },
    ]);

    const dashboardRoutes = createBrowserRouter([
        {
            path: "/",
            element: <Dashboard />,
            children: [
                {
                    path: "/",
                    element: <DashboardHome />
                },
                {
                    path: "/new",
                    element: <NewTask />
                },
                {
                    path: "/edit",
                    element: <EditTask />
                }
            ]
        }
    ]);




    const browserRouter = <RouterProvider router={user ? dashboardRoutes : homeRoutes} />

    // Return the element property from the created BrowserRouter
    return browserRouter;
};

export default CustomBrowserRouter;
