import React from "react";

const Header = ({ changeShowModal }) => {
  const handleClickShowModal = () => {
    changeShowModal();
  };

  return (
    <section className="bg-blue-200 py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-4xl text-blue-900">
              <span className="text-blue-500">Instruir</span> Colombia
            </h1>
            <h2 className="text-lg text-gray-600">Plataforma de Gestión</h2>
          </div>
          <button
            onClick={handleClickShowModal}
            className="btn-primary bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            <i className="bx bx-plus"></i> Crear nuevo usuario
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
