import NavCategory from './components/Homepage';
import Searchbar from './components/Searchfunction';
import Pages from './pages/Routes';
import './App.css'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
    <Searchbar />
    <NavCategory /> 
    <Pages />
   </BrowserRouter>
  )
}

export default App