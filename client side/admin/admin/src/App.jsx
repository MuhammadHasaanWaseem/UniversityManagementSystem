import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
 import Registration from "./pages/Registration";
 import Add_event from "./pages/Add_event";

import { Route, Routes, BrowserRouter } from "react-router-dom";

const SIDEBAR_WIDTH = 250; // approximate width of sidebar in px
const NAVBAR_HEIGHT = 70; // approximate height of navbar in px

function App() {
  return (
    <BrowserRouter>
      <div className="dashboard-main-wrapper">
        <Navbar />
        <Sidebar />
        <div
          style={{
            marginLeft: SIDEBAR_WIDTH,
            paddingTop: NAVBAR_HEIGHT,
            minHeight: '100vh',
            boxSizing: 'border-box',
          }}
        >
           <Routes>
              <Route path="/" element={<Registration />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/Add_event" element={<Add_event />} />
           
          </Routes> 
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;