// 상속 : 부모요소로부터 어떠한 값을 받을 수 있다는 전제를 설정하는 것이지, 반드시 상속받은 값을 구현해야할 의무는 없다

// 실행 = implements : 부모로부터 받은 값은 반드시 구현해야하는 의무성이 있다!!! =>  받으면 꼭 실행해ㅑㅇ한다

interface CharaterInterface {
  name: string;
  moveSpee: number;
  move(): void;
  // void 반환값이 없는 함수를 선언하고자 하는 정의
}

class Character implements CharaterInterface {
  // implements 받기로 한 CharaterInterface 를 똑같이 적어줘야한다
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}

const CharacterA = new Character("짱구", 50, "test");
// console.log(CharacterA);
CharacterA.move();
