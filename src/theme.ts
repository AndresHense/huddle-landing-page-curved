import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  textStyles: {
    h1: {
      fontSize: { base: '6xl', lg: '9xl' },
      fontWeight: 'bold',
      lineHeight: 1,
    },
    h2: {
      fontSize: { base: '3xl', lg: '6xl' },
      fontWeight: 'bold',
    },
    h3: {
      fontSize: { base: '2xl', lg: '5xl' },
      fontWeight: 'bold',
    },
    h4: {
      fontSize: { base: 'lg', lg: '2xl' },
    },
    h5: { fontSize: { base: 'lg', lg: 'xl' }, fontWeight: 'medium' },
    h6: { fontSize: 'md' },
  },
});

export default theme;
