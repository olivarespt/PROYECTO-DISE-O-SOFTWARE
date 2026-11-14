import React, {useContext} from 'react';
import {languageContext} from '../context/LanguageContext';

const Navbar = () => {
  const  {language, setLanguage, t} = useContext(LanguageContext); //conexión con el contexto de lenguaje
  //handler del login SSO
  const handleSSOLogin = () => {
    console.log("Connecting to SSO Provider (e.g., Google, Auth0)...");
  };

  return(
    <nav className="w-full bg-red-600 text-white p-4 shadow-md flex justify-between items-center flex-wrap">
      
      {/* titulo de la app */}
      <div className="text-2xl font-bold tracking-wider">
        {t('appName')}
      </div>

      {/* Controles: Lenguaje y SSO */}
      <div className="flex items-center gap-4 mt-2 sm:mt-0">
        
        {/* Cambio de lenguaje */}
        <select 
          value={language} 
          onChange={(e) => setLanguage(e.target.value)}
          className="text-black px-2 py-1 rounded cursor-pointer outline-none"
        >
          <option value="esp">Español</option>
          <option value="eng">English</option>
        </select>

        {/* botón login SSO */}
        <button 
          onClick={handleSSOLogin}
          className="bg-white text-red-600 font-semibold px-4 py-2 rounded hover:bg-gray-100 transition-colors"
        >
          {t('loginSSO')}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
