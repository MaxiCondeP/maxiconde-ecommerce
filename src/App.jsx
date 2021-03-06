import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailCointainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Navbar } from './components/Navbar/Navbar'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { CartProvider } from "../src/contexts/cartContext"
import { Cart } from './components/Cart/Cart';
import { CartFormContainer } from './components/CartFormContainer/CartFormContainer';






function App() {


  return (
    <CartProvider>
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

            <Route exact path="/cart">
              <Cart/>
            </Route>

            <Route exact path="/checkout">
              <CartFormContainer/>
            </Route>

          </Switch>
        </BrowserRouter>
      </div>
    </CartProvider>

  );
}

export default App;
