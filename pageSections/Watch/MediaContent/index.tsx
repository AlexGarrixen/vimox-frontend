import React from 'react';
import { PlayerComponent } from '@localComponents/watch/MediaContent/Player';
import { NavButtons } from '@localComponents/watch/MediaContent/NavButtons';
import { About } from '@localComponents/watch/MediaContent/About';

export const MediaContent = () => (
  <>
    <PlayerComponent />
    <NavButtons />
    <About />
  </>
);
