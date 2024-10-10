import React from 'react';
import './styles/Test.css';
import SearchDropdown from './components/menu';
import ThreeScene from './components/scene';
import Route from './components/Route';

function App() {
  return (
    <>
      <div className='first_div'>
        <h1>Навигация по 3D карте НИЯУ МИФИ</h1>
        <h2>Узнай, где находится самое важное</h2>
      </div>
      <div className='main_container'>
        <div className='side_menu'>
          <div className='a_to_b'>
            <Route />
          </div>
          <div className='second_div'>
            <SearchDropdown />
          </div>  
        </div>
        <div className='third_div'>
          <ThreeScene />
        </div>
      </div>
    </>
  );
}

export default App;
