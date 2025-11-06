import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Feature from './sections/features/Features'
import Inspiration from './sections/outfits/Inspiration'
import Reviews from './sections/reviews/Reviews';
import FAQs from './sections/faqs/FAQs';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import Theme from './theme/Theme'
import { useThemeContext } from './context/theme-context';

const App = () => {

  const {themeState} = useThemeContext();

  return (
    <main className={`${themeState.primary} ${themeState.background}`}>
      <Navbar/>
      <Header/>
      <About/>
      <Feature/>
      <Inspiration/>
      <Reviews/>
      <FAQs/>
      <Contact/>
      <Footer/>
      <Theme/>

    </main>
  )
}

export default App