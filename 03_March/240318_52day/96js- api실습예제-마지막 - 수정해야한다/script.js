const feed = document.querySelector(".feed");
// console.log(feed);
// feed안에 데이터를 넣을거다

const getUserById = (id) => {
  // getUserById id로 식별해서 데이터를 찾아오겠다
  // id에 매칭되는 값을 찾아오겠다
  const URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  // https://jsonplaceholder.typicode.com/users/4 => id가 4인 정보를 가져오는거니까
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data);
  // 밖으로 호출하기 위해서 return씀
  // fetch는 비동기하는 애다
};

const createPost = async (post) => {
  const wrap = document.createElement("div");
  const user = document.createElement("a");
  const article = document.createElement("div");

  wrap.className = "post";
  user.className = "user";
  article.className = "article";

  wrap.id = post.id;
  article.innerText = post.body;

  const userInfo = await getUserById(post.userId);
  // console.log(userInfo);
  // user.innerText = "@username";
  // await는 async에서만쓸 수 있다
  // await 다른애들 기다리라고 하는거다 / 비동기처리방식

  user.innerText = `@${userInfo.username}`;
  user.href = "./user.html";
  // 얘를 클릭하면 user.html로 이동하게 하라

  user.addEventListener("click", () => {
    localStorage.setItem("userId", post.userId);
    // setItem 값을저장한다
  });

  wrap.append(user.article);
  // appendChild는 부모요소와 자식요소 1대1이다
  // append는 매개변수에 들어온 순서대로 자식요소를 만들겠다
  feed.appendChild(wrap);
  // feed의 자식요소로 wrap이 들어와야한다
};

const getAllposts = () => {
  // 전체데이터를 찾아오겠다
  const URL = "https://jsonplaceholder.typicode.com/posts";

  fetch(URL)
    .then((response) => response.json())
    // .then((data) => console.log(data));
    // 배열이 나왔다 => 반복문으로
    .then((data) =>
      data.forEach((post) => {
        createPost(post);
      })
    );
};

if (feed) {
  getAllposts();
  // feed라는 함수가 존재하면 가져와라
}
