import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import CharacterList from './components/CharacterList/CharacterList';
import NotFound from './components/NotFound/NotFound';

import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={"Home"} />
          <Route path="characters" element={<CharacterList />} />
          <Route path="character/:id" element={"Character Page"} />
          <Route path="locations" element={"Locations List"} />
          <Route path="location/:id" element={"Location Page"} />
          <Route path="user/:id" element={"User page"} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
