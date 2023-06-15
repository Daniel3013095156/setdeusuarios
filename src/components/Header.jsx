import React from 'react';

const Header = ({ changeShowModal, toggleDarkMode, isDarkMode }) => {
  const handleClickShowModal = () => {
    changeShowModal();
  };

  return (
    <header className={`flex justify-between items-center p-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200'}`}>
      <h1 className="font-bold text-2xl">{isDarkMode ? 'Instruir Colombia - Modo Oscuro' : 'Instruir Colombia'}</h1>

      <div>
        <button onClick={toggleDarkMode} className={`btn-primary ${isDarkMode ? 'bg-gray-700' : 'bg-blue-500'}`}>
          {isDarkMode ? (
            <i className="bx bx-moon"></i>
          ) : (
            <i className="bx bx-sun"></i>
          )}
          {isDarkMode ? ' Modo Claro' : ' Modo Oscuro'}
        </button>

        <button onClick={handleClickShowModal} className={`btn-primary ml-4 ${isDarkMode ? 'bg-gray-700' : 'bg-blue-500'}`}>
          <i className="bx bx-plus"></i> Crear nuevo usuario
        </button>
      </div>
    </header>
  );
};

export default Header;
