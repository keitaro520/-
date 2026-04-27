const buttons = document.querySelectorAll("button[data-answer]");
const result = document.getElementById("result");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const isCorrect = button.dataset.answer === "yes";
    result.textContent = isCorrect
      ? "正解！ print() を使います。"
      : "不正解。ヒント: 文字を表示するのは print() です。";
    result.style.color = isCorrect ? "#15803d" : "#b91c1c";
  });
});
