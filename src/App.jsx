import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {Navbar} from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <ItemListContainer message="greeting"/>
    </div>
  );
}

export default App;
