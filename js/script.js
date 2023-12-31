   // 사용자가 입력한 위치 정보를 서버에 전송하는 함수
   function sendLocation() {
      // HTML 요소에서 사용자의 입력값을 가져옵니다.
      var province = document.getElementById("provinceInput").value;
      var city = document.getElementById("cityInput").value;
      var district = document.getElementById("districtInput").value;
      // 쿼리 파라미터 문자열을 만듭니다.
      var queryParams = `?province=${encodeURIComponent(province)}&city=${encodeURIComponent(city)}&district=${encodeURIComponent(district)}`;
 
      // 백엔드 API 엔드포인트 URL입니다.
      var url = "http://3.135.17.139:8080/ghost" + queryParams;
      console.log(url)
       // fetch 함수로 서버에 GET 요청을 보냅니다.
       fetch(url)
       .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
         .then(data => handleResponse(data)) // 파싱된 데이터를 handleResponse 함수에 전달하여 처리합니다.
         .then(() => gotoOutPutpage())
         .catch(error => console.error("요청 실패:", error)); // 에러 발생 시 콘솔에 에러 메시지를 출력합니다.
         var probability = responseData.probability;
         // localStorage에 확률 값을 저장합니다.
         localStorage.setItem('probability', probability);

         console.log(probability)
    }
    
    // 서버로부터 받은 응답 데이터를 처리하는 함수
    function handleResponse(responseData) {
      // 응답 데이터에서 'probability' 필드의 값을 추출합니다.
      var probability = responseData.probability;
      // localStorage에 확률 값을 저장합니다.
      localStorage.setItem('probability', probability);
    }
    window.onload = function() {
      var probability = localStorage.getItem('probability');
      console.log(probability);
      updateUI(probability);
    }
 
    function updateUI(probability) {
 
      const probabilityElement = document.getElementById('probability');
      const imageElement = document.getElementById('image');
      if (probability == '해당 위치에 대한 데이터가 없습니다.') {
          probabilityElement.innerHTML = `아앗 ,,, 아무래도 귀신이 없나 보군요 ,,`;
          imageElement.src = "image/hipgho.png"; // 기본 이미지
      } else if (probability < 5) {
        probabilityElement.innerHTML = `<strong>주변에 귀신이 존재할 확률은 ${probability}%</strong>`;
        imageElement.src = "image/ghostpix.jpg"; // 낮은 확률일 때의 이미지
    } else if (probability < 15) {
        probabilityElement.innerHTML = `<strong>주변에 귀신이 존재할 확률은 ${probability}%</strong>`;
        imageElement.src = "image/Cold.png"; // 중간 확률일 때의 이미지
    } else {
        probabilityElement.innerHTML = `<strong>주변에 귀신이 존재할 확률은 ${probability}%</strong>`;
        imageElement.src = "image/Skull.png"; // 높은 확률일 때의 이미지
    }
   }   

    function gotoInPutpage() {
      window.location.href = "input.html";
  }

 
    function gotoOutPutpage() {
      window.location.href = "output.html";
  }
  
    function goBack() {
      localStorage.removeItem('probability');
       window.location.href = "index.html";
    }
 
    function clearPlaceholder() {
       document.getElementById("search").placeholder = "";
    }
    
    function clearPlaceholder() {
       document.getElementById("search").placeholder = "";
    }

    