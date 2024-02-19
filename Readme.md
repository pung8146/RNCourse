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

##
