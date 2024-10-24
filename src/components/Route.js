// import React from 'react';
// import '../styles/Route.css';

// function Route({ updatePositions }) {

//     const handleClick = () => {
//         // Пример новых значений для позиций кубов
//         const newPositions = {
//             cube2: { x: -0.55, y: -0.01, z: 0.28 },
//             cube3: { x: -0.985, y: -0.01, z: -0.04 },
//             cube4: { x: -1.12, y: -0.01, z: -0.41 },
//         };
//         // -0.01
//         updatePositions(newPositions);
//     };

//     return (
//         <>
//             <div className='separator'>

//             </div>
//             <input 
//                 id='first_corpus' 
//                 placeholder='Откуда'
//                 style={{
//                     padding: '8px',
//                     borderRadius: '8px',
//                     border: '0',
//                     // display: 'inline-block',
//                     // justifyContent: 'center',
//                     // alignItems: 'center'
//                     display: 'block',
//                     margin: '16px auto',
//                     width: '85%',
//                     backgroundColor: '#dcdcdc',
//                     // fontStyle: 'bold'
//                     fontWeight: 'bold'

//                 }}    
//             >
//             </input>
//             <input 
//                 id='second_corpus' 
//                 placeholder='Куда'
//                 style={{
//                     padding: '8px',
//                     borderRadius: '8px',
//                     border: '0',
//                     // display: 'inline-block',
//                     // justifyContent: 'center',
//                     // alignItems: 'center'
//                     display: 'block',
//                     margin: '24px auto',
//                     width: '85%',
//                     backgroundColor: '#dcdcdc',
//                     fontWeight: 'bold'
                    
//                 }}      
//                 >
//             </input>
//             <button onClick={handleClick}>
//                 Маршрут
//             </button>
//         </>
//     );
// }

// export default Route;

import React, { useState } from 'react';
import '../styles/Route.css';

function Route({ updatePositions }) {
  const [animateCubes, setAnimateCubes] = useState(false); // Для запуска анимации

  const handleClick = () => {
    // Пример новых значений для позиций кубов
    const newPositions = {
      cube2: { x: -0.55, y: -0.01, z: 0.28 },
      cube3: { x: -0.985, y: -0.01, z: -0.04 },
      cube4: { x: -1.12, y: -0.01, z: -0.41 },
    };

    // Обновляем позиции и запускаем анимацию
    updatePositions(newPositions);
    setAnimateCubes(true); // Запускаем анимацию после обновления позиций
  };

  return (
    <>
      <div className='separator'></div>
      <input
        id='first_corpus'
        placeholder='Откуда'
        style={{
          padding: '8px',
          borderRadius: '8px',
          border: '0',
          display: 'block',
          margin: '16px auto',
          width: '85%',
          backgroundColor: '#dcdcdc',
          fontWeight: 'bold',
        }}
      />
      <input
        id='second_corpus'
        placeholder='Куда'
        style={{
          padding: '8px',
          borderRadius: '8px',
          border: '0',
          display: 'block',
          margin: '24px auto',
          width: '85%',
          backgroundColor: '#dcdcdc',
          fontWeight: 'bold',
        }}
      />
      <button onClick={handleClick}>Маршрут</button>
    </>
  );
}

export default Route;