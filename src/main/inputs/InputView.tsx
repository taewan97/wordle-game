import { useState } from "react";

type Props = {
  word: string[] | undefined;
  answer: string;
};

export const InputView = ({ word, answer }: Props) => {
  //console.log("size = " + word?.length);
  let color: string = "N";
  //const answer = ["ㄱ", "ㅣ", "ㅁ", "ㅌ", "ㅐ"];

  const view = (text: string, index: number) => {
    //console.log("text = " + text + " index = " + index);
    if (word?.length === 6) {
      for (let i = 0; i < 5; i++) {
        if (answer[i] === text) {
          if (i === index) {
            color = "S";
            break;
          } else {
            color = "B";
            break;
          }
        } else if (i === 4) {
          color = "O";
        }
      }
    }
    if (text === "0") {
      return;
    }
    return (
      <div className="box">
        <div className={`box_${color}`}>{text}</div>
      </div>
    );
  };

  return (
    <div className="row">{word?.map((text, index) => view(text, index))}</div>
  );
};
