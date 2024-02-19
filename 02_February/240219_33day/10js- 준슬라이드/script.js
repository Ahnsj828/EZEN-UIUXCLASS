const imgTag = document.querySelector("img");
let num = 1;

const gallery = (direct) => {
  if (direct) {
    if (num === 9) return;
    num++;
  } else {
    if (num === 1) return;
    num--;
  }

  imgTag.setAttribute("src", `./images/pic_${num}.jpg`);
};
// return 값을 반환하는애
// imgTag.setAttribute => 앞에 붙은애(imgTag)한테 속성을 부여하겠다 / src 속성을 부여하겠다
