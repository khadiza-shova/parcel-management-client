import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/MainHome/MainHome";
import MainHome from "../Pages/Home/MainHome/MainHome";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import UserProfile from "../Pages/Dashboard/UserDashboard/UserProfile";
import BookParcels from "../Pages/Dashboard/UserDashboard/BookParcels";
import MyParcels from "../Pages/Dashboard/UserDashboard/MyParcels";
import AllParcels from "../Pages/Dashboard/AdminDashboard/AllParcels";
import AllUser from "../Pages/Dashboard/AdminDashboard/AllUser";
import AllDeliveryMen from "../Pages/Dashboard/AdminDashboard/AllDeliveryMen";
import MyReviews from "../Pages/Dashboard/DeliveryManDeshboard/MyReviews";
import MyDeliveryList from "../Pages/Dashboard/DeliveryManDeshboard/MyDeliveryList";
import PrivateRoute from "./PrivateRoute";
import Statistic from "../Pages/Dashboard/AdminDashboard/statistic";
import UserHome from "../Pages/Dashboard/UserDashboard/userHome";
import DeliveryHome from "../Pages/Dashboard/DeliveryManDeshboard/DeliveryHome";
import Payment from "../Pages/Payement/Payement";
import ParcelUpdate from "../Pages/Dashboard/AdminDashboard/ParcelUpdate";




const router =createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<MainHome></MainHome>
            },
            {
                path:"/login",
                element:<Login></Login>  
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    },
    {
        path:"dashboard",
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            // user Related Route
            {
                path:"userHome",
                element:<UserHome></UserHome>
            },
            {
                path:"userprofile",
                element:<UserProfile></UserProfile>
            },
            {
                path:"bookParcels",
                element:<BookParcels></BookParcels>
            },
            {
                path:"myParcles",
                element:<MyParcels></MyParcels>
            },
            {
                path:"payement",
                element:<Payment></Payment>
            },
            {
                path:"updateParcle/:id",
                element:<ParcelUpdate></ParcelUpdate>,
                loader:({params})=>fetch(`https://parcel-management-server.vercel.app/updateParcle/${params.id}`)
            },

            // Admin Realted Route 
            {
                path:"allParcles",
                element:<AllParcels></AllParcels>
            },
            {
                path:"allUser",
                element:<AllUser></AllUser>
            },
            {
                path:"allDeliveryMen",
                element:<AllDeliveryMen></AllDeliveryMen>
            },
            {
                path:"statistic",
                element:<Statistic></Statistic>
            },

            // Delivery Men Related Route 
            {
                path:"myDeliveryList",
                element:<MyDeliveryList></MyDeliveryList>
            },
            {
                path:"myReviews",
                element:<MyReviews></MyReviews>
            },
            {
                path:"deliveryHome",
                element:<DeliveryHome></DeliveryHome>
            }
        ]
    }
])

export default router;