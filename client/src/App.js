
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          {/* <Route path='/auth' element={<Auth></Auth>}  ></Route> */}
          {/* <Route path='/create-recipe' element={<CreateRecipie></CreateRecipie>} ></Route>
          <Route path='/saved-recipes' element={<SavedRecipes></SavedRecipes>} ></Route> */}
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
