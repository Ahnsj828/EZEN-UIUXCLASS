// < 추상클래스 >
// 추상 : 여러개의 사물이나 개념의 공통적인 요소를 추출해서 만들어내는 개념이다
// 사용목적 => 공통적인 속성을 가지고 있는 서로 다른 요소의 객체를 만들어야하는 경우!
// 단, 추상클래스가 되려면 반드시 공통적인 속성 및 매서드가 1개이상 존재해야한다
// = 추상컨셉의 속성 및 매서드가 1개 이상 있어야한다
class Developer {
    drink() {
        console.log("drink");
    }
}
class FrontEndDeveloper extends Developer {
    coding() {
        console.log("develop");
    }
    design() {
        console.log("design");
    }
}
// 추상클래스도 클래스다
// 추상클래스도 일반적인 다른 클래스처럼 인스턴스를 만들어낼 수 있을까?
// 추상클래스도 클래스인것은 맞으나, 일반적인 클래스처럼 인스턴스를 만들어낼 수 는 없다
// const dev01 = new Developer(); // => 추상 클래스의 인스턴스를 만들 수 없습니다.ts(2511)라는 오류가 뜬다
// Developer는 추상클래스다
const dev = new FrontEndDeveloper();
// dev는 인스턴스 객체가 된다
dev.coding();
export {};
// 클래스를 선언할 때, 클래스안에는 속성을 설정하기도 하고 & 매서드를 설정하기도 한다
// 클래스 만드는 이유 => 객체생성
//# sourceMappingURL=Developer.js.map