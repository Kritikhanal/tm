import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../index";

import { BiUser } from "react-icons/bi";
import img from "../../image/logo TM1.png";
import "../../pages/home.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user, setUser } = useContext(Context);
  const navigate = useNavigate();

  // On component mount, check if user data is stored in localStorage
  useEffect(() => {
    console.log("useEffect triggered");

    const savedUser = localStorage.getItem("user");
    const savedIsAuthorized = localStorage.getItem("isAuthorized");
    const token = localStorage.getItem("token");

    console.log("Saved User:", savedUser);
    console.log("Saved IsAuthorized:", savedIsAuthorized);
    console.log("Saved Token:", token);
    if (savedUser && savedIsAuthorized && token) {
      setUser(JSON.parse(savedUser));
      setIsAuthorized(JSON.parse(savedIsAuthorized));
      console.log("User is authenticated, restoring session...");
    } else {
      console.log("No valid session, logging out...");
      handleLogout(); // If no valid session, force logout
    }
  }, []);

  const handleLogout = async () => {
    console.log("Logging out..."); // Debug log

    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/user/logout",
        {
          withCredentials: true,
        }
      );

      console.log("Logout Response:", response); // Debug log
      toast.success(response.data.message);
      setIsAuthorized(false);
      setUser(null);

      // Clear the localStorage
      localStorage.removeItem("user");
      localStorage.removeItem("isAuthorized");
      localStorage.removeItem("token"); // Remove token if stored

      // Verify that localStorage was cleared
      console.log("LocalStorage after logout:", localStorage); // Debug log

      // Redirect to login page after logout
      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error); // Debug log
      toast.error(error.response?.data?.message || "Logout failed");
      setIsAuthorized(true);
    }
  };

  return (
    <section className=" nav-bar container id='header">
      <div className="logo">
        <img
          className=""
          src={img}
          style={{
            height: "100px",
            width: "250px",
            position: "relative",
            bottom: "12px",
          }}
          alt="about"
        />
      </div>

      <ul className={`${!show ? "menu" : "show-menu menu"} menu1`}>
        <li>
          <Link
            className="underline active"
            to={"/"}
            onClick={() => setShow(false)}
          >
            Home
          </Link>
        </li>
        {!isAuthorized && (
          <li>
            <Link
              className="underline"
              to={"/about-us"}
              onClick={() => setShow(false)}
            >
              About Us
            </Link>
            <Link
              className="underline"
              to={"/Package"}
              onClick={() => setShow(false)}
            >
              Package
            </Link>
            <Link
              className="underline "
              to={"/Gallery"}
              onClick={() => setShow(false)}
            >
              Gallery
            </Link>
            <li>
              <Link className="underline" to="/Contact">
                Contact us
              </Link>
            </li>
          </li>
        )}
        {user && user.role === "visitor" && (
          <li>
            <Link
              to={"/job/getall"}
              className="underline"
              onClick={() => setShow(false)}
            >
              Book Package
            </Link>
          </li>
        )}

        {/* Conditionally render 'Post a Job' and 'View My Jobs' only if the user is an admin */}
        {user && user.role === "admin" && (
          <>
            <li>
              <Link
                to={"/job/post"}
                className="underline"
                onClick={() => setShow(true)}
              >
                Post a Package
              </Link>
            </li>
            <li>
              <Link
                to={"/job/me"}
                className="underline"
                onClick={() => setShow(true)}
              >
                My Packages
              </Link>
            </li>
          </>
        )}

        {/* Conditionally render logout or login button */}
        {isAuthorized ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <li>
            <Link to="/Login" className="btn underline">
              Login
            </Link>
          </li>
        )}

        {/* Conditionally render user profile icon */}
        {isAuthorized && (
          <li>
            <Link to="/user-dashboard" className="btn">
              <BiUser />
            </Link>
          </li>
        )}
      </ul>
    </section>
  );
};

export default Navbar;
