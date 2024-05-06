import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Content = styled.div`
  max-width: 800px;
  width: 100%;
  background: #ffffff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #333333;
`;
