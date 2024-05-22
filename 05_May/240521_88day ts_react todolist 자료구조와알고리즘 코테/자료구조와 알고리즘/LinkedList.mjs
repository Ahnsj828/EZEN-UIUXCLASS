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

// 3) 연결리스트 내 인덱스를 삽입 기능
// > insertAt( index, data )
class LinkedList {
  constructor() {
    // 가장 첫번째 연결리스트 노드(*초기화)
    this.head = null;
    // 연결리스트안에 연결되어있는 노드 총 개수(*초기화)
    this.count = 0;
  }

  // 1) 연결리스트의 모든 데이터를 출력기능
  //   > printAll( )
  // < 현재까지 생성된 연결리스트 모두 출력 >
  printAll() {
    let currentNode = this.head;

    while (currentNode !== null) {
      // 존재만 한다면
      console.log(currentNode.data);
      currentNode = currentNode.next;
      // currentNode에 연결해줄거다
    }
  }

  // 원하는 위치 = 인덱스에 데이터를 삽입하도록 해주는 추상자료형 함수
  insertAt(index, data) {
    if (index > this.count || index < 0) {
      // 예외조항처리
      // count 노드 총 개수
      // index > this.count  index의 숫자가 인덱스수보다 크거나
      // index < 0 음수이거나
      throw new Error("연결리스트의 범위를 넘어갔습니다.");
    }

    let newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      // 0번째 노드는 1번째로 가고 / 새로가는게 0번째로 가게
    } else {
      let currentNode = this.head;
      // currentNode 기존에 있는 노드들

      for (let i = 0; i < index - 1; i++) {
        // 만약 내가 4번째 인덱스로 들어가려면 그전까지만 찾고 그 다음으로 들어가야되니까
        currentNode = currentNode.next;
        // 기존 node들을 연결해줘야하니까 / 4번째로 들어가려면 0,1,2,3은 연결해줘야하니까
      }
      newNode.next = currentNode.next;
      // 만약 넣는곳 다음에도 node들이 있으면 그 뒤로 붙게
      currentNode = newNode;
      // 넣으려는 노드 이전의 연결한 노드들 연결한 다음으로 들어가게
    }
    this.count++;
  }
}

export { Node, LinkedList };
