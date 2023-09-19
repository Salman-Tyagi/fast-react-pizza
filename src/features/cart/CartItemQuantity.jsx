import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseItemQuantity,
  getPizzaQuantity,
  increaseItemQuantity,
} from './cartSlice';

export default function CartItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();

  const currentPizzaQuantity = useSelector(getPizzaQuantity(pizzaId));

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <button
        style={{
          backgroundColor: 'rgb(250 204 21 / var(--tw-bg-opacity))',
          borderRadius: '50%',
          width: '20px',
        }}
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </button>
      <span>{currentPizzaQuantity}</span>
      <button
        style={{
          backgroundColor: 'rgb(250 204 21 / var(--tw-bg-opacity))',
          borderRadius: '50%',
          width: '20px',
        }}
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </button>
    </div>
  );
}
