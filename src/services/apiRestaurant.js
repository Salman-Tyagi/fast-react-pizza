import axios from 'axios';

const API_URL = 'https://react-fast-pizza-api.onrender.com/api';

export async function getMenu() {
  try {
    const res = await axios(`${API_URL}/menu`);
    const data = res?.data?.data;
    return data;
  } catch (err) {
    throw Error('Failed to fetch');
  }
}

export async function getOrder(id) {
  try {
    const res = await axios(`${API_URL}/order/${id}`);
    const data = res?.data?.data;

    return data;
  } catch (err) {
    throw Error('Failed getting your order');
  }
}

export async function createOrder(newOrder) {
  try {
    const res = await axios.post(`${API_URL}/order`, newOrder);

    const data = res?.data?.data;
    return data;
  } catch {
    throw Error('Failed creating your order');
  }
}

export async function updateOrder(id, updateObj) {
  try {
    await axios.patch(`${API_URL}/order/${id}`, updateObj);
  } catch (err) {
    throw Error('Failed updating your order');
  }
}
