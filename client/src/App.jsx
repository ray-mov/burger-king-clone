import { BrowserRouter,Routes, Route,} from "react-router-dom";
import Nav from './components/Nav.jsx';
import routes from './routes/routes.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Routes>
   
  </BrowserRouter>
  )
}

export default App