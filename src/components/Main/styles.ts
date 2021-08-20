import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme: { spacings } }) => css`
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    padding: ${spacings.large} ${spacings.ularge} 0;
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    color: ${theme.colors.texts};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;

    p {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.darkLinks};
    }
  `}
`;

export const MainBox = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.large};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 100%;
    width: 100%;
  `}
`;

export const Content = styled.section`
  ${({ theme }) => css`
    color: ${theme.colors.texts};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    width: 100%;
    line-height: 8rem;

    h1 {
      font-size: ${theme.font.sizes.title};
    }

    h2 {
      font-size: ${theme.font.sizes.xlarge};
      color: ${theme.colors.white};
    }

    p {
      font-size: ${theme.font.sizes.large};
    }
  `}
`;

export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    transition: ${theme.transitions.hover};
  `}
`;
