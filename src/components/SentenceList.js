import { useRef, useState } from "react";
import styled from "@emotion/styled";
import currentIndex from "../utils/currentIndex";

// keycode constant

const keyType = {
  one: 49,
  two: 50,
  three: 51,
};

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
  const [word, setWord] = useState("");
  const [phrase, setPhrase] = useState("");

  const handleClick = (event) => {
    const result = currentIndex(inputText.current);
    if (result) {
      setWord(result);
    }
  };
  // const handleDoubleClick = () => {
  //   console.log("ππdouble click");
  // };

  const handleKeyDown = async (e) => {
    if (e.keyCode === keyType.one) {
      console.log("keyType=>1, μ νν λ¨μ΄=>", phrase);
    } else if (e.keyCode === keyType.two) {
      console.log("keyType=> 2, μ νν λ¨μ΄=>", word);
    }
  };

  const handleFocus = async (e) => {
    setPhrase(e.target.value);
  };

  return (
    <div>
      <TextArea
        id="box"
        ref={inputText}
        value={sentence}
        readOnly
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        // onDoubleClick={handleDoubleClick}
      />
    </div>
  );
}

const TextArea = styled.textarea`
  font-size: 16px;
  box-sizing: border-box;
  width: 800px;
  height: 30px;
  // border: none;
  font-family: "Noto Sans KR";
  resize: none;

  // :focus {
  //   outline: none;
  // }
`;
