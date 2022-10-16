import DashboardLayout from '../layout/DashboardLayout';
import PublicLayout from '../layout/PublicLayout';
import DashboardHome from '../views/dashboard/home';
import UserList from '../views/dashboard/users/list';
import Login from '../views/Login';
import Home from '../views/site/Home';
import Media from '../views/site/Media';
import News from '../views/site/News';
import PrivateRoute from './PrivateRoute';

let routesArray = [
    {
        path: "/",
        element: (
            <PublicLayout />
        ),
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/media",
                element: <Media />
            },
            {
                path: "/news",
                element: <News />
            }
        ]
    },
    {
        path: "/dashboard",
        element: (
            <PrivateRoute>
                <DashboardLayout />
            </PrivateRoute>
        ),
        children: [
            {
                path: "",
                element: (
                    <DashboardHome />
                )
            },
            {
                path: "/dashboard/users",
                element: (
                    <UserList />
                )
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    }
]

export default function routes() {
    return routesArray;
}