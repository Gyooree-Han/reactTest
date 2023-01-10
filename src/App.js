import Detail from './routes/Detail';
import Home from './routes/Home';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App(){
  return (
    <Router>
        <Switch>
          <Route path="/movie/:id">
            <Detail/>
          </Route>
          {/* 새 페이지는 위쪽으로 쌓아주기 */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  )
}

export default App;