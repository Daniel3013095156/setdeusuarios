import React from "react";
import User from "./User";

const UserList = ({ users, deleteUser, changeShowModal, setisUserToUpdate }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          changeShowModal={changeShowModal}
          setisUserToUpdate={setisUserToUpdate}
        />
      ))}
    </section>
  );
};

export default UserList;
