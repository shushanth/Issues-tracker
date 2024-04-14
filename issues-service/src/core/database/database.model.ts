export interface DBConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number | string;
  dialect: string;
}

export interface DBEnv {
  development: DBConfig;
  production: DBConfig;
  test: DBConfig;
}
