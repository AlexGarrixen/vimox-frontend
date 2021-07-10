import styled from 'styled-components';

export const LayoutWrapper = styled.section`
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr;
  grid-template-areas:
    'contentMain'
    'sidebar';

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    grid-template-columns: 1fr 280px;
    grid-template-areas: 'contentMain sidebar';
  }
`;

export const ContentMainBox = styled.div`
  grid-area: contentMain;
`;

export const SidebarBox = styled.aside`
  grid-area: sidebar;
`;
