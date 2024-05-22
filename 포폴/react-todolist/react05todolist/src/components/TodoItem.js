import "./TodoItem.css";

const TodoItem = () => {
  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input type="checkbox" />
      </div>
      <div className="title_col">할 일</div>
      <div className="date_col">{new Date().toLocaleDateString()}</div>
    </div>
  );
};

export default TodoItem;
// {new Date().toLocaleDateString()} 현재 날짜 정보를 알고 싶을때
