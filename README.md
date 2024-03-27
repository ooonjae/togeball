

# ⚾️ Togeball - 야구 직관 메이트 매칭 플랫폼

<!-- <img src="/uploads/6dcb2dbf8e1efed220d0c5e307b3e6ba/togeball_logo1.png" width="500" height="300"> -->
<img src=https://github.com/ooonjae/togeball/assets/87305425/30ed636b-10c1-4f16-9137-9eaf6d4eda55 width="400" height="200"/>


## 목차
- 팀소개
- 역할 분담
- 프로젝트 소개
- 기술스택
- 핵심 기능
- 역할별 상세 보기
- 기타 산출물

## 팀소개

```
    안녕하세요? 5명의 I와 1명의 E가 모인 E와 I들 입니다.

    팀장 및 프론트 : 이운재
    프론트리더: 윤진아
    백엔드리더: 오형택
    인프라리더 및 프론트: 조권호
    백엔드 : 양유경
    백엔드 : 조아영
```

## 역할 분담

### 각자 맡은 핵심 기능
- 이운재 : 매칭 페이지, 마이페이지
- 윤진아 : 채팅 페이지, 알림페이지
- 조권호 : 인프라 구성, 프로필 수정페이지
- 오형택 : 알림 시스템, 채팅 시스템
- 양유경 : 매칭 알고리즘, 유저 API
- 조아영 : 매칭 시스템

## 프로젝트 소개

```
    함께 직관하고 싶은 사람들을 위한 직관 메이트 매칭 서비스 투게볼 !  
    
    같이보는 재미를 제공하기 위해 저희 투게볼이 딱 맞는 직관 메이트를 구해 드립니다. 

    '야구, 같이 보면 더 재밌잖아요'  슬로건 아래  매칭을 기반으로 하는 서비스를 제공합니다.
```

## 기술스택

### 프론트엔드
| TypeScript |    React   |  StyeldComponent   |  Zustand |
| :--------: | :--------: | :------: | :-----: |
|   <img src=https://github.com/ooonjae/togeball/assets/87305425/0fe0fa2e-41b4-4c76-b6da-2f70c1b5ebcb/ width="100" height="100">  |  <img src=https://github.com/ooonjae/togeball/assets/87305425/0aea4573-13a0-4a17-b790-3c255f86ecdc width="100" height="100">    | <img src=https://github.com/ooonjae/togeball/assets/87305425/ade8da75-0615-4ead-9e8e-dac0a2d051ae width="100" height="100"> | <img src=https://github.com/ooonjae/togeball/assets/87305425/6f676572-d16d-42ad-9e69-dccd99b3bbe1 width="100" height="100"> |

### 백엔드

| SpringBoot |   MariaDB  |  MongoDB   |  Redis | RabbitMQ | 
| :--------: | :--------: | :------: | :-----: | :--------: |
|  <img src=https://github.com/ooonjae/togeball/assets/87305425/58c118a0-dfba-401a-bed4-05c32d1aed69 width="100" height="100">    |  <img src=https://github.com/ooonjae/togeball/assets/87305425/ca2c1b66-b0a2-49f8-b0a5-01f3dc13cb9b width="100" height="100">    | <img src=https://github.com/ooonjae/togeball/assets/87305425/85be5837-f433-4ebf-a790-f67bc89848e0 width="100" height="100">| <img src=https://github.com/ooonjae/togeball/assets/87305425/2a02a529-9158-437c-b563-21cadcd83c70 width="100" height="100"> | <img src=https://github.com/ooonjae/togeball/assets/87305425/527b36e0-c16c-4243-afb0-23a76ec95c49 width="100" height="100"> |

### 인프라


