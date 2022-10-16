import logo from './logo.svg';
import './App.css';
import { Routes, useRoutes, Route } from 'react-router-dom';
import getRoutes from './routes';



function App() {

  let routes = getRoutes();

  let AppRoutes = useRoutes(routes)

  return AppRoutes;
}

export default App;
