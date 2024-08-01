import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Product from './Components/Product';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
function App() {
  return (
    <div className="App">
       <Navbar/>
       <Hero/>
       <Product/>
       <Section1/>
       <Section2/>
       <Footer/>
    </div>
  );
}

export default App;
