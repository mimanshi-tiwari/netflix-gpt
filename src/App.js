import Body from "./components/body";
import { Provider } from 'react-redux'
import appStore from "./store";

const App = () => {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
