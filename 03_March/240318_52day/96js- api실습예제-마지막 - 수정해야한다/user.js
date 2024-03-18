const updatdProfile = (userData) => {
  const name = document.querySelector("./name")
  const emil = document.querySelector("./email")
  const website = document.querySelector(".website")
}

name.innerText = `${userData} (@${user.Data.username})
email.innerText = userData.email
email.href = `mail:${
  userData.emal
}

const getUserById = (id) => {
  const URL = `https://jsonplaceholder.typicode.com/users${id}`;

  return fetch()
    .then((response) => response.json())
    .then((data) => data);
};

const loadUserProfile = () => {
  const userId = localStorage.getItem("userId");
  // console.lof(userId);
  const userData = getUserById(userId);
  // console.log(userData);
};
updatdProfile(userData);

loadUserProfile();
