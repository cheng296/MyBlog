import {Navigate} from 'react-router-dom'
import SandBox from "../pages/SandBox/SandBox";
import Login from "../pages/Login/Login";
import Home from '../pages/SandBox/Home/Home';
import Category from '../pages/SandBox/Category/Category';
import BlogAdd from '../pages/SandBox/BlogManage/BlogAdd';
import BlogDraft from '../pages/SandBox/BlogManage/BlogDraft';
import BlogPublished from '../pages/SandBox/BlogManage/BlogPublished';
import BlogManage from '../pages/SandBox/BlogManage/BlogManage';
import Register from '../pages/Register/Register';
import Invalid from '../pages/Invalid/Invalid';
import BlogPreview from '../pages/SandBox/BlogManage/BlogPreview'
import BlogUpdate from '../pages/SandBox/BlogManage/BlogUpdate';

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
                path:'blog-manage',
                element:<BlogManage/>,
                children:[
                    {
                        path:'blog-add',
                        element:<BlogAdd/>
                    },
                    {
                        path:'blog-draft',
                        element:<BlogDraft/>
                    },
                    {
                        path:'blog-published',
                        element:<BlogPublished/>
                    },
                    {
                        path:'blog-preview/:id',
                        element:<BlogPreview/>
                    },
                    {
                        path:'blog-update/:id',
                        element:<BlogUpdate/>
                    },
                    {
                        path: '/blog-manage',
                        element: <Navigate to='blog-add' />
                    },
                ]
            },
            {
                path: '/',
                element: <Navigate to='home' />
            },
            {
                path: '*',
                element: <Invalid/>
            }
        ]
    },
];
export default routes