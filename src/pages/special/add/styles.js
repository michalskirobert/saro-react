import styled from "styled-components";

export const PreviewContainer = styled.div`
  display: flex;
  max-width: 50px;
  justify-content: center;
  position: relative;
`;

export const PreviewImage = styled.img`
  max-width: 75px;
  max-height: 50px;
  position: absolute;
  top: -70px;
  left: 140px;
`;

export const PreviewDelete = styled.button`
border: 1px solid black;
background: black;
color: white;
border-radius: 50%;
font-size: 10px;
font-weight: bold;
position: absolute;
top: -70px;
left: 170px;
`;
