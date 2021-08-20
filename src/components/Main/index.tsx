import SocialLinksSection from 'components/SocialLinksSection';

import * as S from './styles';

const Main = () => (
  <S.Wrapper>
    <S.MainBox>
      <S.Header>
        <p>@ guilhermekuni</p>
      </S.Header>
      <S.Content>
        <p>hi there,</p>
        <h1>I'm Guilherme</h1>
        <h2>
          Frontend Engineer{' '}
          <S.Link target="_blank" href="https://x-team.com/">
            @ X-Team
          </S.Link>
        </h2>
      </S.Content>
    </S.MainBox>
    <SocialLinksSection />
  </S.Wrapper>
);

export default Main;
