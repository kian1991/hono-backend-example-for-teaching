import { Hono } from 'hono';
import { stress } from './routes/stress';
import { crash } from './routes/crash';
import { cart } from './routes/cart';
import * as os from 'os';

const app = new Hono();

app.route('/stress', stress);
app.route('/crash', crash);
app.route('/cart', cart);

app.get('/', (c) => {
  return c.text(`Hello from ${os.hostname()}!`);
});

export default app;
