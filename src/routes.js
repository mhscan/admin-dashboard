import Home from "./pages/Home/Home"
import NewUser from "./pages/Newuser/Newuser"
import Userlist from "./pages/Userlist/Userlist"
import Product from "./pages/Product/Product"



let routes=[
    {path:"/",element:<Home></Home>},
    {path:"/NewUser",element:<NewUser></NewUser>},
    {path:"/Userlist",element:<Userlist></Userlist>},
    {path:"/Product",element:<Product></Product>},
]

export default routes;