import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    #button1 {
      width: 42px;
      height: 42px;
      border-radius: 20px;
      background: #363636;
      border: 0;
      cursor: pointer;
    }

  }

  #button2 {
    width: 100px;
    height: 25px;
    background: #363636;
    border: 0;
    cursor: pointer;
    margin-left: 92px;
  }

  ul {
    margin-top: 30px;
  }
`;
