# HTML CSS JavaScript STUDY

# 웹 개요와 실습 환경 구축

## 1. 실습 환경 구축
### Visual Studio Code 설치 및 HTML 문서 작성
[link](https://goddaehee.tistory.com/287)

## 2. 인터넷과 웹 소개
### 2.1 개요
- 월드와이드웹(WWW: Wold wide web)은 인터넷에서 연결된 컴퓨터를 통해 사람들이 정보를 공유할 수 있는 정보공간을 말합니다.
- 인터넷은 전 세계를 연결하고 있는 국제 정보통신 망이고 웹은 인터넷에서 작동하는 서비스 입니다. 
  - (ps.라우터, 서버)

## 3. 웹의 동작원리
### 3.1 개요
- 웹은 요청과 응답이라는 간단한 형태로 동작합니다. 
  - **예시:** 치킨집에 주문을 하는 행위
    - 요청: 고객(사용자, 클라이언트)은 치킨집에 전화를 걸어 집 주소와 메뉴를 말합니다.
    - 응답: 치킨집 사장님(서버)은 고객의 요청에 맞게 포장 후 해당 주소로 배달 합니다.

### 3.2 서버, 클라이언트, 웹브라우저
- 컴퓨터 세계에서는 요청하는 쪽을 클라이언트(사용자)라고 부르고 응답하는 쪽을 서버(제공자)라고 부릅니다.
  - **서버:** 웹 서비스를 제공할 수 있게 해주는 것
  - **클라이언트:** 웹 페이지를 제공 받는 주체 
  - **클라이언트 프로그램:** 클라이언트에서 실행되는 프로그램 ( 웹브라우저 ) 
    - (ps. 클라이언트매니저)
# 4. 대표적인 웹 표준 기술 소개

- 구분:
  - HTML5
  - CSS
  - JavaScript
  - jQuery

## 4.1 HTML5

### 4.1.1 개요
- 웹페이지를 구성
- HTML5는 웹 표준 기술을 총칭하며, 작은 의미의 HTML5는 웹 문서의 문법을 의미합니다.

### 4.1.2 사용법
- HTML 문서 상위에 `<!DOCTYPE html>` 선언

### 4.1.3 HTML5 기본 형태
```html
<!DOCTYPE html>
<html>
<head></head>
<body>
    hello world
</body>
</html>
```

### 4.1.4 HTML4.1과 HTML5 차이점

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```
### 4.1.5 주요기능
- 멀티미디어 기능
- 그래픽 기능
- 통신
- 디바이스 접근
- 오프라인 및 저장소
- 시맨틱
- CSS3 스타일 시트
- 웹의 성능 극대화 및 통합

## 4.2 CSS
### 4.2.1 개요
- 웹페이지의 스타일 구성
- CSS는 HTML 문서를 표현하는 방법을 기술하는 언어입니다.
- 단순한 웹 문서에 스타일 시트를 적용하여 사용자 편의성 증대

### 4.2.2 사용법
- 태그에 style 적용
```html
<p style="font-size: 50px; color: green;">hello world</p>
```
- 스타일 태그 사용
```html
<style>
p {
    font-size: 50px;
    color: red;
}
</style>
```
- css 파일 (<link>태그, @import url())
```html
 <link rel="stylesheet" type="text/css" href="./style_helloWorld_01.css">
<style>
    @import url(style_helloWorld_01_01.css);
</style>
```
### 4.1.3 중첩될 경우 적용 순서

1. **상위 객체에 의해 상속된 속성**
    - `helloWorld_04.html`
        ```html
        <!DOCTYPE html>
        <html>
        <head>
            <link rel="stylesheet" type="text/css" href="./style_helloWorld_02.css">
        </head>
        <body>
            <p>hello world</p>
        </body>
        </html>
        ```
    - `style_helloWorld_02.css`
        ```css
        body {
            font-size: 50px;
            color: gray;
        }
        ```

2. **태그 이름으로 지정한 속성**
    - `style_helloWorld_02.css`
        ```css
        p{
            font-size: 50px;
            color: red;
        }
        body {
            font-size: 50px;
            color: gray;
        }
        ```

3. **.class 또는 :추상클래스 로 지정한 속성**
    - `helloWorld_04.html`에서 `p`태그에 `class="p_class"` 추가
        ```html
        <p class="p_class">hello world</p>
        ```
    - `style_helloWorld_02.css`
        ```css
        .p_class {
            font-size: 50px;
            color: blue;
        }
        p {
            font-size: 50px;
            color: red;
        }
        body {
            font-size: 50px;
            color: gray;
        }
        ```

4. **#id 로 지정한 속성**
    - `helloWorld_04.html`에서 `p`태그에 `id="p_id"` 추가
        ```html
        <p id="p_id" class="p_class">hello world</p>
        ```
    - `style_helloWorld_02.css`
        ```css
        #p_id {
            font-size: 50px;
            color: black;
        }
        ```

5. **HTML에서 style을 직접 지정한 속성**
    - `helloWorld_04.html`에서 `p`태그에 `style` 추가
        ```html
        <p id="p_id" class="p_class" style="font-size: 50px; color: orange;">hello world</p>
        ```

6. **속성값 뒤에 `!important`를 붙인 속성**
    - `style_helloWorld_02.css`에서 `p`태그 CSS 부분에 `!important` 추가
        ```css
        p {
            font-size: 50px;
            color: red !important;
        }
        ```

7. **기타**
    - 같은 우선 순위인 경우:
        1. 부모-자식 관계가 많은 경우가 우선
            ```css
            body > p {
                font-size: 50px;
                color: green !important;
            }
            ```
        2. 나중에 선언한 것이 우선
            ```html
            <link rel="stylesheet" type="text/css" href="./style_helloWorld_02.css">
            <link rel="stylesheet" type="text/css" href="./style_helloWorld_03.css">
            ```
            - `style_helloWorld_03.css`
                ```css
                body > p {
                    font-size: 50px;
                    color: yellow !important;
                }
                ```
    ### 4.3 JavaScript

    #### 4.1.1) 개요
    - **웹페이지의 동적 구성**
    - 웹 페이지에서 사용자로부터 특정 이벤트나 입력 값을 받아 동적인 처리를 목적으로 고안된 객체 기반의 스크립트 프로그래밍 언어.
    - 자바스크립트는 객체지향 스크립트 언어로 웹페이지의 동작을 담당한다. 예를 들어 자바스크립트를 이용하면 ‘버튼을 클릭하면 밑에 날짜를 보여줘’라는 식의 명령을 내릴 수 있다.

    #### 4.1.2) 대표적인 사용법
    1. **태그 안에 코드 작성**
    ```html
    <script>
        alert("hello world");
    </script>
    ```
    2. **js 파일을 사용하는 방법**
    ```html
    <script type="text/javascript" src="./js_helloWorld.js"></script>
    ```
###   4.4) jQuery
#### 4.4.1) 개요
- jQuery는 "jQuery 라이브러리"를 지칭하며 모든 웹 브라우저에서    
- 동작하는 클라이언트용 JavaScript 라이브러리입니다.
- JavaScript를 사용하여 수행 된 작업은 적은 양의 코드로 jQuery를 사용할 수 있습니다.

**예)**
- JavaScript 코드: var fn_alert_id = document.getElementById("fn_alert").value;
- jQuery 코드: var fn_alert_id = $("#fn_alert").val(); 가볍고 빠릅니다.
- 응답 성이 뛰어나고 기능이 풍부한 웹 사이트를 구축하는 데 도움이되는 비동기 JavaScript (AJAX)를 지원합니다.

## 02 HTML5 기본 구조와 작성법

### 1) HTML5 페이지 기본 구조

#### 1.1) `<!DOCTYPE html>`
- 웹브라우저에 HTML5 문서임을 알려줍니다. 웹브라우저는 `<!DOCTYPE html>` 표시를 읽고 HTML5에 맞춰 랜더링 합니다.

#### 1.2) `<html lang="ko">`
- `<html>` 태그는 페이지의 루트(기본)요소이며 모든 태그는 html 태그의 내부에 작성 합니다.
- `lang` 속성은 웹브라우저 동작에는 영향을 미치지 않습니다. 
  - 검색엔진이 페이지를 탐색할 때 lang에 표시된 언어를 인식
  - 화면 낭독기가 해당 언어로 웹 문서를 읽어줌
  - 예: "ko" (한국어), "en" (영어), "ru" (러시아), "de" (독일어), "zh" (중국어), "ja" (일본어)

#### 1.3) `<head>`
- `head` 태그는 body 태그에 필요한 스타일 시트와 자바스크립트를 제공합니다.

##### 1.3.1) `<meta>`
- 문자 인코딩 지정
  - 예: `<meta charset="utf-8">` (utf-8은 전세계적인 character 집합)
- 웹 문서 정보 기술
  - 예: 
    ```html
    <meta name="author" content="미래융합교육원">
    <meta name="description" content="The page was designed by 미래융합교육원">
    ```
- 웹 페이지 키워드 지정
  - 예: `<meta name="keywords" content="컴퓨터, 소프트웨어, 스마트폰">`

##### 1.3.2) `<title>`
- 웹브라우저 상단 탭에 표시되는 웹페이지 제목
  - 예: `<title>미래융합교육원</title>`

##### 1.3.3) `<script></script>`
- 웹 페이지에 스크립트 추가 (JavaScript)

##### 1.3.4) `<link>`
- 웹 페이지에 다른 파일 추가 (CSS)

##### 1.3.5) `<style></style>`
- 웹 페이지에 스타일 추가 (CSS)

#### 1.4) `<body>`
- 실제 웹브라우저에 표시될 내용

### 2) HTML5 기본 용어 정리

#### 2.1) 용어 정리

##### 2.1.1) 요소
- 내용을 포함한 태그 전체
  - 예: `<h1 id="title">Hello_HTML</h1>`

##### 2.1.2) 태그
- HTML 문서의 문법적 표시
  - 시작태그: `<h1>`
  - 종료태그: `</h1>`

##### 2.1.3) 속성
- 태그에 추가적인 정보를 부여할 때 사용
  - 사용법:
    - 예: `id="p_tag"` (속성 이름: id, 속성 값: "p_tag")
  - 대표적인 속성:
    - `id`: 페이지에서 해당 id는 유일한 값. CSS/jQuery에서 "#"로 표시
    - `class`: 페이지에서 중복 사용 가능. CSS/jQuery에서 "."로 표시
    - `name`: 서버로 전달되는 이름
    - `value`: 서버로 전달되는 값
