# 만두집 Kiosk 페이지 

- 기간 : 2024.01 ~ 2024.02
- 배포 URL : https://kiosk-beryl.vercel.app/
- Test ID :  1, 2, 3

<br /><br />

## 💁‍♂️ 프로젝트 소개 

- Kiosk 페이지는 과거에 1인 사업을 운영당시, 키오스크 시스템이 업무 효율성을 높일 수 있다는 생각에서 시작되었습니다. 
- 매장에 따로 키오스크를 기계를 설치하지 않고 태블릿 PC 등에 앱을 설치해서 사용할 수 있는 키오스크라는 컨셉으로 만들었습니다. 
- 주문을 접수 하고 키오스크를 관리할 수 있는 관리 페이지도 함께 개발했습니다.

[관리페이지 Github](https://github.com/aksen123/admin)

  
<br /><br />


## 💻 개발 환경
- Front : NextJS, ,Typescript, Tailwind CSS, Recoil
- Back-end : NextJS API Routes Server
- DB : FireStore
- 버전 및 이슈관리 : Github, Github Issues
- 배포 환경 : Vercel


<br /><br />

## 🧑‍💻 사용 기술과 브랜치 전략

### Next.js
 -  파일 기반 라우팅, API Routes 등 편리한 기능을 사용하여 개발 생산성을 높일 수 있다는점과  특히 API Routes 기능을 통해 API를 쉽게 작성하고 관리할 수 있어 선택했습니다.

### Typescript
 - 코드에서 잠재적인 오류를 미리 발견 할 수 있고 

### TailwindCSS 
- CSS를 직접 작성하지 않고도  `text-center`나 `bg-blue-500` 같은 미리 정의된 클래스를 사용하여 빠르게 스타일을 적용해 생산성을 향상 시킬 수있어 선택했습니다.

### Recoil 
- React와 호환성이 좋고, 기존 useState 훅을 사용하는 방식과 유사하다는 점과, Redux보다 사용법이 간단하다는 점에서 선택했습니다. 

### Firebase 
- Firestore와 Cloud Storage를 사용해 실시간 데이터베이스 통해 데이터를 저장, 동기화 하고 사용자가 올린 이미지 파일을 저장하기 위해 선택 했습니다.  


### 브랜치 전략
- 기능별 Github Issue를 생성한뒤 생성된 Issue 번호로 브랜치를 만들고, 해당 브랜치의 작업이 끝나면 PR을 올려 Main 브랜치에 merge 하는 방식으로 개발 했습니다.

<br /><br />

## 🗂️ 프로젝트 구조
<details>
  
```
📦src
 ┣ 📂app
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📂food
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂foods
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂payment
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┗ 📂store
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂atoms
 ┃ ┃ ┣ 📜cart-atom.ts
 ┃ ┃ ┣ 📜modal-atom.ts
 ┃ ┃ ┗ 📜payment-atom.ts
 ┃ ┣ 📂Components
 ┃ ┃ ┣ 📜Cart.tsx
 ┃ ┃ ┣ 📜Detail.tsx
 ┃ ┃ ┣ 📜GlobalComponent.tsx
 ┃ ┃ ┣ 📜List.tsx
 ┃ ┃ ┣ 📜Loading.tsx
 ┃ ┃ ┗ 📜SoldOut.tsx
 ┃ ┣ 📂kiosk
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂modal
 ┃ ┃ ┣ 📜Alert.tsx
 ┃ ┃ ┣ 📜Confirm.tsx
 ┃ ┃ ┣ 📜Modal.tsx
 ┃ ┃ ┣ 📜OrderType.tsx
 ┃ ┃ ┗ 📜Warning.tsx
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┣ 📜page.tsx
 ┃ ┗ 📜RecoilWrapper.tsx
 ┣ 📂service
 ┃ ┣ 📜axios.ts
 ┃ ┣ 📜firebase.ts
 ┃ ┣ 📜foodApi.ts
 ┃ ┣ 📜store.ts
 ┃ ┗ 📜util.ts
 ┗ 📂types
 ┃ ┣ 📜serivce.ts
 ┃ ┗ 📜types.d.ts
```
</details>



<br /><br />

## 💡 주요 기능 

- 지점 코드별 메뉴 
- 장바구니 기능
- 메뉴 주문 기능

<br /><br />

## 📒 페이지 별 기능 

### 초기화면

- 초기 화면은 지점 코드를 입력하는 화면입니다. 이곳에 올바른 코드를 입력해야 해당 지점의 메뉴를 불러 옵니다.
- db에 없는 코드를 입력시 메세지를 띄워 줍니다.

|초기 화면|db에 없는 코드 입력시|
|:-----:|:-----:|
|![image](https://github.com/aksen123/kiosk/assets/126546293/6bd4f58a-77a6-425c-9ca3-e2e5d2560c8c)|![image](https://github.com/aksen123/kiosk/assets/126546293/dc1d1ed4-fc51-46c7-bedf-35b5411184e1)|


### 키오스크 페이지

- 해당 코드 지점의 메뉴를 불러옵니다.
- 메뉴 데이터 로딩시 Loading Spinner
- 메뉴 클릭시 detail 모달에서 메뉴 수량 선택 후 주문, 장바구니 추가
- 메뉴 주문시 매장/포장 선택이 가능 합니다.
- 주문 완료시 주문 번호를 확인할 수 있습니다.


## 👨‍🔧 개선해야 할 점 / 기능 고도화

- 주문시 포장 안되는 메뉴(ex 라면 등) 포장 클릭안되게 or 매장/포장 선택 창 안뜨게
- 메뉴 카테고리 (주메뉴, 음료 등)
- 지점 코드 입력시 로그인 작동 상태 표시
- 지점 코드 입력시 비밀번호 입력 추가하기
