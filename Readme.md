# expo를 이용한 react-native 프로그램 설치

2 / 19 (월)

npx create-expo-app RNCourse

## 안드로이드 설치 에러

// 에러문구 0. › Opening on Android... 0. Failed to resolve the Android SDK path. Default install location not found: /Users/nisoft/Library/Android/sdk. Use ANDROID_HOME to set the Android SDK location. 0. Failed to resolve the Android SDK path. Default install location not found: /Users/nisoft/Library/Android/sdk. Use ANDROID_HOME to set the Android SDKhttps://developer.android.com/studio 0. 방법 1 - 안드로이드 스튜디오 설치

Mac
(64비트)
ANDROID-STUDIO-2023.1.1.28-MAC.DMG
1.2 GB
C19ce237293ae6455bdb1dad6db032852375a7e204c5d7c2252cb8d0234b0f69
Mac
(64비트, ARM)
ANDROID-STUDIO-2023.1.1.28-MAC_ARM.DMG
1.2 GB
1c63fb096b174106d53fa50584943b00e4da569c3f0ef4320c0d8231522cf299
• ARM 이 붙은건 (M1 ,,,) 칩 이후로 사용자일경우 저장 받으시면 됩니다. (Intel 등 위에껄로)
Android Studio 설치 절차
• Android Studio 다운로드:
• Android Studio 공식 웹사이트(https://developer.android.com/studio)로 이동하여 macOS용 Android Studio를 다운로드합니다.
• Android Studio 설치:
• 다운로드한 .dmg 파일을 열고, 드래그 앤 드롭을 사용하여 Android Studio를 Applications 폴더로 이동시킵니다.
• Android Studio 실행 및 설정:
• Applications 폴더에서 Android Studio를 실행합니다.
• 처음 실행하는 경우, Android Studio 설치 마법사가 Android SDK, Android Studio 기본 설정, 필요한 Android SDK 구성요소 등을 설치하도록 안내합니다.
• Android SDK 위치 설정:
• Android Studio에서 Android SDK의 기본 설치 위치는 /Users/your-username/Library/Android/sdk입니다. 이 경로를 기억하거나 필요에 따라 변경할 수 있습니다.
• ANDROID_HOME 환경 변수 설정:
• 터미널을 열고, 다음 명령어를 입력하여 ANDROID_HOME 환경 변수를 설정합니다. 이 환경 변수는 시스템에 Android SDK의 위치를 알려줍니다.bashCopy codeecho 'export ANDROID_HOME=$HOME/Library/Android/sdk' >> ~/.bash_profile echo 'export PATH=$PATH:$ANDROID_HOME/emulator' >> ~/.bash_profile echo 'export PATH=$PATH:$ANDROID_HOME/tools' >> ~/.bash_profile echo 'export PATH=$PATH:$ANDROID_HOME/tools/bin' >> ~/.bash_profile echo 'export PATH=$PATH:$ANDROID_HOME/platform-tools' >> ~/.bash_profile source ~/.bash_profile
• .bash_profile 대신 .zshrc 또는 사용하는 쉘의 설정 파일을 사용할 수 있습니다.
• Android Studio와 함께 adb 사용 확인:
• Android Studio의 설치 과정에서 Android SDK와 함께 adb (Android Debug Bridge) 도구도 설치됩니다. 터미널에서 adb version을 실행하여 adb가 올바르게 설치되었는지 확인할 수 있습니다.
===

## react-native의 핵심코드

> "Core" Components, 핵심 컴포넌트는 React코드 즉 JSX 코드에서 합쳐서 직접 컴포넌트를 만들고 사용자 인터페이스를 구축합니다.

## react-native flex-box

> 기본적으로 react-native는 flex-box를 사용하여 레이아웃을 구성합니다.

## ScrollView

> ScrollView는 스크롤이 가능한 컴포넌트입니다. 하지만 ScrollView는 모든 아이템을 렌더링하기 때문에 아이템이 많을 경우에는 FlatList를 사용하는 것이 좋습니다.

#### 예시코드

```jsx
<ScrollView alwaysBounceVertical={false}>
  {currentGoals.map((goal) => (
    <Text key={goal}>{goal}</Text>
  ))}
</ScrollView>
```

#### alwaysBounceVertical={false}

1.  통통 튀는 효과를 없애줍니다.

## FlatList

> 보이기 전까지 렌더링 하지 않습니다.

#### 예시코드

```jsx
<FlatList
  data={currentGoals}
  renderItem={(itemData) => {
    return (
      <View style={styles.goalItem}>
        <Text>{itemData.item}</Text>
      </View>
    );
  }}
  alwaysBounceVertical={false}
/>
```

### 중요한 프로퍼티

1. data : 렌더링할 데이터
   목록에서 출력한 데이터를 지정하는 역할을 합니다.
2. renderItem : 각 아이템을 렌더링하는 함수
   목록에서 각 아이템을 렌더링하는 함수를 지정하는 역할을 합니다.
   함수는 자동으로 개별 항목을 매개변수로 받습니다.

#### key를 추가하는 주요 방법 2가지

1. 첫 번째 접근 방식은 데이터의 값을 여기 있는 문자열 같은 원시 값에서
   key 프로퍼티를 포함하는 객체로 변환하는 것입니다.
   > 예시코드

```jsx
// 기존코드
function addGoalHandler() {
  setCurrentGoals((currentGoals) => [...currentGoals, enteredText]);
}
// 변경후 코드
function addGoalHandler() {
  setCurrentGoals((currentGoals) => [
    ...currentGoals,
    { key: Math.random().toString(), text: enteredText },
  ]);
}
// 변경후 jsx코드
<FlatList
  data={currentGoals}
  renderItem={(itemData) => {
    return (
      <View style={styles.goalItem}>
        <Text>{itemData.item.text}</Text>
      </View>
    );
  }}
  alwaysBounceVertical={false}
```

> **FlatList 가 자동으로 key 프로퍼티를 찾아서 사용합니다.** 데이터 배열에 있는 원시 값으로도 작동하지만, 데이터 배열의 데이터가 객체일때 더 효율적으로 작동합니다. , ** key ** 만 찾아서 동작합니다.

2. keyExtractor 프로퍼티를 사용하는 방법

   > keyExtractor 프로퍼티는 함수를 값으로 취하고, 이 함수는 각 항목에 대한 고유한 키를 반환합니다. 이 함수는 두 개의 인수를 받습니다. 첫 번째 인수는 항목 자체이고, 두 번째 인수는 항목의 인덱스입니다. 렌더링 되는 목록 항목마다 이 함수를 호출 합니다.

> renderItem 함수도 랜더링되는 모든 목록 항목에 대해 호출되지만, keyExtractor 함수는 목록 항목의 키를 추출하는 데만 사용됩니다.
> 예시코드

```jsx
<FlatList
  data={currentGoals}
  renderItem={(itemData) => {
    return (
      <View style={styles.goalItem}>
        <Text>{itemData.item}</Text>
      </View>
    );
  }}
  keyExtractor={(item, index) => {return item.id}}
  alwaysBounceVertical={false}
```

////////////////////////////

## 컴포넌트 분리 방법

## Pressable

> 예전에는 Touchable... 등 다양한 컴포넌트가 있었지만 Pressable을 사용하는것을 권장합니다.

#### 예시코드

```jsx
// 부모컴포넌트
function deleteGoalHandler() {
  console.log("delete");
}

<FlatList
  data={currentGoals}
  renderItem={(itemData) => {
    return (
      <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} />
    );
  }}
  keyExtractor={(item, index) => {
    return item.id;
  }}
  alwaysBounceVertical={false}
/>;

// 자식컴포넌트
function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}
```
