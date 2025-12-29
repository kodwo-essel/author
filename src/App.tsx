import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import FeaturedBooks from './components/FeaturedBooks';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import BooksPage from './components/BooksPage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import ResourcesPage from './components/ResourcesPage';

function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedBooks />
      <Testimonials />
      <Newsletter />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/books"
          element={
            <Layout>
              <BooksPage />
            </Layout>
          }
        />
        <Route
          path="/resources"
          element={
            <Layout>
              <ResourcesPage />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />
        <Route
          path="/contacts"
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
