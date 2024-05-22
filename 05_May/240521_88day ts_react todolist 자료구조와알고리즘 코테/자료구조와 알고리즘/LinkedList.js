// 연결리스트를 만들 곳
// 값을 입력하는 곳

class Node {
  // 클래스 가지고 만들때 => 필드와 생성자 함수(constructor)를 썼었다
  constructor(data, next = null) {
    // next는 옵셔널한거라
    this.data = data;
    this.next = next;
    // next값이 있으면 넣고 없으면 null값 넣어라
  }
}

export { Node };
