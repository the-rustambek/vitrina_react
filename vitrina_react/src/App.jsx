 
import { createContext, useState } from 'react';
import Alert from './Alert';
import './App.css';
import Main from './Main';

export const AlertContext =createContext();

function App() {
  const [alert,setAlert] = useState(false);
  const toggleAlert = () => setAlert((prev) => !prev);

  return (
    <AlertContext.Provider value={alert}>
          <div className="app">
               <Alert  />
               <Main toggle={toggleAlert}  />
          </div>
    </AlertContext.Provider>
  );
}

export default App;
