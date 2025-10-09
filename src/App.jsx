import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import NavBar from "./components/NavBar.jsx";
import News from "./components/News.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";  
import "./index.css";
import Dashboard from "./pages/Dashboard.jsx";

const App = () => {
  const pageSize = 8;
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <LoadingBar
          color="#f59e0b"
          height={3}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />

        <NavBar />

        <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-10 flex-1">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />

            <Route  path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general"  /> } />
             
            <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize}  country="us" category="business" /> }  />

            <Route path="/entertainment" element={<News setProgress={setProgress}  apiKey={apiKey} key="entertainment"  pageSize={pageSize} country="us"  category="entertainment"/> } />
              
            <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health"  /> } />
             
            <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science"  /> } />  
              
            <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports"  /> } />

            <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology"  /> } />
            
            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/signin" element={<SignIn />} />

            <Route path="/signup" element={<SignUp />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
