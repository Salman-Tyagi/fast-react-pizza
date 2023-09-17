import { useNavigation } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import CartOverview from '../cart/CartOverview';
import Loader from './Loader';

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className='layout'>
      {isLoading && <Loader />}

      <Header />
      <Main />
      <CartOverview />
    </div>
  );
}
