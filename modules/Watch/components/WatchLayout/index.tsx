import React from 'react';
import { Container } from '@components/Layout/Container';
import { Spacing } from '@components/Layout/Spacing';
import { LayoutWrapper, ContentMainBox, SidebarBox } from './styled';

const WatchLayout = ({ MainComponent, AsideComponent }: WatchLayoutProps) => (
  <>
    <Spacing size={40} />
    <Container>
      <LayoutWrapper>
        <ContentMainBox>{MainComponent}</ContentMainBox>
        <SidebarBox>{AsideComponent}</SidebarBox>
      </LayoutWrapper>
    </Container>
    <Spacing size={30} />
  </>
);

type WatchLayoutProps = {
  MainComponent?: React.ReactNode;
  AsideComponent?: React.ReactNode;
};

export default WatchLayout;
