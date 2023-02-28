import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ='/' element={<Home />} />
          <Route path= '/Detail/:id' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
