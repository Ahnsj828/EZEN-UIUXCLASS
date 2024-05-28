const dragSpace = document.querySelector(".dragSpace");

const className = "on";

dragSpace.addEventListener("dragover", (event) => {
  event.preventDefault();
  dragSpace.classList.add(className);
});

dragSpace.addEventListener("dragleave", (event) => {
  event.preventDefault();
  dragSpace.classList.remove(className);
});

dragSpace.addEventListener("drop", (event) => {
  event.preventDefault();
  dragSpace.classList.remove(className);

  const transferdFiles = event.dataTransfer.files;

  displayImages(transferdFiles);
});

function displayImages(transferdFiles) {
  const imageFileList = [];

  const fileNum = transferdFiles.length;

  for (let i = 0; i < fileNum; i++) {
    if (transferdFiles[i].type.match("image.*") === false) {
      return;
    }
    imageFileList.push.transferdFiles[i];
  }
  const imgs = document.querySelector(".imgs");

  for (let imageFile of imageFileList) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile);
    fileReader.addEventListener("load", (event) => {
      image.src = event.target.result;

      imgs.insertBefore(image, imgs.firstChild);
    });
  }
}
