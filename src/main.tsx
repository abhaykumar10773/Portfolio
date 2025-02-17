import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider,createBrowserRouter} from 'react-router-dom';


const router = createBrowserRouter([
  {
    
    path: "/",
    element:<App/>
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
);
