const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@services': path.resolve(__dirname, 'src/utils/services'),
      '@helpers': path.resolve(__dirname, 'src/utils/helpers'),
    },
  },
};
