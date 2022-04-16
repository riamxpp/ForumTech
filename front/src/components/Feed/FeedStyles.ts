import styled from "styled-components";

const FeedSection = styled.section`
  width: 65rem;
  height: auto;
  padding: 1rem 0;
  margin: 0 auto;
  display: flex;
  gap: 1rem;
`;

const Questions = styled.div`
  width: 75%;
  height: auto;
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  box-shadow: 1px 0px 6px rgb(0 0 0 / 70%);
`;

export { FeedSection, Questions };
