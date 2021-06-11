# RN2021
## 201930429 장이빈
React Native 2021

## 06월 04일
> Redux
# 1. Redux란
- "JavaScript 앱을 위한 예측 가능한 state 컨테이너"로 정의한다.

# React Redux의 특징
- 앱에 단 하나밖에 없는 전역 상태의 객체이다.
- 전역 state 객체는 React Native 컴포넌트에서 props로 전달된다.
- Redux state의 데이터가 변경되면, 변경된 새 데이터가 전체 앱에 props로 전달된다.
- 앱의 state를 모두 store라는 곳으로 이동시켜 데이터 관리를 편리하게 한다.
- React의 context라는 기능을 이용해서 동작한다.
- 여기서 context는 전역 state를 만들고 관리하는 메커니즘이다.

## 05월 28일
> 네비게이션

# 1. 네비게이션의 개요
- 네비게이션에 관한 기본적인 설명 및 종류에 대한 내용은 하단의 5월 21일 readme.md의 '네비게이션 사용하기'를 참고
- React Native에서는 네비게이션 라이브러리를 지원하지 않기 때문에 third party 네비게이션 라이브러리를 사용해야 한다.
- 현재 프로젝트에서 사용하는 React Navigation은 자바스크립트로 구현되어있으며, React Native의 개발진이 추천하는 라이브러리이다.
## 05월 21일
1. git graph 활용하기
- 이전 커밋으로 돌아가고 싶을 때 git의 checkout을 사용하는데, git graph를 사용하여 보는 것이 편리하다.
- git graph는 본인의 커밋이 현재 어디에 있는지를 확인할 수 있다.
- checkout 사용 시 코드를 수정할 경우, **master와 원격 저장소의 코드가 달라 충돌**할 수 있으므로 되도록이면 수정하지 않는 것이 좋다.

2. Text 컴포넌트 VS View 컴포넌트
- flex 속성을 제외하고는 View에서 사용되는 대부분의 스타일을 Text에서도 사용할 수 있다.
- 반대로 Text에서 사용하는 스타일을 View에서는 사용할 수 없다.

3. font family 지정하기
- css와는 다르게 fontFamily 속성에 여러개의 폰트를 지정할 수 없다.
- iOS에서는 monospace 옵션을 사용할 수 없으며, 사용할 경우 아래와 같은 오류가 발생한다.

> 고급 스타일링 소개
1. 플랫폼별 크기 및 스타일
- 디스플레이의 물리적 속성에는 화면 크기, 해상도 등이 있다.
- 플랫폼별 크기 단위에는 Pixels, points, DPs가 있다.
2. ShadowPropTypesIOS 및 Elevation으로 그림자 만들기
- iOS에서는 ShadowPropTypesIOS 스타일을 사용하여 그림자를 추가 할 수 있고, Android에서는 Elevation을 사용하여 그림자를 만들 수 있다.
- 그림자를 넣을 때는 Platform.select를 사용한다.

- 앱의 핵심 기능 중 하나로, 네비게이션의 종류에는 3가지가 있다.
- React Native에는 네비게이션 라이브러리가 포함되어 있지 않다.
- 따라서 React Native에서 네비게이션을 사용할 때는 개발자들이 개발하고 관리하는 오픈소스 라이브러리인 Wix를 이용한다.


## 05월 14일
> 스타일링 소개 2
1. border 속성 지정하기
- border 속성은 크게 4가지가 있다.
```
※ 테두리 속성 4가지
- borderColor
- borderRadius
- borderStyle
- borderWidth 
→ 각 속성별 특징 및 예제는 하단의 5월 7일 readme.md 내용 참조
```
- 이 중 borderColor,borderStyle,borderWidth 속성은 속성에 방향을 추가하여 세부적인 속성을 만든다.
- 방향은 top부터 시계 방향으로 right, bottom, left순으로 지정한다.

2. borderRadius를 이용해서 모양 만들기
- borderRadius 속성은 사각형의 모서리에 대한 속성으로 방향이 top부터 시계 방향인 right, bottom, left순으로 지정된다.
- 속성 사용시에는 borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius, borderTopLeftRadius로 지정한다.
- 아래와 같이 borderRadius 속성으로 한번에 지정할 수도 있다. 
```jsx
borderRadius: [TopRight], [BottomRight], [BottomLeft], [TopLeft]
```
- Text 컴포넌트의 bounding box가 원과 겹치는 문제의 경우,  centeredText 스타일에 backgroundColor를 transparent로 지정하면 해결이 가능하다.

3. 이미지 컴포넌트 사용하기
- 이미지를 사용하기 위해서는 Image 컴포넌트를 추가로 import한다.
```jsx
import { Image, StyleSheet, View} from 'react-native'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.cardImage} 
          source={require('./user.png')} />
      </View>
    )
  }
}
```

4. 컴포넌트의 위치를 margin과 padding으로 지정하기
- 명시적으로 지정할 수도 있지만, 반응형에는 적합하지 않다.
- 각 컴포넌트의 위치는 다른 컴포넌트의 위치에 상대적으로 지정하는 것이 바람직하다.
- margin, padding, border, component 영역의 상호연관성은 아래 그림과 같다.

<img width="193" alt="img" src="https://user-images.githubusercontent.com/62285642/118591133-a394e900-b7de-11eb-9932-99b96e5eed18.png">

- margin 속성 이용하기
```
※ margin 속성 특징
- margin을 이용해서 컴포넌트 사이의 상대적 위치를 정의한다.
- margin 속성에는 margin, marginTop, marginRight, marginBottom, marginLeft가 있다.
- 이전에는 iOS와 Android의 스타일에 차이가 있었으나 현재는 동일하게 구현이 가능하다.
```

