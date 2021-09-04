# 고양이 사진첩

## 경로탐색

디렉토리 클릭:

- [x] 해당 디렉토리 하위에 속한 디렉토리 / 파일들을 불러와 렌더링
- [x] 디렉토리 이동에 따라 Breadcrumb 영역도 탐색한 디렉토리 순서에 맞게 업데이트

맨 왼쪽 화살표 클릭:

- [x] 이전 디렉토리로 돌아감

파일 클릭:

- [x] 해당 파일의 filePath 값을 이용해 이미지를 보여줌
- [x] esc, [x]사진 영역 밖 클릭: 이미지를 닫기

## 유의사항

- 각 화면의 UI요소는 가급적 컴포넌트 형태로 추상화 하여 동작
- 의존성이 느슨한 구조로 작성한 경우
- 오류가 발생한 경우를 체크
- 오류가 발생했음을 사용자에게 인지
- fetch 함수를 사용
- API를 처리하는 코드를 별도의 코드로 분리

## 필수 구현사항

`Breadcrumb`

- [x] 현재 탐색 중인 경로 보여주기

```js
<nav class="Breadcrumb">
  <div>root</div>
  <div>노란고양이</div>
</nav>
```

`Nodes`

- [x] 현재 탐색 중인 경로에 속한 파일 / 디렉토리를 렌더링.
- [x] 렌더링 된 Node 클릭 시 node의 type에 따라 변화

- [x]`DIRECTORY`: 해당 디렉토리에 속한 파일 / 디렉토리를 불러와 아래의 형태로 렌더링합니다.

```js
<div class="Node">
  <img src="./assets/directory.png">
  <div>2021/04</div>
</div>
```

- [x]`FILE`: Node의 filePath값을 이용해 이미지를 불러와 화면에 렌더링합니다.

```js
<div class="Node">
  <img src="./assets/file.png">
  <div>하품하는 사진</div>
</div>
```

- [x]`이전 디렉토리 버튼`: root 경로가 아닌 경우, Nodes 목록 맨 왼쪽에 이전 디렉토리로 이동할 수 있는 기능을 구현해야 합니다.

```js
<div class="Node">
  <img src="./assets/prev.png">
</div>
```

[x]`ImageView` - 파일을 클릭한 경우 Modal을 하나 띄우고 해당 Modal에서 파일의 이미지를 렌더링합니다.

```js
<div class="ImageViewer">
  <div class="content">
    <img src="https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public/images/a2i.jpg">
  </div>
</div>
```


## 옵션 구현사항

- [x] Breadcrumb에 렌더링 된 경로 목록의 특정 아이템을 클릭하면, 해당 경로로 이동하도록 처리합니다. 
- [x] ESC키를 눌렀을 때와 [x]이미지 밖을 클릭했을 때
- [x] 데이터가 로딩 중인 경우는 로딩 중임을 알리는 UI적 처리
- [x] 로딩 중에는 디렉토리 이동이나 파일 클릭 등 액션이 일어나는 것을 막아야 합니다.
- [x] 한번 로딩된 데이터는 메모리에 캐시하고 이미 탐색한 경로를 
- [x] 다시 탐색할 경우 http 요청을 하지 말고 캐시된 데이터를 불러와 렌더링하도록 합니다.

- 두 개의 API를 사용합니다.

- [x] root 내용 가져오기
`https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev`
method: GET

- [x] 특정 디렉토리에 속하는 파일 / 디렉토리 불러오기
`https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev/:nodeId`
method: GET
nodeId 하위에 있는 파일 / 디렉토리 목록을 불러옵니다.

두 API에서 사용하는 데이터의 형태는 모두 아래의 형태를 띕니다.

{
  "id":       string // 문자열로 된 Node의 고유값입니다.
  "name":     string // 디렉토리 혹은 파일의 이름입니다. 화면에 표시할 때 사용합니다.
  "type":     string // 파일인지 디렉토리인지 여부입니다. 파일인 경우 FILE, 디렉토리인 경우 DIRECTORY 입니다.
  "filePath": string // 파일인 경우에 존재하는 값입니다. 해당 파일 이미지를 불러오기 위한 경로가 들어있습니다.
  "parent":   object | null {
    "id": string // 해당 Node가 어디에 속하는지 나타내는 값입니다. parent가 null이면 root에 존재하는 파일 / 디렉토리입니다.
  }
}

이미지 불러오기
Node의 filePath 값을 아래의 값과 조합하여, 이미지를 불러올 수 있는 주소를 만들 수 있습니다.
filePath 맨 앞에 /가 포함될 수도 있으므로, 아래의 값과 잘 조합하여 이미지를 불러오도록 합니다.
`https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public/${node.filePath}`
