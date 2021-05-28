import React from 'react';
import { Spacing } from '@components/Layout/Spacing';
import { PlayerComponent } from '@localComponents/watch/MediaContent/Player';
import { NavButtons } from '@localComponents/watch/MediaContent/NavButtons';
import { About } from '@localComponents/watch/MediaContent/About';

export const MediaContent = () => (
  <>
    <PlayerComponent />
    <Spacing size={24} />
    <NavButtons />
    <Spacing size={30} />
    <About />
  </>
);
