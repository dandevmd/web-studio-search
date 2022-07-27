import React from 'react'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import { Title, Input } from './searchBar-styles'


const SearchBar = () => {
  const { searchQuery, handleSearch } = useContext(AppContext)

  return (
    <>
      <Title>Search App</Title>
      <Input type="text" value={searchQuery} onChange={handleSearch} />
    </>
  )
}

export default SearchBar