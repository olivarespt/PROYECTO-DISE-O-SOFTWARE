import react from 'react'; //importo los lenguajes
import {LanguageProvider} from './context/LanguageContext'; //importo el provider del contexto de lenguaje
import navbar from './components/navbar';

function App() {
    return (
        <LanguageProvider>  
            {/*Container principal de la app*/}
            <div className="min-h-screen bg-gray-100">
                {/*navbar fija arriba*/}
                <navbar />

                {/*contenedor del contenido (valga la redundancia) de páginas*/}
                <main className="p-4 flex flex-col items-center justify-center h-[calc(100vh-80px)]">
                    {/*cambiar después*/}
                    <h1 className="text-4xl font-bold text-gray-400 text-center mb-4">
                        Bienvenido a tu Pokédex de Pokémon TCG</h1>
                    <p className="text-gray-500">
                        Escanea tu carta
                        </p>
                    </main>
                </div>
        </LanguageProvider>
    );
}

export default App;
