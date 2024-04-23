import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import HomeCarousel from './HomeCarousel';
import AboutSection from './AboutSection';
import ServiceSection from './ServiceSection';
import MenuSection from './MenuSection';
import ReviewsSection from './ReviewsSection';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeCarousel />
      <AboutSection />
      <ServiceSection />
      <MenuSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
}

export default App;
