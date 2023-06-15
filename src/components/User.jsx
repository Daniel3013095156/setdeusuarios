import React from 'react';

const User = ({ user, deleteUser, changeShowModal, setisUserToUpdate }) => {
  const handleClikDelete = () => {
    deleteUser(user.id);
  };

  const handleClickUpdate = () => {
    changeShowModal();
    setisUserToUpdate(user);
  };

  return (
    <article className="p-4 border rounded-lg shadow-md">
      <h4 className="text-xl font-semibold mb-2">
        {user.first_name} {user.last_name}
      </h4>
      <div className="mb-2">
        <h5 className="text-lg font-semibold">Correo</h5>
        <span>{user.email}</span>
      </div>
      <div className="mb-2">
        <h5 className="text-lg font-semibold">Cumpleaños</h5>
        <span>
          <i className="bx bx-gift"></i> {user.birthday || 'No fecha'}
        </span>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleClikDelete}
          className="text-red-500 hover:text-red-600"
        >
          <i className="bx bxs-trash"></i>
        </button>
        <button
          onClick={handleClickUpdate}
          className="text-blue-500 hover:text-blue-600 ml-2"
        >
          <i className="bx bx-pencil"></i>
        </button>
      </div>
    </article>
  );
};

export default User;
