import React, { useState, useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Scanner = () => {
  const { t } = useContext(LanguageContext);
  
  // States para guardar la foto y el estado de la carga
  const [selectedImage, setSelectedImage] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  // cuando el usuario sube un archivo
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // vista previa en pantalla
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  // Función placeholder para enviar la imagen a la API (Backend) en el futuro
  const handleScan = () => {
    setIsScanning(true);
    console.log("Enviando imagen a la API para identificación automática...");
    
    // Simulamos que la API tarda 2 segundos en responder
    setTimeout(() => {
      setIsScanning(false);
      alert("Simulación: ¡Carta identificada!");
    }, 2000);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-6 mt-8 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('scanCard')}</h2>

      {/* Área de vista previa de la imagen */}
      <div className="w-full h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mb-4 bg-gray-50 overflow-hidden">
        {selectedImage ? (
          <img src={selectedImage} alt="Vista previa de la carta" className="h-full object-contain" />
        ) : (
          <span className="text-gray-400">{t('noImageSelected')}</span>
        )}
      </div>

      {/* Botón para subir archivos */}
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageUpload}
        className="mb-4 block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-red-50 file:text-red-700
          hover:file:bg-red-100 cursor-pointer"
      />

      {/* Botón para escanear */}
      <button 
        onClick={handleScan}
        disabled={!selectedImage || isScanning}
        className={`w-full py-2 px-4 rounded font-bold text-white transition-colors ${
          !selectedImage || isScanning ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
        }`}
      >
        {isScanning ? t('scanning') : t('startScan')}
      </button>
    </div>
  );
};

export default Scanner;
