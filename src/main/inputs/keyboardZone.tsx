import React from "react";

type Props = {};

export const KeyboardZone = ({}: Props) => {
  const click = (word: string) => () => {
    if (word === "Enter") {
    }
    if (word === "Delete") {
    }
  };
  return (
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
  );
};
