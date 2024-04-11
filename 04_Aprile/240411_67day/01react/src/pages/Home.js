import Editor from "../component/Editor";

const Home = () => {
  return (
    <div>
      {/* <Editor /> */}
      <Editor
        initData={{
          // 원래 props형태로 객체로 보냈다
          // 이 props 객체 안에 들어가야하는 요소가 객체라서 객체를 두번쓴거다 {{}}
          date: new Date().getTime(),
          emotion: 1,
          content: "이전에 작성한 일기",
        }}
        onSubmit={() => {
          alert("작성완료 버튼을 클릭했음");
        }}
      />
    </div>
  );
};

export default Home;
