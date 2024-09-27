import React from 'react';
import SearchDropdown from './components/menu';
import ThreeScene from './components/scene';

function App() {
  return (
    <>
      <div style={{backgroundColor: ''}}>
        <h1 className="header" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
          Навигация по 3D карте НИЯУ МИФИ
        </h1>
        <h2 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
          Узнай, где находится самое важное
        </h2>
      </div>

      {/* Flexbox контейнер для SearchDropdown и ThreeScene */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', height: '80vh', backgroundColor: '#DCDCDC', borderRadius: '10px' }}>
        {/* Левая часть с поисковым меню */}
        <div style={{width: '20%'}}>
          <div style={{ padding: '15px'}}>
            <SearchDropdown />
          </div>
        </div>
        {/* Правая часть с Three.js сценой */}
        <div style={{ width: '75%', padding: '0px', borderRadius: '100px' }}>
          <ThreeScene />
        </div>
      </div>
    </>
  );
}

export default App;
