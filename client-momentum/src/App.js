import "./App.css";
import { useContext, useEffect } from "react";
import { Context } from "./index";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar.jsx";
import Footer from "./components/Layout/Footer.jsx";
import Login from "./components/Auth/Login.jsx";
import SignUp from "./components/Auth/Register.jsx";
import Jobs from "./components/Packages/Packages.jsx";
import JobDetails from "./components/Packages/BookPackages.jsx";
import Application from "./components/Application/Application.jsx";
import MyApplications from "./components/Application/MyApplications.jsx";
import PostJob from "./components/Packages/PostPackage.jsx";
import MyJobs from "./components/Packages/MyPackage.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import axios from "axios";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Package from "./pages/Package";

function App() {
  const { isAuthorized, setIsAuthorized, user, setUser } = useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/getuser",
          {
            withCredentials: true,
          }
        );
        setUser(response.data.user);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
      }
    };
    fetchUser();
  }, [isAuthorized, setIsAuthorized, setUser]);
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/Package" element={<Package />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />

          <Route path="/job/getall" element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/application/:id" element={<Application />} />
          <Route path="/applications/me" element={<MyApplications />} />
          <Route path="/job/post" element={<PostJob />} />
          <Route path="/job/me" element={<MyJobs />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
