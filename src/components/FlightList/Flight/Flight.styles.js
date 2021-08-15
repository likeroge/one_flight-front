import styled, { css } from "styled-components";

export const FlightHeader = styled.div`
  cursor: pointer;
  padding: 10px;
  background: var(--red);
  ${(props) =>
    props.ready === true &&
    css`
      background: var(--green);
      transition: background 0.5s;
    `}
  width: 100%;
  height: 100px;
  display: flex;
  border-bottom: 0.1px solid var(--white);
  .first {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;
  }
  .second {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;
  }
  .third {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40%;
  }
`;
export const FlightMain = styled.div`
  /* background: var(--grey); */
  transition: 1s;
  border: 1px solid var(--grey);
  display: none;
  height: 400px;
  ${(props) =>
    props.open === true &&
    css`
      display: flex;
    `}

  .left {
    display: flex;
    flex-direction: column;
    width: 60%;
    /* height: 100%; */
    padding-top: 20px;
    padding-left: 5%;
    .check {
      display: flex;
      align-items: center;
      &:not(:first-child) {
        margin-top: 5px;
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    width: 40%;
    /* height: 100%; */
    padding-top: 20px;
    padding-left: 5%;
    div {
      display: flex;
      &:not(:first-child) {
        margin-top: 10px;
      }
      width: 100%;
      p {
        width: 30%;
      }
      input {
        /* border-bottom: 1px solid var(--black); */
        width: 50%;
        font-size: 14px;
      }
    }
  }
`;
