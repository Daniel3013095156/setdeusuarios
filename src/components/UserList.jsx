import React from 'react';
import User from './User';

const UserList = ({ users, deleteUser, changeShowModal, setisUserToUpdate, isDarkMode }) => {
  return (
    <section className={`grid gap-6 ${isDarkMode ? 'dark' : ''}`}>
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          changeShowModal={changeShowModal}
          setisUserToUpdate={setisUserToUpdate}
          isDarkMode={isDarkMode}
        />
      ))}
    </section>
  );
};

export default UserList;
