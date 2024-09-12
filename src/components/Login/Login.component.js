import React, { useCallback, useState } from "react";
import wissenLogo from "../../assests/download.png";
import {
  loginInitAction,
} from "../../redux/action/login.action";
import { useDispatch } from "react-redux";

import "./login.style.scss";

function Login() {
  const [formData, setFormData] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    },
    [formData]
  );

  const handlePrivacy = useCallback(() => {
    setPrivacy(!privacy);
  }, [privacy]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginInitAction(formData));
  };

  return (
    <div className="login-container-outer">
      <div className="login-container-inner">
        <img src={wissenLogo} alt="wissen logo" />
        <form
          action="/submit"
          onSubmit={handleSubmit}
          className="form-elements"
        >
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="password-container">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <span
              className={`password-toggle ${showPassword ? "show" : "hide"}`}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "👁️" : "🙈"}
            </span>
          </div>
          <label htmlFor="privacy">
            <input
              id="privacy"
              type="checkbox"
              name="privacy"
              checked={privacy}
              onChange={handlePrivacy}
            />
            By creating or logging into an account, you are agreeing with our{" "}
            <b>Terms & Condition</b> and <b>Privacy Policys.</b>
          </label>
          <div className="submit-btn">
            <button
              type="submit"
              disabled={!privacy}
              className={privacy ? "" : "disable"}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
