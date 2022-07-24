import './App.css';
import Learning from './learingcomponents/Learning'
import Header from './components/Header'
import Footer from './components/Footer';
import AddProduct from './components/product/AddProduct'

function App() {
  return (
    <div className="">
    <Header />
     {/* <Learning /> */}

     <AddProduct />
     <Footer />
    </div>
  );
}

export default App;
