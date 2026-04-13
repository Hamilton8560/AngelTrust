import React from 'react';
import { Hero } from './Hero';
import { ProblemAgitation } from './ProblemAgitation';
import { ValueStack } from './ValueStack';
import { TestimonialWall } from './TestimonialWall';
import { MeetAdam } from './MeetAdam';
import { FinalCTA } from './FinalCTA';

export function LandingPage() {
  return (
    <>
      <Hero />
      <ProblemAgitation />
      <ValueStack />
      <TestimonialWall />
      <div id="about">
        <MeetAdam />
      </div>
      <div id="contact">
        <FinalCTA />
      </div>
    </>
  );
}
