import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface StyledButtonProps {
  disabled?: boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
    
    outline: none;
    border: none;
    border-radius: 50px;
    padding:12px 54px;
    background: ${({disabled}) => disabled ? '#3678B4' : '#3678B4'};
    color: white;
    font-size: 20px;
    cursor: pointer;
`;




/* .button-component {
    width: 100%;
    height: 70px;
    outline: none;
    border: none;
    border-radius: 4px;
    padding: 20px;
    background-color: #1f27f5;
    color: white;
    font-size: 16px;
    cursor: pointer;
  } */
  
  /* .main-button {
    width: 300px;
    padding: 20px 30px;
    font-size: 28px;
    color: aliceblue;
    border: none;
    border-radius: 4px;
  }
  
  .primary-button {
    background: rgb(21, 56, 79);
  }
  
  .secondary-button {
    background: rgb(21, 79, 44);
  } */