// jQuery 구현

// $(".stars .fas").click(function () {
//   // $()선택자 .stars .fas자손선택자 star fas를 데려와라
//   $(this).addClass("active");
//   $(this).prevAll().addClass("active");
//   $(this).nextAll().removeClass("active");
//   // 선택 된 부분까지만 별주고 뒷부분없이

//   const num = $(this).index();
//   // const변수를 선택하는 키워드 num순번
//   const starRate = num + 1;
//   // +1하는 이유=> 컴퓨터는 0부터 시작이다
//   $(".print").text(starRate);

//   if (starRate == 1) {
//     // if (starRate == 1)만약에 1점준다면
//   } else if (starRate === 2) {
//     $(".print").html("보통이에요!" + '<img src="./images/star-lv2.png"/>');
//   } else if (starRate === 3) {
//     $(".print").html("그냥그래요!" + '<img src="./images/star-lv3.png"/>');
//   } else if (starRate === 4) {
//     $(".print").html("맘에들어요!" + '<img src="./images/star-lv4.png"/>');
//   } else if (starRate === 5) {
//     $(".print").html("아주좋아요!" + '<img src="./images/star-lv5.png"/>');
//   }
// });

// javascript 구현
const stars = document.querySelectorAll(".stars .fas");
const print = document.querySelector(".print");
const imgs = [
  "./images/star-lv1.png",
  "./images/star-lv2.png",
  "./images/star-lv3.png",
  "./images/star-lv4.png",
  "./images/star-lv5.png",
];
// []배열을만든다 어떤짐을 순서에맞춰 넣겠다
// ---변수정의

Element.prototype.previousElementSiblingAll = function () {
  let siblings = [];
  let current = this.previousElementSibling;
  while (current !== null) {
    siblings.push(current);
    current = current.previousElementSibling;
  }
  return siblings;
};

stars.forEach((star) => {
  star.addEventListener("click", function () {
    console.log("click");
    stars.forEach(function (e) {
      e.classList.remove("active");
    });
    this.classList.add("active");

    const preStars = Array.from(this.previousElementSiblingAll());
    preStars.forEach(function (preStar) {
      preStar.classList.add("active");
    });

    const num = Array.from(stars).indexOf(this);
    const starRate = num + 1;
    if (starRate === 1) {
      print.innerHTML = `"별로에요!" <img src=${imgs[0]}>`;
    } else if (starRate === 2) {
      print.innerHTML = `"보통이에요!" <img src=${imgs[1]}>`;
    } else if (starRate === 3) {
      print.innerHTML = `"그냥그래요!" <img src=${imgs[2]}>`;
    } else if (starRate === 4) {
      print.innerHTML = `"맘에들어요!" <img src=${imgs[3]}>`;
    } else if (starRate === 5) {
      print.innerHTML = `"아주좋아요!" <img src=${imgs[4]}>`;
    }
  });
});
// stars 안에 있는 객체 하나씩 꺼내서
