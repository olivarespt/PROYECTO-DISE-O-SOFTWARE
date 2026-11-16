import React, { createContext, useState } from 'react';

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  // 1. Memoria del inventario
  const [inventory, setInventory] = useState([]);

  // 2. Función para registrar una nueva carta
  const addCard = (cardData) => {
    const newCard = {
      id: new Date().getTime(), // ID temporal unico
      name: cardData.name,
      rarity: cardData.rarity || 'Desconocida',
      type: cardData.types ? cardData.types.join(', ') : 'Desconocido',
      expansion: cardData.set.name,
      deck: 'Sin asignar' 
    };
    
    // Se agrega la carta conservando las que ya tiene
    setInventory((prevInventory) => [...prevInventory, newCard]);
  };

  // 3. Función para organizar en colecciones o mazos
  const assignToDeck = (cardId, deckName) => {
    setInventory((prevInventory) => 
      prevInventory.map((card) => 
        card.id === cardId ? { ...card, deck: deckName } : card
      )
    );
  };

  return (
    <InventoryContext.Provider value={{ inventory, addCard, assignToDeck }}>
      {children}
    </InventoryContext.Provider>
  );
};
