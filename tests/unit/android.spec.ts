import { expect } from 'chai';
import { readConfig } from '../helpers/utils';
import { Config } from '../../src/api/config';

let config: Config;

describe('Android Configuration', () => {
  beforeEach(() => {
    return readConfig('android.yml').then(cfg => config = cfg);
  });
});