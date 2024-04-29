import { Link } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

function SignUp() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const newData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(newData);
    try {
      const response = await axios.post("/api/users/register", newData);
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <div className="body">
      <div className="main">
        <div className="wrapper">
          <div className="form-wrapper sing-up">
            <form action="" onSubmit={onSubmit}>
              <h2>Sign Up</h2>
              <div className="input-group">
                <input type="text" name="name" required></input>
                <label>Username</label>
              </div>
              <div className="input-group">
                <input type="email" name="email" required></input>
                <label>Email</label>
              </div>
              <div className="input-group">
                <input type="password" name="password" required></input>
                <label>Password</label>
              </div>
              <div className="remember">
                <input type="checkbox"></input>
                <label>I agree to the terms & conditions</label>
              </div>
              <button type="submit">Sign Up</button>
              <div className="singUp-link">
                <p>
                  Already have an account?
                  <Link to="/SignIn" className="singIpBtn-link">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
