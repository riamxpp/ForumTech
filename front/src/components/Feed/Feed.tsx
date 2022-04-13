import React, { useContext, useEffect } from "react";
import { FeedSection, Questions } from "./FeedStyles";
import Question from "./Questions/Questions";
import Tags from "./Tags/Tags";
import Header from "../Header/Header";
import Search from "./Search/Search";
import { ForumContext } from "../../Context/ForumContext";
import { QuestionInterface } from "../../Context/ForumIterface";

const Feed = () => {
  const { getQuestions, setQuestion, loading, error, questions } =
    useContext(ForumContext);

  useEffect(() => {
    async function takeDate() {
      await getQuestions();
    }
    takeDate();
  }, []);

  function setaQuestion(item: QuestionInterface) {
    setQuestion(item);
  }

  if (error.currentError) return <div>Error {error.nameError}</div>;
  if (loading) return <div>Loading...</div>;
  return (
    <>
      <Header />
      <Search />
      <FeedSection>
        <Questions>
          {questions.length > 1 &&
            questions.map((item) => (
              <Question
                onClick={() => setaQuestion(item)}
                name={item.name}
                pergunta={item.pergunta}
                language={item.language}
                numberComments={item.numberComments}
                data={item.data}
                key={item.id}
              ></Question>
            ))}
        </Questions>
        <Tags></Tags>
      </FeedSection>
    </>
  );
};

export default Feed;
