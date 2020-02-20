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
    &.active {
      border-bottom: 4px solid #455a64;
    }
  }
  .navbar__link--active {
    border-bottom: 3px solid #29b6f6;
    transition: border-bottom 0.5s ease-in-out;
  }
  .
`;

export default HomepageStyle;
