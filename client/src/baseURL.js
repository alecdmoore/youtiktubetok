const baseURL =
  process.env.NODE_ENV === "production" ? "/api" : "http://localhost:5001/api";

export default baseURL;
