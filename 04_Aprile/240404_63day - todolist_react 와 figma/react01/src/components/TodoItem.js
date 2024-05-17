import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, createDate, onUpdate }) => {
  //   console.log(props);
  //   console.log(id, isDone, content, createDate);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDelete = () => {
    onClickDelete(id);
  };

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">{new Date(createDate).toLocaleDateString}</div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};
export default TodoItem;
{
  /* <div className="date_col">{new Date().toLocaleDateString()}</div> */
}
// new Date().toLocaleDateString() 현재 날짜 정보를 알고싶을때 / toLocaleDateString()년 월 일
