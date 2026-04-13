import React from 'react';
import { Hero } from './Hero';
import { ProblemAgitation } from './ProblemAgitation';
import { ValueStack } from './ValueStack';
import { TestimonialMarquee } from './TestimonialMarquee';
import { MeetAdam } from './MeetAdam';
import { FinalCTA } from './FinalCTA';

export function LandingPage() {
  return (
    <>
      <Hero />
      <ProblemAgitation />
      <ValueStack />
      <TestimonialMarquee />
      <div id="about">
        <MeetAdam />
      </div>
      <div id="contact">
        <FinalCTA />
      </div>
    </>
  );
}
