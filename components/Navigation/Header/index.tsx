import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Search } from '@components/Icon/Search';
import { Container } from '@components/Layout/Container';
import { useSeriesFinder } from '@hooks/useSeriesFinder';
import { HeaderBox, Nav, LinksBox, AnchorStyled, SearchButton } from './styled';

const links = [
  {
    title: 'Inicio',
    href: '/',
  },
  {
    title: 'Directorio',
    href: '/directory',
  },
];

export const Header = () => {
  const router = useRouter();
  const isLoginRoute = router.pathname === '/login';

  const { showSeriesFinder } = useSeriesFinder();

  return (
    <HeaderBox>
      <Container>
        <Link href='/'>
          <a>
            <img src='/logo.png' height={30} />
          </a>
        </Link>
        {!isLoginRoute && (
          <>
            <Nav>
              <LinksBox>
                {links.map(({ title, href }, idx) => (
                  <li key={idx}>
                    <Link href={href}>
                      <AnchorStyled isActive={router.pathname === href}>
                        {title}
                      </AnchorStyled>
                    </Link>
                  </li>
                ))}
              </LinksBox>
            </Nav>
            <SearchButton onClick={showSeriesFinder}>
              <Search color='#fff' xl />
            </SearchButton>
          </>
        )}
      </Container>
    </HeaderBox>
  );
};
