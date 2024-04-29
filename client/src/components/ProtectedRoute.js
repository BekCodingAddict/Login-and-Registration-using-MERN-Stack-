import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";
function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const validateToken = async () => {
    try {
      const response = await axios.post(
        "/api/users/get-user-by-id",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        setLoading(false);
      } else {
        localStorage.removeItem("token");
        navigate("/SignIn");
        message.error(response.data.message);
        setLoading(false);
      }
    } catch (error) {
      localStorage.removeItem("token");
      message.error(error.message);
      setLoading(false);
      navigate("/SignIn");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      validateToken();
    } else {
      navigate("/SignIn");
    }
  }, []);
  return <div>{loading ? <div>Loading</div> : <>{children}</>}</div>;
}

export default ProtectedRoute;
