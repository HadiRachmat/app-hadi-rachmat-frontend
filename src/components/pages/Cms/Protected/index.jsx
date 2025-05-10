// ProtectedRoute.jsx
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import API from "../../../../services/_app"; // pastikan path sesuai

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = sessionStorage.getItem("accessToken");
      if (!token) {
        return redirectToLogin();
      }

      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
          // token expired, coba refresh
          const res = await API.post("/api/public/refresh-token", null, {
            withCredentials: true,
          });
          const newAccessToken = res.data.data.accessToken;
          sessionStorage.setItem("accessToken", newAccessToken);
          setIsAuth(true);
        } else {
          setIsAuth(true);
        }
      } catch (err) {
        console.error("Auth error:", err);
        sessionStorage.removeItem("accessToken");
        redirectToLogin();
      } finally {
        setLoading(false);
      }
    };

    const redirectToLogin = () => {
      setIsAuth(false);
      setLoading(false);
    };

    checkAuth();
  }, [location.pathname]);

  if (loading) return null; // atau spinner

  if (!isAuth) return <Navigate to="/auth/login" state={{ from: location }} replace />;

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
