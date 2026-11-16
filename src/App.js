import react from 'react'; //importo los lenguajes
import {LanguageProvider} from './context/LanguageContext'; //importo el provider del contexto de lenguaje
import Navbar from './components/Navbar';
import Scanner from './components/Scanner';
import {InventoryProvider} from './context/InventoryContext';
import Inventory from './components/Inventory';

function App() {
  return (
    <LanguageProvider>
      <InventoryProvider>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <main className="p-4">
            <Scanner />
            <hr className="my-10 border-gray-300" /> 
            <Inventory />
          </main>
        </div>
      </InventoryProvider>
    </LanguageProvider>
  );
}

export default App;
