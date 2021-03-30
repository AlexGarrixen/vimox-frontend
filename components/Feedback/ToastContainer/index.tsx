import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export const ToastContainerStyled = styled(ToastContainer)`
  .Toastify__toast-body {
    font-family: ${({ theme }) => theme.fontFamily.sans.join(',')};
  }

  .Toastify__toast--error {
    background: ${({ theme }) => theme.colors.danger};
  }

  .Toastify__toast--warning {
    background: ${({ theme }) => theme.colors.warning};
  }

  .Toastify__toast--success {
    background: ${({ theme }) => theme.colors.success};
  }
`;
