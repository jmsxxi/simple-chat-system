import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login-container">
      <div className="login-header">
        <h2>Login</h2>
      </div>
      <div className="login-components">
        <form action="">
          <div className="form-control">
            <label htmlFor="">Email</label>
            <input type="email" />
          </div>
          <div className="form-control">
            <label htmlFor="">Password</label>
            <input type="password" />
          </div>
          <button className="btn">
            <strong>LOGIN</strong>
          </button>
          <p className="register">
            Don't have an account? <Link to="../signup">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
