import styled, { css } from 'styled-components';

type LinkProps = {
  isActive?: boolean;
};

export const HeaderBox = styled.header`
  position: relative;
  z-index: 5;
  height: 58px;

  & > div {
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Nav = styled.nav`
  @media (min-width: ${({ theme }) => theme.screens.md}) {
    flex: 1;
    margin-left: 100px;
  }
`;

export const LinksBox = styled.ul`
  display: none;

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    display: flex;

    li:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export const AnchorStyled = styled.a<LinkProps>`
  color: #fff;
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.colors.primary};
    `}
`;

export const ActionsBox = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;

export const IconButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
