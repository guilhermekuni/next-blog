import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    width: 100%;
    height: 100vh;
    padding: ${theme.spacings.xxlarge};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;

export const MainBox = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.texts};
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    width: 1600px;

    h1 {
      font-size: ${theme.font.sizes.title};
    }

    h2 {
      font-size: ${theme.font.sizes.xlarge};
      color: ${theme.colors.white};

      strong {
        color: ${theme.colors.primary};
        font-weight: bold;
      }
    }

    p {
      font-size: ${theme.font.sizes.large};
    }
  `}
`;

export const TitleSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 600px;
    height: 100%;
  `}
`;
