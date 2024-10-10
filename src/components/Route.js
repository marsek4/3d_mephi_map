import React from 'react';
import '../styles/Route.css';

function Route() {
    return (
        <>
            {/* <p style={{fontSize: '18px'}}>
                Постройте маршрут между корпусами
            </p> */}
            {/* <select style={{margin: '12px'}}>
                <option></option>
                <option>А корпус</option>
                <option>Б корпус</option>
                <option>В корпус</option>
                <option>Г корпус</option>
            </select>
            <select>
                <option></option>
                <option>А корпус</option>
                <option>Б корпус</option>
                <option>В корпус</option>
                <option>Г корпус</option>
            </select>
            <button style={{margin: '12px'}}>
                Построить
            </button> */}
            <div className='separator'>

            </div>
            <input 
                id='first_corpus' 
                placeholder='Откуда'
                style={{
                    padding: '8px',
                    borderRadius: '8px',
                    border: '0',
                    // display: 'inline-block',
                    // justifyContent: 'center',
                    // alignItems: 'center'
                    display: 'block',
                    margin: '16px auto',
                    width: '85%',
                    backgroundColor: '#dcdcdc',
                    // fontStyle: 'bold'
                    fontWeight: 'bold'

                }}    
            >
            </input>
            <input 
                id='second_corpus' 
                placeholder='Куда'
                style={{
                    padding: '8px',
                    borderRadius: '8px',
                    border: '0',
                    // display: 'inline-block',
                    // justifyContent: 'center',
                    // alignItems: 'center'
                    display: 'block',
                    margin: '30px auto',
                    width: '85%',
                    backgroundColor: '#dcdcdc',
                    fontWeight: 'bold'

                }}      
                >
            </input>
        </>
    );
}

export default Route;