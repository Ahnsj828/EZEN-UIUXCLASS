const Header = () => {
  const handleOnClick = () => {
    alert("버튼을 클릭하셨군요! :)");
  };
  return (
    <div>
      <h1>header</h1>
      <button onClick={handleOnClick}>클릭해봐😆</button>
    </div>
  );
};

export default Header;

/* <button onClick={handleOnClick}>클릭해봐😆</button>
button 클릭한다면 handleOnClick함수를 실행시켜줘 */
