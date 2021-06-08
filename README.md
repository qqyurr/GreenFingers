# Green Fingers

## ✅프로젝트 개요

> 반려식물 종합 관리 서비스
> 팀장 : 박다솔
> 팀원 : 김규연, 김부희, 김소정, 김주효, 박기성


# 기획 배경

 코로나19로 인해 라이프스타일이 변화하고 있습니다. 집콕생활의 증가로 인한 우울감과 미래에 대한 불안감을 반려 식물과의 커뮤니케이션을 통해 극복하려는 사람이 자연스럽게 늘고 있습니다. 반려식물에 대한 수요는 증가하고 있지만 이에 따른 맞춤 서비스는 충분치 않은 상황입니다. 식물마다 특성이 다르기 때문에 이를 고려한 관리가 필요하지만 특정 식물 맞춤으로 정보를 제공하는 서비스가 부족합니다. 그렇기에 종합적으로 반려식물을 관리해주는 서비스 'Green Fingers'를 기획하게 되었습니다. 

# 프로젝트 목표

- 사용자가 가진 식물을 인식하여 식물의 종류를 알려주고 키울 때 필요한 정보 제공
- 기존의 물주기 알림 앱과 차별화하여 사용자가 직접 공부해 물주기 기간을 설정할 필요 없이 앱에서 자동으로 물주는 기간 알림
- 어떤 식물을 기를지 고민하는 사용자들을 위해 자체적으로 제작한 GREEN-MBTI를 활용하여 식물 추천 서비스를 제공
- 식물 배치 AR 서비스를 이용하여 식물을 인테리어에 적용했을 때 어떤 모습일지 미리 예상하고 식물 구매 결정
- 백엔드에서 서비스로서 완성도와 안정성을 갖춘 서비스를 제공하고, 프론트엔드는 처음 접하는 앱과 프레임워크를 성실히 공부해 기획과 명세서가 요구하는 기능을 안정적으로 제공하는 프론트엔드를 완성
- Git, Jira, Webex, Mattermost 등 협업 툴을 사용하여 소통

![1](https://user-images.githubusercontent.com/60100901/118922897-bf7ec300-b975-11eb-86d3-0f583ac4cc28.png)




## 와이어프레임
https://drive.google.com/file/d/1JjZXiPvLodNY4x_UjbOA0oULK-ky3RY8/view?usp=sharing

## 발표 자료
https://drive.google.com/file/d/1vfVPLA8iOjxyvffCQR532VBHs4qW8OgG/view?usp=sharing

### 



### 프로젝트 아키텍쳐

![2](https://user-images.githubusercontent.com/60100901/118922907-c1e11d00-b975-11eb-8894-a48d9c866028.png)

![3](https://user-images.githubusercontent.com/60100901/118922918-c574a400-b975-11eb-8353-a95561aa186e.png)

### 유스케이스 다이어그램

![4](https://user-images.githubusercontent.com/60100901/118922926-c73e6780-b975-11eb-9611-320b59edafc5.png)

## ✅프로젝트 상세 기능

### Frontend

- React Native CLI
- Styled Components 활용
- Redux를 이용해 상태관리
- Firebase를 이용한 로그인 기능 구현
- React Viro를 이용한 AR 

#### 1. 로그인 페이지

![5](https://user-images.githubusercontent.com/60100901/118922934-c9082b00-b975-11eb-9d00-3a818f73f804.png)

#### 2. 메인페이지

![6](https://user-images.githubusercontent.com/60100901/118922941-cc9bb200-b975-11eb-9788-0e435ec7f578.png)

#### 3. 다이어리 페이지

![7](https://user-images.githubusercontent.com/60100901/118922950-cf96a280-b975-11eb-93d1-8e043e4ca613.png)

#### 4. 식물 분류 페이지

![8](https://user-images.githubusercontent.com/60100901/118922955-d1606600-b975-11eb-96b0-91c1a95877b6.png)

#### 5. 식물 추천 페이지

![9](https://user-images.githubusercontent.com/60100901/118922970-d6251a00-b975-11eb-8e05-1dc402016e6a.png)

### Backend

- Spring Boot  + JPA 
- REST API 설계
- Spring Security를 이용한 로그인 구현
- 인공지능 모델 학습

#### 1. API 설계

![10](https://user-images.githubusercontent.com/60100901/118922979-d9200a80-b975-11eb-97ff-7ff959db422e.png)

![11](https://user-images.githubusercontent.com/60100901/118922988-dc1afb00-b975-11eb-8765-b3622e6b0c8b.png)

#### 2. 인공지능 개발

![12](https://user-images.githubusercontent.com/60100901/118922989-dd4c2800-b975-11eb-8347-72bbb151c5d6.png)

1) Dataset

![13](https://user-images.githubusercontent.com/60100901/118923005-e0dfaf00-b975-11eb-9eee-709ed6c3bb2b.png)

- 학명, 이름, 카테고리, 관리 난이도, 향 유무, 습도, 온도, 물 주기 등의 정보를 제공합니다.

2) 인공지능 모델 학습

- 전이 학습

![14](https://user-images.githubusercontent.com/60100901/118923014-e3420900-b975-11eb-870d-570d7083d952.png)

- PyTorch 라이브러리 활용
- 데이터 셋 호출
- 이미지 시각화
- CNN 딥러닝 모델 활용
- 이미지 학습
- 학습 모델 평가
