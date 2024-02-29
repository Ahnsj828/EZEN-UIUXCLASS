window.onload = () => {
  // const bgArr = ["bg-1", "bg-2", "bg-3", "bg-4", "bg-5"];
  // const randomNum = Math.ceil(Math.random() * 5);
  // // ceil 무조건 1부터 5
  const randomNum = Math.ceil(Math.random() * bgCount);
  document.body.style.backgroundImage = `url(./images/bg-${randomNum}.jpg)`;
};
