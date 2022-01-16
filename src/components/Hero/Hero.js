import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi I'm Fiyin <br />
        Welcome to My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm a software Engineer with experience in React, Vue, Node(Express) and Mongo DB, I have worked on couple of projects and still working continuously. 
      </SectionText>
      <Button onClick={() => window.location = 'https://wa.me/+2347064196590'}>
        Reach out
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;