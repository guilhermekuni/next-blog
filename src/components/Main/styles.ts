import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    height: 100vh;
    padding: ${theme.spacings.medium} ${theme.spacings.xxlarge};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    padding: 0 3rem;
    color: ${theme.colors.texts};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;

    p {
      font-size: ${theme.font.sizes.small};
    }
  `}
`;

export const MainBox = styled.section`
  ${({ theme }) => css`
    color: ${theme.colors.texts};
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    width: 100%;

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
  `}
`;

export const SocialLinksSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 400px;
    margin-top: ${theme.spacings.medium};

    svg {
      height: 40px;
    }
  `}
`;
