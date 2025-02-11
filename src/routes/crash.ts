import { Hono } from 'hono';

export const crash = new Hono();

crash.get('/', (c) => {
  console.log('Crashing the server...');
  process.exit(1);
});
