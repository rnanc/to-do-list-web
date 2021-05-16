import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;

export const CardContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: #ffff;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 16px;
  min-height: 50%;
  min-width: 90%;
`;

export const HeaderContent = styled.header`
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  align-items: center;
  width: 100%;
  h1 {
    flex: 5;
  }
  div {
    flex: 1
  }
`;

export const CardProject = styled.div`
  margin-right: 16px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  box-shadow: rgba(149, 157, 165, 0.5) 0px 8px 24px;
  padding: 16px;

  .checkbox-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      text-align: start;
      width: 100%;
      margin-bottom: 4px;
    }
  }

  hr {
    color: #4f5d73;
    width: 100%;
  }

  div {
    margin-top: 8px;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;

    button {
      margin-left: 16px;
      width: 30%;
    }
  }
`;

export const CardCreateProject = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  box-shadow: rgba(149, 157, 165, 0.5) 0px 8px 24px;
  padding: 16px;
  color:  #4f5d73;
  h1 {
    margin-bottom: 16px;
  }
  hr {
    color: #4f5d73;
    width: 100%;
    margin-bottom: 16px
  }
`;