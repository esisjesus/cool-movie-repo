import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import NotFound from './pages/NotFound/NotFound'
import Home from './pages/Home/Home'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import './App.css';

library.add(fab, fas);


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