import jwt_decode from "jwt-decode";
import { setAuthHeaders } from "../API";

export const loginAutomatically = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  const decoded = jwt_decode(token);
  const now = Date.now() / 1000;
  if (decoded.exp > now) {
    setAuthHeaders(token);
    return true;
  }
  logout();
  return false;
};

export const login = (token) => {
  localStorage.setItem("token", token);
  setAuthHeaders(token);
};

export const logout = () => {
  localStorage.removeItem("token");
  setAuthHeaders(null);
};
