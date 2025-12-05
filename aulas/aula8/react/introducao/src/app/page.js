'use client';
import Header from '@/components/header';
import Main from '@/components/main';
import React from 'react';

export default function Home() {
  const [showValue, setShowValue] = React.useState(true); // valor inicial

  function handleClick() {
    setShowValue(prev => !prev); // alterna entre true/false
  }

  return (
    <>
      <button 
        onClick={handleClick} 
        className="fixed top-20 right-2 z-50 py-1 px-3 rounded bg-gray-200 hover:bg-gray-300"
      >
        {showValue ? 'Ocultar' : 'Mostrar'}
      </button>

      <Header title="Investimentos" value="10" />
      <Main showValue={showValue} />      
    </>
  );
}