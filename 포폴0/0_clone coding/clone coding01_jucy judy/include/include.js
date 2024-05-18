const headerMain = document.getElementById("header-main")
const menuBtn = document.getElementById("menuBtn")
const headerMenu = document.getElementById("btn-menu")
const closeBtn = document.getElementById("closeBtn")
// console.log(menuBtn, closeBtn)

// function menuOpen() {
//   menuBtn.addEventListener("click" , () =>{
//     console.log("click")
//   })
// }
menuBtn.addEventListener("click" , () =>{
  // console.log("click")
  headerMain.style.display = "none"
  headerMenu.style.display = "block"
})
closeBtn.addEventListener("click" , () =>{
  // console.log("click")
  headerMain.style.display = "block"
  headerMenu.style.display = "none"
})