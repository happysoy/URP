// Sentence, Phrase, Drag 선택하는 Component 만들기 (Textarea?)
//     - Click - Drag → 구(Phrase) 선택
//     - Double Click → 단어 선택
//     - Triple Click → 문장 선택

//     각 action을 취했을 때 선택한 단어/구/문장이 state에 담겨있도록 하면 될 것 같음

import { useEffect, useState } from "react";
import SentenceList from "./SentenceList";

const text =
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius lorem at diam volutpat, a aliquam sem feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer hendrerit volutpat diam sed gravida. Fusce leo ante, molestie vel consectetur a, semper viverra metus. Etiam facilisis malesuada lectus vel semper. In aliquet molestie accumsan. Phasellus rhoncus auctor rhoncus. Nunc suscipit metus sed libero feugiat, eget condimentum dolor dapibus. Etiam tristique dui vel diam faucibus egestas. Phasellus sit amet lobortis risus. Proin ultricies sem ac elementum pulvinar.` +
  `Praesent sed lectus non justo tempus accumsan.`;

export default function Main() {
  const Tokenizer = require("sentence-tokenizer");
  const tokenizer = new Tokenizer("Chuck");
  const [sentences, setSentences] = useState([]);

  tokenizer.setEntry(text);

  useEffect(() => {
    setSentences(tokenizer.getSentences());
  }, []);

  return (
    <>
      <SentenceList sentences={sentences} />
    </>
  );
}
