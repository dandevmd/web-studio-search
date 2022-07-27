import {useState, useEffect,  createContext} from 'react'
import {useSearchParams} from 'react-router-dom'

 const AppContext = createContext()

export const AppProvider = ({children}) => {
  const [searchQuery, setSearchQuery] = useState('');
  let [searchUrl, setSearchUrl] = useSearchParams();

  const query = searchUrl.get('search');

  useEffect(() => {
    if (query) {
      setSearchQuery(query);
    }
  }, []);


  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setSearchUrl({ search: e.target.value });
  }

  return <AppContext.Provider value={{searchQuery, handleSearch}}>
    {children}
  </AppContext.Provider>
}

export default AppContext