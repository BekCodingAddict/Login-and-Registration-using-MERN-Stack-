import { Link } from "react-router-dom";

function SignIn() {
  const onSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const newData = {
      userName: data.get("userName"),
      password: data.get("password"),
    };
    console.log(newData);
  };
  return (
    <div className="body">
      <div className="main">
        <div className="wrapper">
          <div className="form-wrapper sing-in">
            <form onSubmit={onSubmit}>
              <h2>Login</h2>
              <div className="input-group">
                <input type="text" name="userName" required></input>
                <label>Username</label>
              </div>
              <div className="input-group">
                <input type="password" name="password" required></input>
                <label>Password</label>
              </div>
              <div className="remember">
                <input type="checkbox"></input>
                <label>Remember me</label>
              </div>
              <button type="submit">Login</button>
              <div className="singUp-link">
                <p>
                  Don't have an account?
                  <Link to="/SignUp">Sign Up</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
