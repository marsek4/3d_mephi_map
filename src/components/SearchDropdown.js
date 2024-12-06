import React, { useState } from 'react';
import '../styles/Test.css';

// Пример данных для автозаполнения
const data = [
  "А-100",
  "Б-100",
  "Г-119",
  "Г-311",
  "В-116",
  "В-104",
  "НЛК-406",
  "Э-204",
  "И-103"
];

function SearchDropdown() {
  const [inputValue, setInputValue] = useState(''); // Строка поиска
  const [filteredData, setFilteredData] = useState([]); // Отфильтрованный список
  const [showDropdown, setShowDropdown] = useState(false); // Показывать ли выпадающий список

  // Функция для обновления строки поиска и фильтрации списка
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value) {
      const filtered = data.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  // Функция для выбора элемента из списка
  const handleSelectItem = (item) => {
    setInputValue(item);
    setShowDropdown(false);
  };

  return (
    <div>
      <div className='separator'>

      </div>
      <div style={{ width: '90%', maxWidth: '400px', position: 'relative', display: 'flex', borderRadius: '20px', paddingTop: '10px', paddingLeft: '10px'}}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Введите для поиска..."
          style={{
            padding: '8px',
            borderRadius: '8px 0 0 8px',
            border: '0',
            // display: 'inline-block',
            // justifyContent: 'center',
            // alignItems: 'center'
            display: 'block',
            margin: '16px auto',
            width: '80%',
            backgroundColor: '#dcdcdc',
            // fontStyle: 'bold'
            fontWeight: 'bold' // Закругляем только слева
          }}
        />
        <button 
          style={{
            margin: '16px auto',
            // backgroundColor: '#28828a',   // Цвет фона кнопки (зелёный)
            color: 'white',               // Цвет текста
            padding: '8px',         // Внутренние отступы (высота и ширина)
            fontSize: '16px',             // Размер шрифта
            border: 'none',               // Убираем рамку
            borderRadius: '0 8px 8px 0',  // Закругляем только справа
            cursor: 'pointer',            // Указатель при наведении
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Тень для кнопки
            
          }}
        >
          Найти
        </button>
      </div>
      {showDropdown && filteredData.length > 0 && (
        <ul
          style={{
            listStyleType: 'none',
            padding: 0,
            margin: '5px 0 0',           // Убираем лишние отступы, добавляем небольшой отступ сверху
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '20vw',               // Установили ширину на 20% экрана
            position: 'absolute',
            top: '25%',     // Сдвиг вниз относительно поля ввода
            zIndex: 1,
            backgroundColor: '#fff',
            maxHeight: '150px',
            overflowY: 'auto',
          }}
        >
          {filteredData.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelectItem(item)}
              style={{
                padding: '10px',
                cursor: 'pointer',
                borderBottom: '1px solid #eee'
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchDropdown;


// style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}