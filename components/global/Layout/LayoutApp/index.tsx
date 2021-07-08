import React, { FC } from 'react';
import { Header } from '../../Navigation/Header';
import { LayoutAppStyled, ContentBox } from './styled';
import { Modal } from '@components/Overlays/Modal';
import { TabBottomNav } from '../../Navigation/TabBottomNav';
import { SeriesFinder } from '../../DataDisplay/SeriesFinder';
import Head from './Head';
import { useSeriesFinder } from '@hooks/useSeriesFinder';

export const LayoutApp: FC<LayoutAppProps> = ({
  children,
  title,
  verticallyCenterContent,
}) => {
  const { isVisible, hideSeriesFinder } = useSeriesFinder();

  return (
    <>
      <LayoutAppStyled>
        <Head title={title} />
        <Header />
        <ContentBox verticallyCenterContent={verticallyCenterContent}>
          {children}
        </ContentBox>
        <footer />
        <TabBottomNav />
      </LayoutAppStyled>
      <Modal
        isOpen={isVisible}
        onRequestClose={hideSeriesFinder}
        maxW={768}
        verticalScroll={false}
      >
        <SeriesFinder />
      </Modal>
    </>
  );
};

type LayoutAppProps = {
  children?: React.ReactNode;
  title?: string;
  verticallyCenterContent?: boolean;
};
