import {  useContext } from 'react';
import AppContext from '../../context/AppContext'
import { Container, ListContainer } from './app-styled'
import { DATASET } from '../../mockDB'
import ListItem from '../../components/ListItem';
import SearchBar from '../../components/Search';


function Home() {
  const { searchQuery } = useContext(AppContext)
  const filteredItems = DATASET.filter(val => {
    if (!searchQuery) {
      return val
    }
    if (val.toLowerCase().includes(searchQuery.toLowerCase())) {
      return val
    }
  })




  return (
    <Container>
      <SearchBar />
      <ListContainer>
        {filteredItems.map((val, i) => (
          <ListItem key={i} val={val} />
        ))
        }
      </ListContainer>
    </Container>
  );
}

export default Home;
