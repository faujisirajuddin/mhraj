import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Dashboard from "./admin/dashboard/Dashboard";
import Blog from "./pages/Blog";
import Login from "./admin/auth/login/login";
import { Toaster } from "./components/ui/toaster";
import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "./context/ThemeContext";
import EmailVerification from "./admin/auth/emailVerification";
import OtpVerification from "./admin/auth/otpVerification";
import ResetPassword from "./admin/auth/forgetPassword";
import RoleManagement from "./pages/RoleManagement";
import DashboardPage from "./admin/dashboard";

const muiTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <MUIThemeProvider theme={muiTheme}>
      <ThemeProvider>
        <CssBaseline />
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin/login" element={<Login />} />
              <Route path="/admin/emailVerification" element={<EmailVerification />} />
                            <Route path="/admin/otpVerification" element={<OtpVerification />} />
<Route path="/admin/forgetPassword" element={<ResetPassword />} />
<Route path="/admin/dashboard" element={<DashboardPage />} />
<Route path="/admin/role" element={<RoleManagement />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </BrowserRouter>
          <Toaster />
        </div>
      </ThemeProvider>
    </MUIThemeProvider>
  );
}

export default App;
