import React, {useContext} from 'react';
import {languageContext} from '../context/LanguageContext';

const Navbar = () => {
  const  {language, setLanguage, t} = useContext(LanguageContext); //conexión con el contexto de lenguaje
  //handler del login SSO
  const handleSSOLogin = () => {
    console.log("Connecting to SSO Provider (e.g., Google, Auth0)...");
  };
    
