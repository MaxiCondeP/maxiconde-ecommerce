import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailCointainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Navbar } from './components/Navbar/Navbar'
import { BrowserRouter, Switch, Route } from "react-router-dom"



function App() {


  return (
    <div className="App">
      <BrowserRouter>
    
        <header className="App-header">
          <Navbar />
        </header>

        <Switch>

          <Route exact path="/">

            <ItemListContainer />
          </Route>

          <Route exact path="/categoria/:categoria">
            <ItemListContainer />
          </Route>

          <Route exact path="/producto/:id">
            {/* Le paso el param del id a mostrar*/}
            <ItemDetailCointainer />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
