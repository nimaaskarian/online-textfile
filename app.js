function saveAsText(el) {
  el.preventDefault();
  let date = new Date()
  let textareaValue = document.querySelector("textarea").value;
  let blob = new Blob([textareaValue], { type: "text/plain;charset=utf-8" });
  const filename = `config_${date.getFullYear()}${date.getMonth()}${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}.txt`;
  let a = document.createElement("a"), url = URL.createObjectURL(blob);
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(function () {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 0);
}
document.querySelector("input").addEventListener("click", saveAsText);
