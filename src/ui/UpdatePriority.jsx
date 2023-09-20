import { useFetcher } from 'react-router-dom';
import Button from '../ui/Button';
import { updateOrder } from '../services/apiRestaurant';

export default function UpdatePriority({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method='PATCH'>
      <Button type='primary'>Make priority</Button>
    </fetcher.Form>
  );
}

export const action = async ({ request, params }) => {
  const updateObj = { priority: true };
  await updateOrder(params.orderId, updateObj);
  return null;
};
