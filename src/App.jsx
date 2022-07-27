import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Home from './pages/homePage/Home'

const App = () => {
  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </AppProvider>
    </Router>
  )
}

export default App