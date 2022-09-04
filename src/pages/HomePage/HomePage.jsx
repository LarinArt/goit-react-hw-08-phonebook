import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import { Wrapper, TextTyped, Title } from './HomePage.styled';

const HomePage = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hello, my friend! I'm yours —"],
      startDelay: 1200,
      typeSpeed: 60,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Wrapper>
      <TextTyped ref={el}></TextTyped>
      <Title
        as={motion.h1}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, delay: 4 }}
      >
        Phonebook
      </Title>
    </Wrapper>
  );
};

export default HomePage;
