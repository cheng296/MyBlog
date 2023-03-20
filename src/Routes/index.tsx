import {Navigate} from 'react-router-dom'
import SandBox from "../pages/SandBox";
import Login from "../pages/Login";
import Home from '../pages/SandBox/Home';
import Category from '../pages/SandBox/Category';
import BlogAdd from '../pages/SandBox/BlogManage/BlogAdd';
import BlogDraft from '../pages/SandBox/BlogManage/BlogDraft';
import BlogPublished from '../pages/SandBox/BlogManage/BlogPublished';
import BlogManage from '../pages/SandBox/BlogManage';
import Register from '../pages/Register';
import NotFound from '../pages/404';
import BlogPreview from '../pages/SandBox/BlogPreview'
import BlogUpdate from '../pages/SandBox/BlogManage/BlogUpdate';
import About from '../pages/SandBox/About';

const routes = [
    {
        path:'login',
        element:<Login/>
    },
    {
        path:'register',
        element:<Register/>
    },
    {
        path:'/',
        element:<SandBox/>,
        children:[
            {
                path:'home',
                element:<Home/>
            },
            {
                path:'category',
                element:<Category/>
            },
            {
                path:'blogManage',
                element:<BlogManage/>,
                children:[
                    {
                        path:'blogAdd',
                        element:<BlogAdd/>
                    },
                    {
                        path:'blogDraft',
                        element:<BlogDraft/>
                    },
                    {
                        path:'blogPublished',
                        element:<BlogPublished/>
                    },
                    {
                        path:'blogUpdate/:id',
                        element:<BlogUpdate/>
                    },
                    {
                        path: '/blogManage',
                        element: <Navigate to='blogAdd' />
                    }
                ]
            },
            {
                path:'blogPreview/:id',
                element:<BlogPreview/>
            },
            {
                path: 'about',
                element: <About/>
            },
            {
                path: '/',
                element: <Navigate to='home' />
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    },
];
export default routes