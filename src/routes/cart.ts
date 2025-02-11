import { Hono } from 'hono';

export const cart = new Hono();

const cartItems = [
  {
    id: 1,
    name: 'Apple',
    quantity: 5,
  },
  {
    id: 2,
    name: 'Banana',
    quantity: 3,
  },
  {
    id: 3,
    name: 'Cherry',
    quantity: 1,
  },
];

cart.get('/', (c) => c.json(cartItems));
cart.post('/', async (c) => {
  const newItem = await c.req.json();
  if (!newItem.name || !newItem.quantity) {
    return c.res;
  }

  const newItemWithId = { id: cartItems.length + 1, ...newItem };
  cartItems.push(newItemWithId);
  return c.json(newItemWithId);
});

cart.delete('/:id', (c) => {
  const { id } = c.req.param();
  const parsedId = parseInt(id);
  cartItems.splice(parsedId, 1);
  return c.json({
    message: '❌ Deleted',
  });
});
