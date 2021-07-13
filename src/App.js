
import { Switch, Route, useLocation } from 'react-router-dom';

// styled components
import GlobalStyles from './GlobalStyles.js';

// components
import Nav from './components/Nav';
import Footer from './components/Footer';

// pages
import ContactPage from './pages/ContactPage';
import LandingPage from './pages/LandingPage';
import NewsPage from './pages/NewsPage';

// animations
import { AnimatePresence } from 'framer-motion';

function App() {

  const location = useLocation();

  return (
    <>
      <GlobalStyles />

      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/ContactPage" exact>
            <ContactPage />
          </Route>
          <Route path="/NewsPage" exact>
            <NewsPage />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
