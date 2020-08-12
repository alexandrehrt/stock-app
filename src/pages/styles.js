import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  margin-top: 70px;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 50px;
    padding: 0 24px;
    border: 0;
    border-radius: 8px;
    color: #3a3a3a;
    border: 2px solid #fff;
    text-transform: uppercase;
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const ChartContainer = styled.div`
  margin-top: 50px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 2s;
`;
