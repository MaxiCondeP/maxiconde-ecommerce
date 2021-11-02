import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailCointainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Navbar } from './components/Navbar/Navbar'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { ItemDetail } from './components/ItemDetail/ItemDetail';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
    
        <header className="App-header">
          <Navbar />
        </header>

        <Switch>

          <Route exact path="/">

            {/* Le paso el param del id a mostrar de manera provisora */}
            <ItemDetailCointainer id="002"/>
            <ItemListContainer />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
