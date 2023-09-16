import Header from './Header';
import Main from './Main';
import CartOverview from '../cart/CartOverview';

export default function AppLayout() {
  return (
    <div>
      <Header />
      <Main />
      <CartOverview />
    </div>
  );
}
