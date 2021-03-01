import React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { Dialog } from '@components/Feedback/Dialog';
import { Player } from '@components/Media/Player';
import { Hero } from '@pageComponents/Serie/Hero';
import { EpisodesGrid } from '@pageComponents/Serie/EpisodesGrid';

const Serie = () => (
  <LayoutApp>
    <Hero />
    <EpisodesGrid />
    <Dialog>
      <Player />
    </Dialog>
  </LayoutApp>
);

export default Serie;