| Jenkins |   Docker  |  nginx   |  prometheus | Grafana | 
| :--------: | :--------: | :------: | :-----: | :--------: |
|  <img src=https://github.com/ooonjae/togeball/assets/87305425/1887b52a-aed1-4c50-9368-a378010e5741 width="100" height="100">   | <img src=https://github.com/ooonjae/togeball/assets/87305425/51035f90-108d-4f82-8cee-5ed7baefd625 width="100" height="100">   | <img src=https://github.com/ooonjae/togeball/assets/87305425/43681f84-eb26-4714-b82d-6a9443594a21 width="100" height="100"> | <img src=https://github.com/ooonjae/togeball/assets/87305425/d0306883-aad8-4422-a999-5a494cf8b3d0 width="100" height="100"> | <img src=https://github.com/ooonjae/togeball/assets/87305425/7a512763-a879-4fb6-b105-65c68f16387e width="100" height="100"> |



## 핵심 기능

### 매칭 시스템
<img src=https://github.com/ooonjae/togeball/assets/87305425/b43c15ef-aceb-4023-bdcb-83cbfc0040f2/>

- 매칭 
    - 프론트: 웹소켓을 이용한 통신, d3를 이용한 데이터 시각화 및 인터랙티브웹 구현
    - 백 : 유사도를 이용한 매칭 알고리즘 설계


### 채팅 시스템

<img src=https://github.com/ooonjae/togeball/assets/87305425/26d71fc0-1ac6-4fa8-b972-df1c64f5d088/>

- 채팅
    - 프론트: 웹소켓과 stomp 프로토콜을 이용한 통신, 이미지 전송 가능
    - 백: 채팅 서버 구현


## 역할별 상세 보기

### 프론트

#### 매칭 시스템


<img src=https://github.com/ooonjae/togeball/assets/87305425/1e571825-1379-4075-bafc-8581f771a441/>

- 매칭 클릭 시 매칭을 시도하는 사람들과의 사용자 태그 기반 매칭 적용
- 상위 6개의 태그 애니메이션으로 표시
- 스케줄링 시간에 따라 2~6인으로 구성된 채팅방 생성

<img src=https://github.com/ooonjae/togeball/assets/87305425/90a7533f-21ef-4398-a31a-1d88a22a894e/>
<img src=https://github.com/ooonjae/togeball/assets/87305425/fefc213c-c82f-4564-a069-59823140a704/>
![alt text](./readmeimage/image-16.png)

- Chat GPT 이용하여 태그들 조합의 적절한 채팅방 이름 생성

#### 모집 채팅방

![alt text](./readmeimage/모집채팅방참여.gif)

- 현재 활성화 된 채팅방 목록 제공
- 경기 일자, 응원팀에 맞는 채팅방 찾는 필터 기능 제공
- 페이지네이션 활용

#### 채팅방 생성

<img src=https://github.com/ooonjae/togeball/assets/87305425/9bb99b2a-994e-41ad-b6aa-13e53fb23e0f/>

- 커스텀 주별 달력 활용하여 경기 선택
- 경기에 맞는 응원팀 항목 제한
- 사용자에 맞는 태그 입력 가능

#### 채팅방

##### 게임 채팅방 참여
<img src=https://github.com/ooonjae/togeball/assets/87305425/7cb88c58-c312-487e-afff-512bc64c25e0/>

- 대화 참가자 모두 표시

#### 나의 채팅방 확인
<img src=https://github.com/ooonjae/togeball/assets/87305425/388799b3-9213-4e39-b089-2ced961718c0 />

- 나의 채팅방 목록 확인 및 채팅방 개별 알림
- 최근 메시지 확인, 클릭 시 채팅방 이동

#### 로그인 및 회원가입

- 회원가입
<img src=https://github.com/ooonjae/togeball/assets/87305425/a7612a4d-bcab-4e08-a5fc-e222be62b16b/>

- 로그인
<img src=https://github.com/ooonjae/togeball/assets/87305425/9349f4bf-d5fd-458b-8773-0d3824691f15/>
<img src=https://github.com/ooonjae/togeball/assets/87305425/f816f906-888b-47ed-974a-f1f6b733720f/>


#### 경기 캘린더

