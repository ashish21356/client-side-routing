import React from 'react';
import ReactDOM from 'react-dom/client';

// React Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Components
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Body from './components/pages/Body';
import Error from './components/pages/Error';

const App = () => {
    return (
      <div className="App">
        <div>
        
          <Body />    
         
        </div>
      </div>
    );
  };

  const approuter= createBrowserRouter([
    {
      path:"/",
      element:<App/>,
      
      children:[{
        path:"/",
        element:<Home/>
      },{
        path:"/AboutUS",
        element:<AboutUs/>
      },
    {
      path:"/ContactUs",
      element:<ContactUs/>
    }],
      errorElement:<Error/>,
    }
    
  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}/>);
//root.render(<App />);
