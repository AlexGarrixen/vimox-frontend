import React from 'react';
import styled from 'styled-components';

const AdornmentButton = styled.button`
  background-color: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.gray[200]};
`;

type AdornmentProps = React.HTMLAttributes<HTMLButtonElement>;

export const Adornment: React.FC<AdornmentProps> = ({
  children,
  onClick,
  ...rest
}) => (
  <AdornmentButton onClick={onClick} {...rest}>
    {children}
  </AdornmentButton>
);
