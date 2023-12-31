import styled from "styled-components";
import {Grid} from "@mui/material";
import ReactConfetti from "react-confetti";

export const CustomGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  margin: -16px;
`

export const GridContainer = styled.div`
  margin-top: 2vh;
  margin-bottom: 2vh;
`;

export const GridWrapper = styled.div`
  width: 300px;
  height: 300px;
  border: 2px solid #333;
  border-radius: 5px;
  display: flex; /* Added to center the GridContainer vertically */
  justify-content: center; /* Added to center the GridContainer vertically */
  align-items: center; /* Added to center the GridContainer vertically */
`;

export const Cell = styled.div`
  cursor: pointer;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  transition: background-color 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: bold;
  height: 80px;
  width: 80px;
  color: #1a1a1a;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const CellImage = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0;
`;

export const Label = styled.label`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #1a1a1a;
  display: flex;
`;

export const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const Popup = styled.div`
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

export const PopupHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center; //to center the text in the header
  color: black;
`;

export const PopupButton = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: #fff;

  &:first-child {
    background-color: #4caf50;
    margin-right: 10px;
  }

  &:last-child {
    background-color: #f44336;
  }
`;

export const ImgLbl = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;

export const PlayerImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const PlayerInfoDiv = styled.div`
  display: flex;
  justify-content: space-evenly; //placed the label on opposite sides
  max-width: 55vw;
  max-height: 10vh;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

export const CurrentLabelDiv = styled.div`
  display: grid;
  max-width: 55vw;
  max-height: 15vh;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

export const CurrLabelName = styled.div`
  display: flex;
  justify-content: center;
`

export const CurrLabelSign = styled.div`
  display: flex;
  justify-content: center;
`

export const Confetti = styled(ReactConfetti)`
  width: 100%;
`
