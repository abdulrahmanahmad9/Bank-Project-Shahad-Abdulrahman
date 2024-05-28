import { Route, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Users from "./pages/Users";
// import "./App.css";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import UserContext from "./context/UserContext";
import { getToken } from "./api/Storge.js";

// const queryClient = new QueryClient();

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (getToken()) {
      setUser(true);
    }
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {/* <QueryClientProvider client={queryClient}> */}
      <div className="App font-mono">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
      {/* </QueryClientProvider> */}
    </UserContext.Provider>
  );
}

export default App;
