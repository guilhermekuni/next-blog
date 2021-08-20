import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    padding: ${theme.spacings.large} ${theme.spacings.ularge} 0;

    @media (max-width: ${theme.breakpoints.xlarge}) {
      padding: ${theme.spacings.large} ${theme.spacings.xxlarge} 0;
    }

    @media (max-width: ${theme.breakpoints.large}) {
      padding: ${theme.spacings.large} ${theme.spacings.xlarge} 0;
    }

    @media (max-width: ${theme.breakpoints.medium}) {
      padding: ${theme.spacings.medium} ${theme.spacings.medium} 0;
    }

    @media (max-width: ${theme.breakpoints.small}) {
      padding: ${theme.spacings.xxsmall};
    }
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

    @media (max-width: ${theme.breakpoints.xsmall}) {
      p {
        display: none;
      }
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

    @media (max-width: ${theme.breakpoints.small}) {
      padding: 0;
    }
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

    @media (max-width: ${theme.breakpoints.xsmall}) {
      line-height: 4rem;

      h1 {
        font-size: ${theme.font.sizes.xlarge};
      }

      h2 {
        font-size: ${theme.font.sizes.small};
        color: ${theme.colors.white};
      }

      p {
        font-size: ${theme.font.sizes.xsmall};
      }
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
