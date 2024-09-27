import React, { useState } from 'react';
import axios from 'axios';
import ManageGithubUsers from '../components/ManageGithubUsers';
import SearchInput from '../components/SearchInput';

const BASE_URL = 'https://api.github.com';

const Homepage = () => {
  const [users, setUsers] = useState([]);
  const [queryInProgress, setQueryInProgress] = useState(false);
  const [queryError, setQueryError] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchGithubUsers = async () => {
    const endpoint = `${BASE_URL}/search/users`;

    setQueryInProgress(true);
    setQueryError(null);
    try {
      const apiResponse = await axios.get(endpoint, {
        params: {
          q: searchValue,
          per_page: 50,
        },
      });

      setUsers(apiResponse.data.items);
    } catch (error) {
      console.log('Something went wrongs:', error);
      setQueryError(error.response.data.message);
    } finally {
      setQueryInProgress(false);
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSearchGithubUsers();
  };

  const clearData = () => {};

  return (
    <div>
      <SearchInput
        handleChange={handleChange}
        onSubmit={handleSubmitForm}
        value={searchValue}
      />
      <ManageGithubUsers
        users={users}
        queryInProgress={queryInProgress}
        queryError={queryError}
      />
    </div>
  );
};

export default Homepage;
