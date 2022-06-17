import styled from '@emotion/styled';

export const UseGridLayoutStyle = styled.div`
  .grid-container {
    padding: {
      top: 5rem;
      bottom: 5rem;
    }

    display: grid;
    max-width: 100rem;
    margin: 0 auto;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-auto-rows: 0.5rem;

    .grid-item {
      border-radius: 2rem;
      overflow: hidden;
      visibility: hidden;
    }

    img {
      width: 100%;
    }
  }
`;
