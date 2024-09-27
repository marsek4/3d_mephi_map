import React, { useState } from 'react';

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
    <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: '400px', position: 'relative', display: 'flex', borderRadius: '20px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Введите для поиска..."
          style={{
            width: '100%',                // Уменьшили ширину, чтобы было место для кнопки
            padding: '10px',
            fontSize: '16px',
            boxSizing: 'border-box',
            borderRadius: '5px 0 0 5px', // Закругляем только слева
          }}
        />
        <button 
          style={{
            backgroundColor: '#20B2AA',   // Цвет фона кнопки (зелёный)
            color: 'white',               // Цвет текста
            padding: '10px 20px',         // Внутренние отступы (высота и ширина)
            fontSize: '16px',             // Размер шрифта
            border: 'none',               // Убираем рамку
            borderRadius: '0 5px 5px 0',  // Закругляем только справа
            cursor: 'pointer',            // Указатель при наведении
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Тень для кнопки
            transition: 'background-color 0.3s ease'  // Плавный переход для фона при наведении
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
