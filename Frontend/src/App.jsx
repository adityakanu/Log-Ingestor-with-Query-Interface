import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import LogIngestForm from './components/LogIngestForm';
import LogList from './components/LogList';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/logs" component={LogList} />
          <Route path="/ingest" component={LogIngestForm} />
        </Switch>
    </Router>
  );
}

export default App;
