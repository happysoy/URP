import { useRef } from "react";
import styled from "@emotion/styled";
import currentIndex from "../utils/currentIndex";

export default function SentenceList({ sentences }) {
  return (
    <div>
      {sentences.map((sentence, index) => (
        <Sentence sentence={sentence} key={index} />
      ))}
    </div>
  );
}

function Sentence({ sentence }) {
  const inputText = useRef();

  const handleClick = (event) => {
    const result = currentIndex(inputText.current);
    if (result) {
      console.log(result);
    }
  };
  const handleDoubleClick = () => {
    console.log("👆👆double click");
  };

  return (
    <div>
      <TextArea
        id="box"
        ref={inputText}
        value={sentence}
        readOnly
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
      />
    </div>
  );
}

const TextArea = styled.textarea`
  font-size: 16px;
  box-sizing: border-box;
  width: 800px;
  height: 50px;
  // border: none;
  font-family: "Noto Sans KR";
  resize: none;

  :focus {
    outline: none;
  }
`;
