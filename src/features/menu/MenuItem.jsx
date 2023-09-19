import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem, getPizzaQuantity } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import CartItemQuantity from '../cart/CartItemQuantity';

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentPizzaQuantity = useSelector(getPizzaQuantity(id));
  const isInCart = currentPizzaQuantity > 0;

  function handleAddItem() {
    const newItem = {
      pizzaId: id,
      name,
      ingredients,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li className='flex gap-4 py-2'>
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className='flex grow flex-col pt-0.5'>
        <p className='font-medium'>{name}</p>
        <p className='text-sm capitalize italic text-stone-500'>
          {ingredients.join(', ')}
        </p>
        <div className='mt-auto flex items-center justify-between'>
          {!soldOut ? (
            <p className='text-sm'>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className='text-sm font-medium uppercase text-stone-500'>
              Sold out
            </p>
          )}

          {!soldOut && isInCart && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <CartItemQuantity pizzaId={id} />
              <DeleteItem pizzaId={id} onClick={() => deleteItem(id)} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button type='small' onClick={handleAddItem}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
