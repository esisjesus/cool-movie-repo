import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Layout from './components/Layout'
import NotFound from './pages/NotFound/NotFound'
import Home from './pages/Home/Home'
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}
export default App;