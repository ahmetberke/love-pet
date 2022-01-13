import path from 'path';
import dotenv from 'dotenv';

dotenv.config({path: path.join(path.resolve(), '.env')});

const config = {
  db_username: process.env.DB_USERNAME,
  db_password: process.env.DB_PASSWORD,
  token_key: process.env.TOKEN_KEY,
  mail_username: process.env.MAIL_USERNAME,
  mail_password: process.env.MAIL_PASSWORD,
  http_server_port: process.env.HTTP_SERVER_PORT,
  node_env: process.env.NODE_ENV,
};

export default config;
