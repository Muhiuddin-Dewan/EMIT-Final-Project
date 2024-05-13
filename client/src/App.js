import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
      <Routes><Route path='/' element={<Home />} /></Routes>
      <Routes><Route path='/about' element={<AboutPage />} /></Routes>
      <Routes><Route path='/contact' element={<Contact />} /></Routes>
      <Routes><Route path='/policy' element={<Policy />} /></Routes>
      <Routes><Route path='*' element={<PageNotFound />} /></Routes>
    </>
  );
}

export default App;
