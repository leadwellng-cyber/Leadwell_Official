import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Placeholder from "./components/Placeholder";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <main id="main">
                <Home />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <main id="main">
                <Placeholder
                  eyebrow="About Leadwell"
                  title="About Leadwell"
                  description="Learn about our founding, vision, values and the people behind Leadwell International."
                />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Header />
              <main id="main">
                <Placeholder
                  eyebrow="Our Projects"
                  title="Our Projects"
                  description="Explore all six Leadwell initiatives and their sub-projects in one place."
                />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <>
              <Header />
              <main id="main">
                <Placeholder />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/news"
          element={
            <>
              <Header />
              <main id="main">
                <Placeholder
                  eyebrow="News & Updates"
                  title="News & Updates"
                  description="Organizational announcements, stories and project updates from across Leadwell."
                />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              <Header />
              <main id="main">
                <Placeholder
                  eyebrow="Calendar"
                  title="Leadwell Calendar"
                  description="The unified calendar aggregating activities from all six projects and their sub-projects."
                />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/events"
          element={
            <>
              <Header />
              <main id="main">
                <Placeholder
                  eyebrow="Events"
                  title="Events"
                  description="Browse upcoming and past Leadwell events with full details."
                />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/get-involved"
          element={
            <>
              <Header />
              <main id="main">
                <Placeholder
                  eyebrow="Get Involved & Contact"
                  title="Get Involved & Contact"
                  description="Discover how to participate, volunteer, partner or make an enquiry with Leadwell International."
                />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Header />
              <main id="main">
                <Placeholder title="Page not found" description="The page you're looking for doesn't exist yet." />
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}
