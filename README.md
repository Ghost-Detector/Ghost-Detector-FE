# Ghost-Detector-FE

## 개요

사용자가 원하는 위치정보를 EC2서버로 보내 계산한 귀신이 존재할 가능성을 EC2서버에서 가져오고 그 결과를 FE에서 보여준다.

## 디자인

### index.html

![image](https://github.com/Ghost-Detector/Ghost-Detector-FE/assets/112530022/2a14fbfe-a200-40ed-b0d7-b2e2d3bb335a)


### input.html

![image](https://github.com/Ghost-Detector/Ghost-Detector-FE/assets/112530022/1b3476e2-90de-428f-bc55-f56fb2ee65c2)

### output.html


![image](https://github.com/Ghost-Detector/Ghost-Detector-FE/assets/117438347/4c136f93-72af-427a-9075-bb1543dcb566)

![image](https://github.com/Ghost-Detector/Ghost-Detector-FE/assets/117438347/67ac0ac9-c709-40c0-b153-a4e799b75b22)

![image](https://github.com/Ghost-Detector/Ghost-Detector-FE/assets/117438347/b4f594b9-74a3-457b-aa05-e7cd6077a323)

![image](https://github.com/Ghost-Detector/Ghost-Detector-FE/assets/117438347/6283d4e3-7908-48c2-884e-84076e95c56c)

![image](https://github.com/Ghost-Detector/Ghost-Detector-FE/assets/117438347/7ec3548d-e941-4ef4-bf84-49ea9645871b)






## 기능

### 1. 귀신 탐색 기능
사용자의 주소 입력값을 서버에 보낸다. 서버와의 통신은 fetch api를 활용 하였다.

### 2. 결과 값
서버에서 주소 값에 따라 계산한 귀신 존재 확률을 프론트엔드로 전송해준다. 프론트 엔드에서는 확률 값에 따라 화면에 다른 메시지와 이미지를 표시한다.

### 3. 페이지 이동
사용자가 다른 위치 정보를 입력을 원할 시 돌아가기 기능(초기화면 이동)이 있고 주소 입력 후 정확률 결과 창 이동이 있다. 



## 개발 후 개선점

첫 개발 당시 화면


![image](https://github.com/Ghost-Detector/Ghost-Detector-FE/assets/112530022/341b1f7e-ab5f-484f-82ae-9165472bc546)


![image](https://github.com/Ghost-Detector/Ghost-Detector-FE/assets/112530022/6e5791cd-d588-44de-ab9c-02720153de3f)

개선 후 화면

### 디자인 output.html 참고

1. index.html을 추가하며 웹사이트 제목 강조하였다.
2. 기존 한 가지 밖에 없던 이미지로 인해 어떤 확률에서나 똑같은 이미지만 나왔지만 사용자의 보다 많은 즐거움을 위해 확률 별 이미지 추가하였다.
3. 서버와의 통신이 불안정하고 probability 값이 제대로 저장 되지 않던 오류를 probability값을 확실하게 저장 후 페이지를 전환하도록 순서를 배치하여 서버와의 통신을 안정화 하였다.


### 더 추가해야할 항목 
1. 사용자가 귀신이 나타날 확률을 납득할 수 있도록 귀신의 존재의 근거가 되는 폐가, 폐교, 추모공원, 사망률의 데이터 값을 사용자들도 볼 수 있도록 하게 한다.




