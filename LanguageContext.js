import React, {createContext, useState} from 'react';
//diccionario para la traducción inglés y español
const translations = {
    eng: {
        appName: "Pokemon TCG Pokedex",
        loginSSO: "Login with SSO",
        scanCard: "Scan Card",
        myInventory: "My Inventory",
    },

    esp: {
        appName: 'Pokedex de TCG Pokemon',
        loginSSO: "Iniciar sesión con SSO",
        scanCard: "Escanea tu carta",
        myInventory: "Inventario",
    }
};

export const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState('eng'); //lenguaje default inglés

    const t = (key) => {
        return translations[language][key] || key;
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
