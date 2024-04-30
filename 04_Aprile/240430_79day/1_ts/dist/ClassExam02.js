// 상속 : 부모요소로부터 어떠한 값을 받을 수 있다는 전제를 설정하는 것이지, 반드시 상속받은 값을 구현해야할 의무는 없다
class Character {
    name;
    moveSpeed;
    extra;
    // implements 받기로 한 CharaterInterface 를 똑같이 적어줘야한다
    constructor(name, moveSpeed, extra) {
        this.name = name;
        this.moveSpeed = moveSpeed;
        this.extra = extra;
    }
    move() {
        console.log(`${this.moveSpeed} 속도로 이동!`);
    }
}
const CharacterA = new Character("짱구", 50, "test");
// console.log(CharacterA);
CharacterA.move();
export {};
//# sourceMappingURL=ClassExam02.js.map