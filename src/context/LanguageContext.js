import React, {createContext, useState} from 'react';
//diccionario para la traducción inglés y español
const translations = {
    eng: {
        appName: "Pokemon TCG Pokedex",
        loginSSO: "Login with SSO",
        scanCard: "Scan Card",
        myInventory: "My Inventory",
        noImageSelected: "No image selected, upload a card please",
        startScan: "Identify Card",
        scanning: "Scanning, please wait ;)",
        emptyInventory: "Your inventory is empty :(",
        saveCard: "Save to inventory"
    },

    esp: {
        appName: 'Pokedex de TCG Pokemon',
        loginSSO: "Iniciar sesión con SSO",
        scanCard: "Escanea tu carta",
        myInventory: "Inventario",
        noImageSelected: "No seleccionaste ninguna imagen, sube tu carta.",
        startScan: "Identificar carta",
        scanning: "Escaneando tu carta, por favor espera ;)",
        emptyInventory: "Tu inventario está vacío :(",
        saveCard: "Guardar en el inventario"
    }
};

export const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState('esp'); //lenguaje default español

    const t = (key) => {
        return translations[language][key] || key;
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
