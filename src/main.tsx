
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './pages/Login.tsx';
import Signup from './pages/Signup.tsx';
import About from './pages/About.tsx';
import Services from './pages/Services.tsx';
import RootLayout from './pages/RootLayout.tsx';

import UserLayout from './pages/users/UserLayout.tsx';
import UserHome from './pages/users/UserHome.tsx';
import Userprofile from './pages/users/Userprofile.tsx';
import OauthSuccess from './pages/OauthSuccess.tsx';
import OauthFailure from './pages/OauthFailure.tsx';
import ThemeProvider from './components/ThemeProvider.tsx';



createRoot(document.getElementById('root')!).render(
  <ThemeProvider>

  <BrowserRouter>
  <Routes>

    <Route path='/' element = {<RootLayout/>} > 
      <Route index element = {<App/>} />
      <Route path="/login" element = {<Login/>} />
      <Route path='/signup' element ={<Signup/>}/>
      <Route path='/about' element = {<About/>} />
      <Route path='/services' element = {<Services/>} />
      <Route path='/dashboard' element ={<UserLayout/>} >
         <Route index element ={<UserHome/>} />
         <Route path='profile' element={<Userprofile/>} />
      </Route>
      <Route path='/oauth/success' element={<OauthSuccess/>}/>
      <Route path='/oauth/failure' element={<OauthFailure/>}/>
    </Route>

  </Routes>
 </BrowserRouter>

</ThemeProvider>
)
