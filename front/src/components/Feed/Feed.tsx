import React from "react";
import { FeedSection, Questions } from "./FeedStyles";
import Question from "./Question/Question";
import Tags from "./Tags/Tags";

const Feed = () => {
  return (
    <FeedSection>
      <Questions>
        <Question></Question>
        <Question></Question>
        <Question></Question>
        <Question></Question>
      </Questions>
      <Tags></Tags>
    </FeedSection>
  );
};

export default Feed;
