import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { AppRouter } from './AppRouter';

const app = express();

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
