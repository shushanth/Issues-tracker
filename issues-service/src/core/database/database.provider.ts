import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, PRODUCTION, DEVELOPMENT, TEST } from './../constants';
import { databaseConfig } from './database.config';
import { Issues } from '../../modules/issues/issues.entity';
import { User } from './../../modules/users/users.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT: {
          config = databaseConfig.development;
          break;
        }
        case PRODUCTION: {
          config = databaseConfig.production;
          break;
        }
        case TEST: {
          config = databaseConfig.test;
          break;
        }
        default: {
          config = databaseConfig.development;
        }
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([Issues, User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
