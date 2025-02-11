import { Hono } from 'hono';

export const calculator = new Hono();

calculator.get('/', (c) => {
  return c.text(`
    Hello from calculator! Available Routes:
    
    - POST /add
    - POST /subtract
    - POST /multiply
    - POST /divide
    `);
});

calculator.post('/add', async (c) => {
  const { a, b } = await c.req.json();
  return c.json({
    result: a + b,
  });
});

calculator.post('/subtract', async (c) => {
  const { a, b } = await c.req.json();
  return c.json({
    result: a - b,
  });
});

calculator.post('/multiply', async (c) => {
  const { a, b } = await c.req.json();
  return c.json({
    result: a * b,
  });
});

calculator.post('/divide', async (c) => {
  const { a, b } = await c.req.json();
  if (b === 0) {
    return c.json({
      error: 'Cannot divide by zero! 🤡',
    });
  }

  return c.json({
    result: a / b,
  });
});
