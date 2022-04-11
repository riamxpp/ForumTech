import React from "react";
import {
  ListTags,
  SeguraTags,
  Tag,
  TagContainer,
  TituloTags,
} from "./Tags-styled";

const Tags = () => {
  return (
    <TagContainer>
      <SeguraTags>
        <TituloTags># Popular Tags</TituloTags>
        <ListTags>
          <Tag>Javasciprt</Tag>
          <Tag>C#</Tag>
          <Tag>Node</Tag>
          <Tag>Vue</Tag>
          <Tag>Ruby</Tag>
          <Tag>Typescript</Tag>
          <Tag>SQL</Tag>
        </ListTags>
      </SeguraTags>
    </TagContainer>
  );
};

export default Tags;
