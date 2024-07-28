import "./signup.css";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div>
      {" "}
      <div className="signup-container">
        <div className="signup-header">
          <h2>Sign Up</h2>
        </div>
        <div className="signup-components">
          <form action="">
            <div className="form-control">
              <label htmlFor="">First Name</label>
              <input type="text" />
            </div>
            <div className="form-control">
              <label htmlFor="">Last Name</label>
              <input type="text" />
            </div>
            <div className="form-control">
              <label htmlFor="">Username</label>
              <input type="text" />
            </div>
            <div className="form-control">
              <label htmlFor="">Email</label>
              <input type="text" />
            </div>
            <div className="form-control">
              <label htmlFor="">Password</label>
              <input type="password" />
            </div>

            <button className="btn">
              <strong>SIGNUP</strong>
            </button>
            <p className="login">
              Already have an account? <Link to="../login"> Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
