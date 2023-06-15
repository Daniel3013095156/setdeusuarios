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
  const [isDarkMode, setisDarkMode] = useState(false);

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

  const toggleDarkMode = () => {
    setisDarkMode(!isDarkMode);
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <main className={`font-['Roboto'] ${isDarkMode ? 'dark' : ''}`}>
      <Header changeShowModal={changeShowModal} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

      <div className={`container mx-auto mt-8 ${isDarkMode ? 'dark' : ''}`}>
        <ModalForm
          isShowModal={isShowModal}
          createUser={createUser}
          isUserToUpdate={isUserToUpdate}
          updateUser={updateUser}
          resetModalForm={resetModalForm}
          isDarkMode={isDarkMode}
        />

        <UserList
          users={users}
          deleteUser={deleteUser}
          changeShowModal={changeShowModal}
          setisUserToUpdate={setisUserToUpdate}
          isDarkMode={isDarkMode}
        />
      </div>
    </main>
  );
}

export default App;
