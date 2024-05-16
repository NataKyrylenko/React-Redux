import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Homework16 from "homeworks/Homework16/Homework16"
import Homework17 from "homeworks/Homework17/Homework17"
//import Lesson16 from "lessons/Lesson16"

import Layout from "pages/UsersApp/Layout/Layout"
import Home from "pages/UsersApp/Home/Home"
import Users from "pages/UsersApp/Users/Users"

const App = () => {
  return (
    <BrowserRouter>
      {/* Lesson18 - Layout и его вложенные рауты */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element="Page Not Found" />
        </Routes>
      </Layout>
    
    
    </BrowserRouter>




    //  <Lesson16/>
    //  <Homework16/>
    // <Homework17 />


  )
}

export default App
