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
    // 가장 첫번째 연결리스트 노드 (*초기화)
    this.head = null;
    // 연결리스트안에 연결되어있는 노드 총 개수 (*초기화)
    this.count = 0;
  }

  // 1) 연결리스트의 모든 데이터를 출력기능
  //   > printAll( )
  // < 현재까지 생성된 연결리스트 모두 출력 >
  printAll() {
    let currentNode = this.head;
    let text = "[";

    while (currentNode !== null) {
      // 존재만 한다면
      // console.log(currentNode.data);
      console.log(currentNode.data);
      currentNode = currentNode.next;
      // currentNode에 연결해줄거다

      if (currentNode !== null) {
        text += " , ";
        // 복합대입연산자
      }
    }

    text += "]";
    console.log(text);
  }

  // 2) 연결리스트의 모든 데이터를 제거기능
  //   > clear( )
  // < 모든 연결리스트 데이터 제거 기능 >
  clear() {
    this.head = null;
    this.count = 0;
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
      currentNode.next = newNode;
      // 넣으려는 노드 이전의 연결한 노드들 연결한 다음으로 들어가게
    }
    this.count++;
  }

  // 4) 연결리스트 내 인덱스를 삭제 기능
  // > deleteAt( index )
  // < 연결리스트에 있는 노드 아이템의 인덱스값을 삭제하는 기능>
  deleteAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("제거할 수 없는 인덱스 입니다.");
      // 예외조항처리
      // 인덱스가 5개밖에 없는데 7번 인덱스 지워줘 라고 하면안되니까 / 음수인덱스를 지워줘 라고 하면 안되니까
    }

    let currentNode = this.head;

    if (index === 0) {
      let deleteNode = this.head;
      // 제거하고자 하는 노드를 head로 지정
      this.head = this.head.next;
      // 원래 head였었던애가 지워지고 그다음애가 head로 지정
      this.count--;

      return deleteNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
        // 첫번째 요소 다음에는 그다음요소가 오고.. 이렇게 반복
      }
      let deleteNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      // 4번 노드를 삭제하면 3번 노드 다음에 5번 노드가 오게
      this.count--;
      return deleteNode;
    }
  }

  // 5) 연결리스트 내 익덱스를 읽는 기능
  //   > getNodeAt( index )
  // < 연결리스트 안에 있는 인덱스 값을 읽어오는 기능 >
  getNodeAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("존재하지 않는 인덱스입니다.");
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
      // 각각의 요소들이 next, next 해서 연결하게
    }

    return currentNode;
  }

  // 6) 연결리스트 내 익덱스를 마지막에 삽입하는 기능
  //   > insertLast( index )
  // < 연결리스트 마지막 인덱스에 값을 추가하는 기능>
  insertLast(data) {
    // 아이템의 갯수 = 가장 마지막 인덱스
    this.insertAt(this.count, data);
  }

  // 7) 연결리스트 내 익덱스를 마지막에서 삭제하는 기능
  //   > deleteLast( index )
  // < 연결리스트 마지막 인덱스에 값을 제거하는 기능>
  deleteLast() {
    // 마지막만 찾아서 값을 없애기만 하면된다
    return this.deleteAt(this.count - 1);
  }
}

export { Node, LinkedList };
