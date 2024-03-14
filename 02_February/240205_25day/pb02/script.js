const btns = document.querySelectorAll(".btn li");
// console.log(btns); 하고 ctrl shift J 해서 확인해보기
// 버튼을 잡을거다
const contents = document.querySelectorAll(".tabs div");
// querySelectorAll 다섯개라 all
btns.forEach((btn) => {
  btn.addEventListener("clixk", function () {
    function siblings(e) {
      const children = e.parentElement.children;
      for (let i = 0; i < children.length; i++) {
        children[i].clssList.remove("active");
      }
    }
    siblings(this);
    this.clssList.add("active");

    contents.forEach(function (content) {
      content.clssList.remove("active");
    });
    const targetContectId = this.getAttribute("data-alt");
    const targetContent = document.querySelector('#${targetContectId}')
    id (targetContent) {
      targetContent.classList.add("active")
    }
  });
});
// forEach 반복문
