import { Box, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { FrButton } from './Framer';

const Hero = () => {
  return (
    <VStack
      pt={40}
      spacing={10}
      justify='center'
      pb={32}
      w='100%'
      align='center'
    >
      <Box p={0}>
        <Text
          w='100%'
          alignSelf='center'
          px={{ base: 6, lg: 12, xl: 'inherit' }}
          textStyle='h2'
          as={motion.h2}
          transition='1s'
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          lineHeight={1}
        >
          Build The Community Your Fans Will Love
        </Text>
      </Box>
      <Text
        textStyle='h4'
        w={{ base: '80%', lg: '60%', xl: '40%' }}
        as={motion.h4}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: [-100, 0], opacity: [0, 1] }}
        transition='1s'
        pb={1}
        textAlign='center'
      >
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </Text>
      <FrButton
        fontSize={{ base: 'lg', lg: '2xl' }}
        h={{ base: '50px', lg: '85px' }}
        w={{ base: '220px', lg: '520px' }}
        whileHover={{ scale: 1.08 }}
        //@ts-ignore
        transition={{ duration: 1 }}
        initial={{ opacity: 0, scale: 0.3 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        borderRadius={79}
        _hover={{ bg: 'pink.300' }}
        bg='pink.400'
        color='white'
        boxShadow='1px 5px 17px #dedede'
      >
        Get Started For Free
      </FrButton>
    </VStack>
  );
};

export default Hero;
