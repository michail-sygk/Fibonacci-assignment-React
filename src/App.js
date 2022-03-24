import logo from './logo.svg';
import './App.css';
import Grid from './components/Grid';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';

const store = ConfigureStore();


function App() {
  return (
    <Provider store={store}>
          <div className="App">
            <Grid />
          </div>
      </Provider>
  );
}

export default App;
