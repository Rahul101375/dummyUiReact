import { createContext } from 'react';
import './App.css';
import RouterComponent from './router';
const globalStore = createContext(null)
function App() {
  return (
    <div className="App">
       <globalStore.Provider value="test">
         <RouterComponent/>
       </globalStore.Provider>
    </div>
  );
}

export default App;
export {globalStore}
