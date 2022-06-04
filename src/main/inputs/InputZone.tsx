import { useState, useRef, ChangeEvent, useEffect, KeyboardEvent } from "react";
import { InputView } from "./InputView";

type Props = {
  answer: string;
};

let turn = 1;
const wordMap = new Map<number, string[]>([]);
export const InputZone = ({ answer }: Props) => {
  //console.log("+++++++++++++++++++++++++++++++++++++++++++++++");

  const [word, setWord] = useState<string[]>([]);
  const testInput = useRef<HTMLInputElement>(null);

  const regex = /^[ㄱ-ㅎ | ㅏ-ㅣ]/;

  useEffect(() => {
    if (testInput.current !== null) {
      testInput.current.focus();
    }
  });

  const keyBoardEvent = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      word.pop();
      wordMap.set(turn, [...word]);
      setWord([...word]);
    } else if (e.key === "Enter" && word.length === 5) {
      console.log("enter입력");
      word.push("0");
      wordMap.set(turn, [...word]);
      setWord([...word]);
      turn++;
      setWord([]);
      // 정답을 뽑는다
      //뽑힌 정답을 가지고 현재 값이랑 비교.
      //완전 같으면 초록, 위치만 같으면 주황, 같은게 없으면 회색
    } else {
      if (word.length < 5 && regex.test(e.key) === true) {
        word.push(e.key);
        wordMap.set(turn, [...word]);
        console.log(turn + " == " + wordMap.get(turn));
        setWord([...word]);
      }
    }
  };

  const click = (button_word: string) => () => {
    if (button_word === "Enter") {
      if (word.length === 5) {
        word.push("0");
        wordMap.set(turn, [...word]);
        setWord([...word]);
        turn++;
        setWord([]);
      } else {
        testInput.current?.focus();
      }
    } else if (button_word === "Delete") {
      word.pop();
      wordMap.set(turn, [...word]);
      setWord([...word]);
    } else {
      if (button_word !== "Enter" && word.length < 5) {
        word.push(button_word);
        wordMap.set(turn, [...word]);
        setWord([...word]);
      }
    }
  };

  // console.log("word = " + word);
  // console.log("1 = " + wordMap.get(1));
  // console.log("2 = " + wordMap.get(2));
  // console.log("3 = " + wordMap.get(3));
  // console.log("4 = " + wordMap.get(4));
  // console.log("5 = " + wordMap.get(5));

  return (
    <div>
      <div className="App">
        <div className="col">
          <InputView word={wordMap.get(1)} answer={answer} />
          <InputView word={wordMap.get(2)} answer={answer} />
          <InputView word={wordMap.get(3)} answer={answer} />
          <InputView word={wordMap.get(4)} answer={answer} />
          <InputView word={wordMap.get(5)} answer={answer} />
        </div>

        <input
          className="test_input"
          ref={testInput}
          onKeyUp={keyBoardEvent}
          type="text"
        />
      </div>
      <div className="Keyboard">
        <div>
          <div>
            <button className="button" onClick={click("ㅂ")}>
              ㅂ
            </button>
            <button className="button" onClick={click("ㅈ")}>
              ㅈ
            </button>
            <button className="button" onClick={click("ㄷ")}>
              ㄷ
            </button>
            <button className="button" onClick={click("ㄱ")}>
              ㄱ
            </button>
            <button className="button" onClick={click("ㅅ")}>
              ㅅ
            </button>
            <button className="button" onClick={click("ㅛ")}>
              ㅛ
            </button>
            <button className="button" onClick={click("ㅕ")}>
              ㅕ
            </button>
            <button className="button" onClick={click("ㅑ")}>
              ㅑ
            </button>
            <button className="button" onClick={click("ㅐ")}>
              ㅐ
            </button>
            <button className="button" onClick={click("ㅔ")}>
              ㅔ
            </button>
          </div>
          <div>
            <button className="button" onClick={click("ㅁ")}>
              ㅁ
            </button>
            <button className="button" onClick={click("ㄴ")}>
              ㄴ
            </button>
            <button className="button" onClick={click("ㅇ")}>
              ㅇ
            </button>
            <button className="button" onClick={click("ㄹ")}>
              ㄹ
            </button>
            <button className="button" onClick={click("ㅎ")}>
              ㅎ
            </button>
            <button className="button" onClick={click("ㅗ")}>
              ㅗ
            </button>
            <button className="button" onClick={click("ㅓ")}>
              ㅓ
            </button>
            <button className="button" onClick={click("ㅏ")}>
              ㅏ
            </button>
            <button className="button" onClick={click("ㅣ")}>
              ㅣ
            </button>
          </div>
          <div>
            <button className="enter_delete" onClick={click("Enter")}>
              Enter
            </button>
            <button className="button" onClick={click("ㅋ")}>
              ㅋ
            </button>
            <button className="button" onClick={click("ㅌ")}>
              ㅌ
            </button>
            <button className="button" onClick={click("ㅊ")}>
              ㅊ
            </button>
            <button className="button" onClick={click("ㅍ")}>
              ㅍ
            </button>
            <button className="button" onClick={click("ㅠ")}>
              ㅠ
            </button>
            <button className="button" onClick={click("ㅜ")}>
              ㅜ
            </button>
            <button className="button" onClick={click("ㅡ")}>
              ㅡ
            </button>
            <button className="enter_delete" onClick={click("Delete")}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
