import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import ModalForm from './components/ModalForm';
import axios from 'axios';
import UserList from './components/UserList';

const BASE_URL = 'https://users-crud.academlo.tech';

const DEFAULT_VALUES = {
  birthday: '',
  first_name: '',
  last_name: '',
  email: '',
  password: '',
};

function App() {
  const [isUserToUpdate, setisUserToUpdate] = useState(null);
  const [isShowModal, setisShowModal] = useState(false);
  const [users, setusers] = useState([]);

  const changeShowModal = () => setisShowModal(!isShowModal);

  const getAllUser = () => {
    const url = BASE_URL + '/users/';

    axios
      .get(url)
      .then(({ data }) => setusers(data))
      .catch((err) => console.log(err));
  };

  const createUser = (data, reset) => {
    const url = BASE_URL + '/users/';

    axios
      .post(url, data)
      .then(() => {
        getAllUser();
        resetModalForm(reset);
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (id) => {
    const url = BASE_URL + `/users/${id}/`;

    axios
      .delete(url)
      .then(() => getAllUser())
      .catch((err) => console.log(err));
  };

  const updateUser = (data, reset) => {
    const url = BASE_URL + `/users/${isUserToUpdate.id}/`;

    axios
      .patch(url, data)
      .then(() => {
        getAllUser();
        resetModalForm(reset);
      })
      .catch((err) => console.log(err));
  };

  const resetModalForm = (reset) => {
    setisShowModal(false);
    reset(DEFAULT_VALUES);
    setisUserToUpdate(null);
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <main className="font-['Roboto']">
      <Header changeShowModal={changeShowModal} />

      <div className="container mx-auto mt-8">
        <ModalForm
          isShowModal={isShowModal}
          createUser={createUser}
          isUserToUpdate={isUserToUpdate}
          updateUser={updateUser}
          resetModalForm={resetModalForm}
        />

        <UserList
          users={users}
          deleteUser={deleteUser}
          changeShowModal={changeShowModal}
          setisUserToUpdate={setisUserToUpdate}
        />
      </div>
    </main>
  );
}

export default App;
