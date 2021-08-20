import styled, { css } from 'styled-components';

export const SocialLinksSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: ${theme.spacings.medium};

    svg {
      height: 36px;
      margin-top: ${theme.spacings.medium};
      color: ${theme.colors.darkLinks};
      cursor: pointer;
      transition: ${theme.transitions.hover};

      &:hover {
        color: ${theme.colors.primary};
      }
    }
  `}
`;

export const StraightLine = styled.hr`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    border: 2px solid ${theme.colors.darkLinks};
    width: 0;
    height: 80px;
    align-self: center;
  `}
`;
