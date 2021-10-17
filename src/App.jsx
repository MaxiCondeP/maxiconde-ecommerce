import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {Navbar} from './components/Navbar/Navbar'




function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <ItemListContainer message="greeting" children= {<ItemCount stock="5"  initial="0"/>}/>
    </div>
  );
}

export default App;
