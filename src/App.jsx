import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import SignIn from './routes/signin/signin.component';
import './categories.styles.scss';
import { Route, Routes } from 'react-router-dom';


const Shop = () => {
  return (
    <div>
      <h1>Shop Page</h1>
    </div>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  ); 
}

export default App;
