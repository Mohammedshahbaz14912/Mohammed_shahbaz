
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Loginform from "./Components/LoginForm";
import Home from "./Components/Home";
import NotFound from "./Components/Notfound";
import Cart from "./Components/Cart";
import Products from "./Components/Product"
const App =()=>(
    <BrowserRouter>
     <Switch>
        <Route exact path="/login" component={Loginform}/>
        <Route exact path= "/" component={Home}/>
        <Route exact path= "/cart" component={Cart}/>
        <Route exact path= "/products" component={Products}/>
        <NotFound/>
     </Switch>
    </BrowserRouter>
)
export default App
