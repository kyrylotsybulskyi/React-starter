import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {FAQData} from '../../data/dataStore';
import styles from './FAQ.scss';

const FAQ = () => (
   <Container>
    <h1 className={styles.title}>{FAQData.title}</h1>
    <h2 className={styles.subtitle}>{FAQData.subtitle}</h2>
    <Hero titleText={FAQData.imageTitle} image={FAQData.image} />
    <p className={styles.content}>{FAQData.content}</p>
    </Container>
  
);

export default FAQ;