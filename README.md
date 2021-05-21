# RN2021
## 201930429 장이빈
React Native 2021


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