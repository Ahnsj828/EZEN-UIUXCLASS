const div = document.getElementById('my_div');
const clearbtn = document.getElementById('clearbtn');
const result = document.getElementById('result');

div.addEventListener('click', (event) => {
  result.innerHTML+= '<div>click</div>';
});

div.addEventListener('mousedown', (event) => {
  result.innerHTML+= '<div>mousedown</div>';
});

div.addEventListener('mouseup', (event) => {
  result.innerHTML+= '<div>mouseup</div>';
});

clearbtn.addEventListener('click', (event) => {
  result.innerHTML= '';
});