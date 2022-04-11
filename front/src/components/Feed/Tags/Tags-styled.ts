import styled from "styled-components";
import { colors } from "../../../colors";

const TagContainer = styled.div`
  width: 25%;
  height: auto;
`;

const SeguraTags = styled.div`
  width: 100%;
  height: auto;
  background: ${colors.primary};
  border-radius: 2px;
  padding: 1rem;
`;

const TituloTags = styled.h2``;

const ListTags = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Tag = styled.li`
  background-color: yellow;
  padding: 0.1rem 0.5rem;
  border-radius: 20px;
  font-size: 1rem;
`;

export { TagContainer, SeguraTags, TituloTags, ListTags, Tag };
