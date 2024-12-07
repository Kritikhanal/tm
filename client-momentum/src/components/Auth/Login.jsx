import { useState, useContext } from "react";

import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./Auth.css";

import { Context } from "../../index";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const { isAuthorized, setIsAuthorized } = useContext(Context);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password, role },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setEmail("");
      setPassword("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthorized) {
    return <Navigate to={"/user-dashboard"} />;
  }
  return (
    <>
      <section className="authPage">
        <div className="container">
          <div className="login-card">
            <div className="header">
              <h2>Log in to your account</h2>
            </div>
            <form>
              <div className="inputTag">
                <label>Login As</label>
                <div>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="">Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="visitor">Visitor</option>
                  </select>
                </div>
              </div>
              <div className="inputTag">
                <label>Email Address</label>
                <div>
                  <input
                    type="email"
                    placeholder="abc@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="inputTag">
                <label>Password</label>
                <div>
                  <input
                    type="password"
                    placeholder="Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <button type="submit" onClick={handleLogin}>
                Login
              </button>
              <Link to={"/signup"}>Register Now</Link>
            </form>
          </div>
        </div>
        <div className="banner">
          <img src="/Images/2.jpeg" alt="login" />
        </div>
      </section>
    </>
  );
};

export default Login;