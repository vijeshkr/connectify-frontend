import Login from './pages/login/Login'
import Register from './pages/register/Register'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import LeftBar from './components/leftBar/LeftBar';
import RightBar from './components/rightBar/RightBar';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile'

function App() {

  // Logged in or not boolean variable

  let currentUser = true;

  // Layout component to structure the main layout with Navbar, LeftBar, RighBar and dynamic content via Outlet
  const Layout = () =>{
    return(
      <div>
        <Navbar/>
        <div className='flex'>
          <LeftBar/>
          <Outlet/>
          <RightBar/>
        </div>
      </div>
    );
  };

  // Functionality to check the user logged in or not, then navigate to the pages
  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to='/login'/>
    }
    return children;
  }

  // Define the routes using createBrowserRouter
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute>
                 <Layout/>
               </ProtectedRoute>,
      // Nested routes within the Layout component
      children:[
        {
          path:'/',
        element:<Home/>
        },
        {
          path:'/profile/:id',
          element:<Profile/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);

  return (
    <>
    {/* Provide the router to the application */}
     <RouterProvider router={router} />
    </>
  )
}

export default App