- 월별/주별 캘린더
<img src=https://github.com/ooonjae/togeball/assets/87305425/e9e4d4fd-b3c3-4490-902a-6f53a5b01e76/>


### 백엔드

#### Swagger API 확인

- 채팅방 API
<img src=https://github.com/ooonjae/togeball/assets/87305425/674306f7-39f4-4a7a-8eba-afbefa2769f4>

- 매칭, 태그 API
<img src=https://github.com/ooonjae/togeball/assets/87305425/037f209d-c969-407c-8ad7-d1c81ef83d4e/>

#### Postman API 확인

- 게시판, 리그, 매칭, 알림 API
<img src=https://github.com/ooonjae/togeball/assets/87305425/f8faf5d5-1288-4bfa-9a24-345fef39361e />

- 유저 API
<img src=https://github.com/ooonjae/togeball/assets/87305425/728a501e-d181-4338-a504-3dbc8c1c430a />

- 인증 API
<img src=https://github.com/ooonjae/togeball/assets/87305425/48e1040e-67c2-49f3-ab3c-f02eee603678 />

- 채팅방 API
<img src=https://github.com/ooonjae/togeball/assets/87305425/58983dc7-347c-4127-818d-99e83f511ac7 />

- 태그 API
<img src=https://github.com/ooonjae/togeball/assets/87305425/07f1a4d9-38b7-4036-bd9f-1e288bffcea2 />

### 인프라

#### 아키텍처 설계

<img src=https://github.com/ooonjae/togeball/assets/87305425/02b8d4d3-1153-4af1-b0ba-dceb243fe45f/>

#### 모니터링 구현

- 시스템 모니터링
<img src=https://github.com/ooonjae/togeball/assets/87305425/3fb0a662-5b02-4540-9800-1732ae72873c/>


- 젠킨스 모니터링
<img src=https://github.com/ooonjae/togeball/assets/87305425/dbb53037-976e-4f25-b170-79f44a65d6a0/>


- 엔진엑스 모니터링
<img src=https://github.com/ooonjae/togeball/assets/87305425/51db991f-e3eb-4b4e-9598-f915d29bbfdf/>

## 기타 산출물


#### ERD
<img src=https://github.com/ooonjae/togeball/assets/87305425/b6820c9f-f55e-4b0e-a599-4e6d5aabe797/>

#### Figma 화면 설계서
<img src=https://github.com/ooonjae/togeball/assets/87305425/f80ec5ff-a437-4894-8e1e-5b704e0f0fa8/>


#### 회고

이운재: 좋은 팀원들들 만나 프로젝트 할 수 있어서 좋았습니다. 개인적으로 팀원 덕분에 많은 성장을 했으며,  다음에도 기회가 된다면 같이 프로젝트를 하고 싶습니다. 좋은 경험이였습니다.

오형택: 처음 도전해보는 것들이 많았는데 많은 성장을 했다는 생각이 들면서도 아쉬움도 많이 남는 건 어쩔 수 없는 것 같네요,,
정신없었지만 즐거웠고 보람찼습니다!

윤진아: 좋은 팀원들과 짧은 기간 안에 기획부터 개발까지 경험할 수 있어 좋았습니다. 백엔드와 협업하면서 부족함도 많이 느꼈지만 성장도 많이 할 수 있었던 프로젝트 였습니다.

양유경: 실력있고 열정있는 팀원들과 함께 하게 되어 영광이었습니다! 시간이 더 있었으면 어땠을까 하는 아쉬움도 있지만 많이 성장할 수 있는 좋은 프로젝트 경험이었습니다.

조권호: 훌륭한 팀원들과 함께 프로젝트를 할 수 있어서 많이 성장할 수 있었습니다. 인프라를 구성하면서 발생하는 오류들에 대해 프론트엔드와 백엔드와의 협업이 정말 중요하다고 생각하였고 좋은 경험이었습니다.

조아영: 멋진 팀원분들 덕분에 많은 것을 배우고 성장할 수 있었던 뜻깊고 알찬 시간이었습니다!
