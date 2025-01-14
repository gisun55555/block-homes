import styled from 'styled-components'

export const SummaryContainer = styled.div`
  width: 100%;
  height: 6rem;
  border: 2px solid #845bd3;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-shadow: 0px 5.972px 5.972px 3px rgba(0, 0, 0, 0.25);

  .check-text {
    height: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 1.25rem;
    font-weight: 500;
    text-align: center;

    p {
      font-size: 0.75rem;
      color: #808080;
    }
  }
`
