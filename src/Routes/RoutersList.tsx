import {Navigate} from 'react-router-dom'
import SandBox from "../views/SandBox/SandBox";
import Login from "../views/Login/Login";
import Home from '../views/SandBox/Home/Home';
import Category from '../views/SandBox/Category/Category';
import BlogAdd from '../views/SandBox/blog_manage/BlogAdd';
import BlogDraft from '../views/SandBox/blog_manage/BlogDraft';
import BlogUnPublish from '../views/SandBox/blog_manage/BlogUnPublish';
import BlogPublished from '../views/SandBox/blog_manage/BlogPublished';

const routes = [
    {
        path:'login',
        element:<Login/>
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
                        path:'blog-unpublish',
                        element:<BlogUnPublish/>
                    },
                    {
                        path:'blog-published',
                        element:<BlogPublished/>
                    }
                ]
            },
            {
                path: '/',
                element: <Navigate to='home' />
            },
        ]
    }
];
export default routes