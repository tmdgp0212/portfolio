export const copyText = (name, text) => {
  window.navigator.clipboard.writeText(text).then(() => {
    alert(name + " 이(가) 복사되었습니다");
  });
};
