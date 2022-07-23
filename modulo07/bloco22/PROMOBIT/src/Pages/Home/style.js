import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
  margin: 1.875rem 7rem;
  gap: 2rem;

  @media (max-width: 720px) {
    width: 100vw;
    justify-content: center;
    margin: 2rem 1rem;
    gap: 1rem;
  }

  @media (min-width: 1200px) {
    width: 100vw;
    justify-content: center;
    margin: 2rem 1rem;
    gap: 1rem;
  }
`
export const StyledPaginateContainer = styled.div`
  .pagination {
    display: flex;
    flex-direction: row;
    color: #00bfff;
    list-style-type: none;
    padding: 10px;
    li {
      border-radius: 10px;

      a {
        margin: 0.5rem;
        cursor: pointer;
      }
    }
  }
  .break-me {
    cursor: default;
  }
  .active {
    border-color: transparent;
    background-color: #add8e6;
    color: #5c16c5;
  }
`
