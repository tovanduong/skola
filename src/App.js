import './App.scss';
import { BrowserRouter } from "react-router-dom";
// import './swiper.css'
import SitePage from './site';
import { Provider } from 'react-redux'
import { ConfigureStore } from './redux/configureStore'
const store = ConfigureStore()
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <SitePage />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
