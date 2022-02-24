/* eslint-disable import/prefer-default-export */
import config from 'utils/config';

const formatImageLink = (key, size = 'w500') => `${config.imdbImageDomain}/${size}${key}`;

export {
  formatImageLink,
};
