import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../../pages/home/home/Home";
import Catagorydatalode from "../../pages/home/homehade/catagories/categorydatalod/Catagorydatalode";
import Productdetails from "../../pages/prosucts/producdetails/productdetails/Productdetails";
import Payment from "../../pages/prosucts/producdetails/payment/Payment";
import Displayerror from "../../hocks/displayerror/Displayerror";
import Signup from "../../pages/registration/signup/Signup";
import Login from "../../pages/registration/login/Login";
import Profile from "../../pages/profile/profile/Profile";
import User from "../../pages/profile/user/User";
import Myaddcart from "../../pages/profile/myaddcart/Myaddcart";
import Privateroght from "../privaterought/Privateroght";
import Myorder from "../../pages/profile/myorder/Myorder";
import Account from "../../pages/profile/account/account/Account";
import Forgatepassword from "../../pages/registration/forgatepassword/Forgatepassword";

export const routs = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main></Main>,
            errorElement: <Displayerror></Displayerror>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/category/:categoryname',
                    element: <Catagorydatalode></Catagorydatalode>,
                    loader: ({ params }) => fetch(`http://localhost:5000/catagorie-lod-data/${params.categoryname}`)
                },
                {
                    path: '/producdetails/:id',
                    element: <Productdetails></Productdetails>,
                    loader: ({ params }) => fetch(`http://localhost:5000/productdetails/${params.id}`)
                },
                {
                    path: `/producdetails/payment/:id`,
                    element: <Privateroght><Payment></Payment></Privateroght>,
                    loader: ({ params }) => fetch(`http://localhost:5000/productdetails/${params.id}`)
                },
                {
                    path: '/signup',
                    element: <Signup></Signup>
                },
                {
                    path: 'login',
                    element: <Login></Login>
                },
                {
                    path:'/forgatepassword',
                    element:<Forgatepassword></Forgatepassword>
                },
                {
                    path:'/profile',
                    element:<Privateroght><Profile></Profile></Privateroght>,
                    children:[
                        {
                            path:'/profile',
                            element:<Account></Account>
                        },
                        {
                            path:'/profile/user',
                            element:<Privateroght><User></User></Privateroght>
                        },
                        {
                            path:'/profile/myaddcart',
                            element:<Privateroght><Myaddcart></Myaddcart></Privateroght>
                        },
                        {
                            path:'/profile/myorder',
                            element:<Myorder></Myorder>
                        }
                    ]
                }
            ]
        }
    ])