- padding 속성 이용하기
```
※ padding 속성 특징
- padding을 이용해서 컴포넌트 테두리로부터 컴포넌트의 상대적 위치를 정의한다.
- padding 속성에는 padding, paddingLeft, paddingRight, paddingTop, paddingBottom 속성이 있다.
- 컴포넌트와 부모 컴포넌트 사이의 공간을 지정하는 margin과 달리, padding은 컴포넌트의 테두리로부터 자식 엘리먼트에 적용된다.
```

5. position을 이용해 컴포넌트 배치하기
- 구현은 css와 유사하지만, css만큼 다양한 옵션을 지원하지 않는다.
- 모든 요소는 다른 요소들에 상대적으로 배치된다.
- position이 absolute로 지정되면, 해당 요소의 위치는 부모 요소의 위치를 기준으로 배치된다.
- position 속성에는 relative(상대값:기본값)과 absolute(절대값)가 있다.
- css의 static, fixed는 지원하지 않는다.

6. App.js의 기본 포맷
- 가끔 알 수 없는 문제로 인해 앱이 제대로 실행되지 않을 경우, 아래의 기본 포맷에 필요한 부분만 복사하여 사용하면 오류가 발생하지 않는다.
- import는 필요에 따라서 추가, 삭제한다.
```jsx
import React, { Component } from 'react' 
import { Text } from 'react-native'

class App extends Component {
  render() {
    return <Text>test</Text>
  }
}

export default App
```

## 05월 07일
#### 중간고사(MidtermApp) 코드 리뷰
- 코드에서 주목해야 할 부분 
1. 구조 분해 할당 없이 변수명 재할당
2. 구조 분해 할당을 이용하는 방법
3. React에서 자주 사용되는 구조 분해 할당

#### 배열 구조 분해
1. 기본 변수 할당
2. 선언에서 분리한 할당
3. 기본값
4. 변수값 교환하기
5. 함수가 반환한 배열 분석
6. 일부 반환값 무시하기
7. 변수의 배열의 나머지를 할당하기

#### 객체 구조 분해
1. 기본 할당
2. 선언 없는 할당
3. border(테두리) 속성 설정하기
※ 테두리 속성별 역할
- borderColor: 모든 테두리의 색상을 설정해준다.
- borderRadius: 모든 테두리 경계의 꼭짓점을 둥글게 만들어준다.
- borderStyle: 모든 테두리의 스타일을 지정해준다.
- borderWidth: 모든 테두리의 너비를 지정해준다. 
 
## 04월 30일
1. React Native에서 스타일 적용하고 관리
- 스타일을 적용하는 방법은 3가지가 있음
- 중복된 property가 있을 때는 마지막으로 전달된 스타일이 이전 스타일을 재정의

2. 스타일 구성
- React Native에서는 컴포넌트 단위로 스타일이 적용됨
- 스타일의 적용 방법은 2가지가 있음

3. 스타일시트 분리하기

## 04월 16일
1. TabBar 컴포넌트 만들기
- TabBar 컴포넌트는 setType과 type을 props

2. TabBarItem 컴포넌트 만들기 

3. TabBar 컴포넌트 구현하기
- state에서 type을 구조분해할당하고, 이것을 TabBar와 TodoList 컴포넌트에 전달
- todo들을 필터링할 때 이 type 변수를 사용

## 04월 09일
7. 초기 state의 설정
- 초기화 설정은 render() 함수 위에 하면 됨
- inputValue는 TextInput의 현재 상태를 저장

## 04월 02일
1. 구조분해할당
- 같은 코드가 반복되면 DRY(Don’t Repeat Yourself)원칙에 위배되므로 이를 피하기 위해 사용하는 방법
- 이는 코드가 복잡해져도 코드의 가독성을 좋게 할 수 있음

2. 배열과 개체를 props로 전달
- 다른 데이터 타입에서도 props의 처리는 동일하게 작동함

> React 컴포넌트 스펙
- 컴포넌트를 만들 때 몇가지 스펙과 생명주기를 연결해서, 컴포넌트가 수행하는 동작을 제어할 수 있음
- 컴포넌트의 스펙은 기본적으로 컴포넌트의 생명주기동안 일어나는 여러 상황에 대해 컴포넌트가 대응하는 방식을 제공함

> React 생명주기 메서드
- 다양한 메서드들이 컴포넌트 생명주기동안 특정 시점에 실행되는데 이를 생명주기 메서드라고함
- 생명주기는 생성(Mount), 갱신, 파기(Unmount)의 세가지로 나뉨

## 03월 26일
> state를 사용
- state는 컴포넌트가 생성될 때 선언됨
- setState함수 호출을 통해 컴포넌트 내에서 갱신할 수 있음

1. 컴포넌트의 상태 조작
- state는 컴포넌트가 다루는 값들의 집합체
- 부모 컴포넌트의 state를 props로 받아서 사용하게 되면,부모 컴포넌트의 state가 변경될 때 자식 컴포넌트도 다시 렌더링됨
- 컴포넌트의 state는 컴포넌트로 하여금 동적이면서, 인터렉티브하게 해줌

2. state 갱신하기
- state를 갱신하려면 반드시 setState()메소드를 이용해야함
- state는 this.setState()함수의 호출을 통해서 갱신됨


> props 사용
- 컴포넌트가 생성될 때 매개변수로 props가 전달됨
- state와는 다르게 props는 컴포넌트 내에서 갱신되지 않음
- props는 부모 컴포넌트로부터 전달된 속성값이거나, 컴포넌트가 상속받은 값