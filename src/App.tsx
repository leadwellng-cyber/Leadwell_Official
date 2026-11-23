import { useEffect } from "react";
import type { ReactNode } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Ministries from "./pages/Ministries";
import MinistryDetail from "./pages/MinistryDetail";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Calendar from "./pages/Calendar";
import GetInvolved from "./pages/GetInvolved";
import EmptyState from "./components/EmptyState";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

function SiteLayout({ children }: { children: ReactNode }) {
  return <><Header /><main id="main">{children}</main><Footer /></>;
}

export default function App() {
  return <><ScrollToTop /><Routes>
    <Route path="/" element={<SiteLayout><Home /></SiteLayout>} />
    <Route path="/about" element={<SiteLayout><About /></SiteLayout>} />
    <Route path="/ministries" element={<SiteLayout><Ministries /></SiteLayout>} />
    <Route path="/ministries/:slug" element={<SiteLayout><MinistryDetail /></SiteLayout>} />
    <Route path="/news" element={<SiteLayout><News /></SiteLayout>} />
    <Route path="/news/:slug" element={<SiteLayout><NewsDetail /></SiteLayout>} />
    <Route path="/events" element={<SiteLayout><Events /></SiteLayout>} />
    <Route path="/events/:slug" element={<SiteLayout><EventDetail /></SiteLayout>} />
    <Route path="/calendar" element={<SiteLayout><Calendar /></SiteLayout>} />
    <Route path="/get-involved" element={<SiteLayout><GetInvolved /></SiteLayout>} />
    <Route path="*" element={<SiteLayout><EmptyState title="Page not found" description="The page you're looking for does not exist." /></SiteLayout>} />
  </Routes></>;
}
