import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
=======
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
>>>>>>> 7b8f495 (rebase 5)
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import SurveyPage from "./pages/SurveyPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
<<<<<<< HEAD
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/survey" element={<SurveyPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="*"
              element={<h1 className="display-2">Wrong page!</h1>}
            />
          </Routes>
        </>
      </Router>
=======
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<AdminPage />} />

          <Route path="/survey" element={<SurveyPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/users" element={<UserPage />} />

          <Route
            path="*"
            element={<h1 className="display-2">Wrong page!</h1>}
          />
        </Routes>
      </>
    </Router>
>>>>>>> 7b8f495 (rebase 5)
    </ApolloProvider>
  );
}

export default App;
