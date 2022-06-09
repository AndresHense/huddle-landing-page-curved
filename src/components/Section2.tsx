import {
  HStack,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const Section2 = () => {
  const bgTop = useBreakpointValue({
    base: 'images/bg-section-top-mobile-1.svg',
    lg: 'images/bg-section-top-desktop-1.svg',
  });

  const bgBottom = useBreakpointValue({
    base: 'images/bg-section-bottom-mobile-1.svg',
    lg: 'images/bg-section-bottom-desktop-1.svg',
  });

  return (
    <VStack spacing={0} w='100%' pt={14}>
      <Image src={bgTop} w='100%' />
      <Stack
        direction={{ base: 'column-reverse', lg: 'row' }}
        bg='#f6fbff'
        px={{ base: 8, lg: 16, xl: 32, '2xl': 44 }}
        py={16}
        spacing={{ base: 20, lg: 'inherit' }}
      >
        <VStack
          align={{ base: 'center', lg: 'start' }}
          justify='center'
          pr={{ base: 0, lg: 8, xl: 14 }}
          as={motion.div}
          transition='1s'
          initial={{ y: 45, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          spacing={{ base: 5, lg: 4 }}
        >
          <Text textStyle='h3' lineHeight={1}>
            Grow Together
          </Text>
          <Text
            textStyle='h5'
            textAlign={{ base: 'center', lg: 'inherit' }}
            w={{ base: '100%', md: '60%', lg: '78%' }}
            alignSelf={{ base: 'center', lg: 'inherit' }}
          >
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </Text>
        </VStack>
        <Image
          as={motion.img}
          transition='1s'
          initial={{ x: 25, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          objectFit='contain'
          h={{
            base: '240px',
            md: '320px',
            lg: '380px',
            xl: '480px',
            '2xl': '560px',
          }}
          pr={{ base: 0, lg: 8, xl: 12 }}
          src='images/illustration-grow-together.svg'
        />
      </Stack>
      <Image src={bgBottom} w='100%' />
    </VStack>
  );
};

export default Section2;
