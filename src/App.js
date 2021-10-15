import Disappear from "./Pages/Disappear/Disappear"
import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route patch="/disappear" exact component={Disappear} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
