import './category.styles.scss'
import Categories from './components/Categories/Categories';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import SignIn from './components/SignIn/SignIn';


function App() {

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Categories />} />
          <Route path='signin' element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
