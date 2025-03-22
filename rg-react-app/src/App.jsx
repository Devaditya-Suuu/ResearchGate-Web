import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Front from "./components/Front";
import EventsPage from "./components/EventsPage";
import EventDetailsPage from "./components/Hack-cse-lerate";
import ContactPage from "./components/ContactPage";
import RecentPublications from "./components/RecentPublications";
import MembersPage from "./components/Members";
// import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Front />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/event-details" element={<EventDetailsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/members" element={<MembersPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;