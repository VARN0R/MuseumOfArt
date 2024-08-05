const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
    },
  },
};
