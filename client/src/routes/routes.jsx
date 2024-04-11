
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import LoginPage from '../pages/LoginPage';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/cart', element: <CartPage /> },
   { path: '/login', element: <LoginPage /> },
  // { path: '/contact', component: Contact },
  // { path: '*', component: NotFound },
];

export default routes;