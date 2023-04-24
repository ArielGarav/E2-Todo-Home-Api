import styled from "styled-components";

export const AboutContainerStyled = styled.section`
  min-height: 35vh;
  height: auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background: transparent;
`;

export const AboutTitleStyled = styled.h2`
  color: black;
  font-family: pixel-heading;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;

export const AboutTextStyled = styled.p`
  color: black;
  width: 70%;
  text-align: center;
  line-height: 1.5;
  font-size: 24px;
  font-weight: 600;

  @media screen and (max-width: 590px) {
    width: 100%;
  }
`;
