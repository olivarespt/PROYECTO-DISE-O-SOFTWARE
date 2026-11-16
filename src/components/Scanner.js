import React, { useState, useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { InventoryContext } from '../context/InventoryContext'; //  Importamos la memoria del inventario
import { searchCardByName } from '../api'; 

const Scanner = () => {
  const { t } = useContext(LanguageContext);
  // añadir cartas al inventario
  const { addCard } = useContext(InventoryContext); 
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scannedCardData, setScannedCardData] = useState(null); 

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setScannedCardData(null); 
    }
  };

  const handleScan = async () => {
    setIsScanning(true);
    const simulatedRecognizedName = "Charizard"; 
    try {
        const results = await searchCardByName(simulatedRecognizedName);
        if (results && results.length > 0) {
            setScannedCardData(results[0]); 
        } else {
            alert("No se encontró la carta en la base de datos.");
        }
    } catch (error) {
        console.error("Error escaneando", error);
    } finally {
        setIsScanning(false);
    }
  };

  // Guardar la carta y limpiar el escáner
  const handleSaveCard = () => {
    if (scannedCardData) {
      addCard(scannedCardData); 
      alert("¡Carta añadida a tu inventario!");
      setScannedCardData(null); 
      setSelectedImage(null);   
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-6 mt-8 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('scanCard')}</h2>

      <div className="w-full h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mb-4 bg-gray-50 overflow-hidden">
        {selectedImage ? (
          <img src={selectedImage} alt="Vista previa" className="h-full object-contain" />
        ) : (
          <span className="text-gray-400">{t('noImageSelected')}</span>
        )}
      </div>

      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageUpload}
        className="mb-4 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100 cursor-pointer"
      />

      <button 
        onClick={handleScan}
        disabled={!selectedImage || isScanning}
        className={`w-full py-2 px-4 rounded font-bold text-white transition-colors ${
          !selectedImage || isScanning ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
        }`}
      >
        {isScanning ? t('scanning') : t('startScan')}
      </button>

      {/* Resultados de la base de datos con el botón */}
      {scannedCardData && (
          <div className="mt-6 p-4 border border-green-200 bg-green-50 rounded w-full">
              <h3 className="font-bold text-lg mb-2 text-green-800">¡Asociación Exitosa!</h3>
              <p className="text-sm text-gray-800"><strong>Nombre:</strong> {scannedCardData.name}</p>
              <p className="text-sm text-gray-800"><strong>Rareza:</strong> {scannedCardData.rarity || 'Desconocida'}</p>
              <p className="text-sm text-gray-800"><strong>Set:</strong> {scannedCardData.set.name}</p>
              
              {/* Botón para guardar en inventario */}
              <button
                onClick={handleSaveCard}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                {t('saveCard')}
              </button>
          </div>
      )}
    </div>
  );
};

export default Scanner;
