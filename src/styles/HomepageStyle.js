import styled from 'styled-components';

const HomepageStyle = styled.div`
  width: 100%;
  height: 100%;
  .header__wrapper {
    display: flex;
    width: 100%;
    max-width: 80%;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    background: #00bbd3;
    margin: 2rem auto 0 auto;
    font-family: 'Raleway-Medium';
  }
  .homepage__router {
    color: #ffffff;
    padding: 1rem;
    text-align: center;
    font-size: 1.5rem;
    flex: 2;
    &:active,
    &:focus,
    &:focus-within {
      border-bottom: 2px solid #ffffff;
    }
  }
`;

export default HomepageStyle;
