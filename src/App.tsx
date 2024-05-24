import Home from "pages/WeatherApp/Home/Home";
import Layout from "pages/WeatherApp/Layout/Layout";
import Weather from "pages/WeatherApp/Weather/Weather";
import { BrowserRouter, Routes, Route } from "react-router-dom"
//import Homework16 from "homeworks/Homework16/Homework16"
//import Homework17 from "homeworks/Homework17/Homework17"
//import Lesson16 from "lessons/Lesson16"

//import Layout from "pages/UsersApp/Layout/Layout"
//import Home from "pages/UsersApp/Home/Home"
//import Users from "pages/UsersApp/Users/Users"
//import Homework19 from "homeworks/Homework19/Homework19"
//import Lesson19 from 'lessons/Lesson19/Lesson19';

const App = () => {
  return (
    // <BrowserRouter>
    //   {/* Lesson18 - Layout и его вложенные рауты */}
    //   <Layout>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/users" element={<Users />} />
    //       <Route path="*" element="Page Not Found" />
    //     </Routes>
    //   </Layout>

    // </BrowserRouter>

    //  <Lesson16/>
    //  <Homework16/>
    // <Homework17 />
    //  <Lesson19/>
    // <Homework19 />
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="*" element="Page Not Found" />
        </Routes>
      </Layout>

    </BrowserRouter>
  )
}

export default App;
