import React, { useState } from 'react';
import './styles/Test.css';
import SearchDropdown from './components/menu';
import ThreeScene from './components/ThreeScene';
import Route from './components/Route';

function App() {
  // Состояние для хранения позиций кубов
  const [positions, setPositions] = useState({
    cube2: { x: -0.55, y: -0.01, z: 0.28 },
    cube3: { x: -0.985, y: -0.01, z: -0.04 },
    cube4: { x: -1.12, y: -0.01, z: -0.41 },
  });

  // Состояние для запуска анимации
  const [animateCubes, setAnimateCubes] = useState(false);

  // Функция для обновления позиций кубов
  const updatePositions = (newPositions) => {
    setPositions(newPositions);
    setAnimateCubes(true); // Запускаем анимацию при обновлении позиций
  };

  return (
    <>
      <div className='first_div'>
        <h1>Навигация по 3D карте НИЯУ МИФИ</h1>
        <h2>Узнай, где находится самое важное</h2>
      </div>
      <div className='main_container'>
        <div className='side_menu'>
          <div className='a_to_b'>
            <Route updatePositions={updatePositions} />
          </div>
          <div className='second_div'>
            <SearchDropdown />
          </div>  
        </div>
        <div className='third_div'>
          {/* Передаем состояние анимации и позиции в ThreeScene */}
          <ThreeScene positions={positions} animateCubes={animateCubes} />
        </div>
      </div>
    </>
  );
}

export default App;
