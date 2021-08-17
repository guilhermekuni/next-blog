import * as S from './styles';
import { Linkedin, Github, Instagram } from '@styled-icons/boxicons-logos';

const Main = () => (
  <S.Wrapper>
    <S.Header>
      <p>GUILHERME KUNIYOSHI</p>
    </S.Header>
    <S.MainBox>
      <p>hi there, </p>
      <h1>I'm Kuni</h1>
      <h2>
        Front-end Engineer{' '}
        <S.Link target="_blank" href="https://x-team.com/">
          @ X-Team
        </S.Link>
      </h2>
      <S.SocialLinksSection>
        <Linkedin />
        <Github />
        <Instagram />
      </S.SocialLinksSection>
    </S.MainBox>
  </S.Wrapper>
);

export default Main;
