const generate_form = document.querySelector(".generate-form"),
  generate_input = generate_form.querySelector(".generate-input"),
  generate_userInput = document.querySelector(".generate-user-input"),
  record_form = document.querySelector(".record-form"),
  record_input = record_form.querySelector(".record-input"),
  record_userInput = document.querySelector(".record-user-input");
 
function askForNum() {
  generate_form.addEventListener("submit", handleSubmit)
}

function handleSubmit(event) {
  event.preventDefault();
  paintInput(generate_input.value);
  generateBalls(generate_input.value);
}
  
function paintInput(text){
  generate_userInput.classList.remove('hide');
  generate_form.classList.add('hide');
  generate_userInput.innerHTML = `
  <div>${text}번 생성합니다</div>
  <button type="button" class="btn btn-primary retry-btn" onclick="location.href='/lotto'">새로 고침</button>
  `
}

askForNum();


const result = document.getElementById('result');
let pickedNum = [];
let newDiv = [];

function ballColor(num) {
  if (num <= 10) {
    col = 'rgb(251,196,0)';
  } else if (num <= 20) {
    col = 'rgb(105,200,242)';
  } else if (num <= 30) {
    col = 'rgb(255,121,121)';
  } else if (num <= 40) {
    col = 'rgb(164,164,164)';
  } else {
    col = 'rgb(176,216,64)';
  }
  return col
}

function generateBalls(input) {
  for (let i=0; i<input; i++){
    newDiv.push(document.createElement('div'));
    newDiv[i].className = `result`;
    newDiv[i].id = `result${i}`;
    result.appendChild(newDiv[i]);
  
    let candidates = Array(45)
    .fill()
    .map(function (element, index) {
      return index + 1;
    });
    
    let shuffle = [];
    while (candidates.length > 0) {
      let value = candidates.splice(Math.floor(Math.random() * candidates.length), 1)[0];
      shuffle.push(value);
    }

    let picked = shuffle
      .slice(0, 6)
      .sort(function (p, c) {
        return p - c;
      });
  
    pickedNum[i] = picked;
  
    function painting(number, resultN) {
      let ball = document.createElement('div');
     
      ball.className = 'ball';
      ball.textContent = number;
      ball.style.background = ballColor(number);
      
      resultN.appendChild(ball);
    }
    if (input < 11){
      for (let j = 0; j < picked.length; j++) {
        setTimeout(() => {
          painting(pickedNum[i][j], newDiv[i]);
        }, i*1000 + (j + 1) * 100);
      }
    } else if (input < 51) {
      for (let j = 0; j < picked.length; j++) {
        setTimeout(() => {
          painting(pickedNum[i][j], newDiv[i]);
        }, i*100 + (j + 1) * 50);
      }
    } else if (input < 101) {
      for (let j = 0; j < picked.length; j++) {
        setTimeout(() => {
          painting(pickedNum[i][j], newDiv[i]);
        }, i*50 + (j + 1) * 10);
      }
    } else {
      for (let j = 0; j < picked.length; j++) {
        painting(pickedNum[i][j], newDiv[i])
      }
    }
  }  
}

function askForRecord() {
  record_form.addEventListener("submit", recordSubmit)
}

function recordSubmit(event) {
  event.preventDefault();
  recordPaintInput(record_input.value);
  showRecord(record_input.value);
}

function recordPaintInput(text){
  record_userInput.classList.remove('hide');
  record_form.classList.add('hide');
  record_userInput.innerHTML = `
  <div>${text}회차 당첨 결과를 조회합니다</div>
  <button type="button" class="btn btn-primary retry-btn" onclick="location.href='/lotto'">새로 고침</button>
  `
}

function showRecord(record) {
  axios.get(`api/lotto/${record}`)
  .then((response) => {
    const res = response.data.data
    const {
      drwtNo1,
      drwtNo2,
      drwtNo3,
      drwtNo4,
      drwtNo5,
      drwtNo6,
      bnusNo,
      totSellamnt,
      firstWinamnt,
      firstPrzwnerCo,
    } = res,
    drwNoYeer = res.drwNoDate.split("-")[0]
    drwNoMonth = res.drwNoDate.split("-")[1]
    drwNoDate = res.drwNoDate.split("-")[2]

    const temp = document.createElement("div");
    // temp.setAttribute("class", "row")
    temp.innerHTML = `
    <div class="info-box"><div class="info-title">추첨일</div> ${drwNoYeer}년 ${drwNoMonth}월 ${drwNoDate}일</div>
    <div class="info-box"><div class="info-title">총 판매 금액</div> ${totSellamnt.toLocaleString('en-US')}원</div>
    <div class="info-box"><div class="info-title">1등 당첨금</div> ${firstWinamnt.toLocaleString('en-US')}원</div>
    <div class="info-box"><div class="info-title">1등 당첨자 수</div> ${firstPrzwnerCo}명</div>
    <div class="picked-box">
    <div class="picked-title">당첨 번호</div>
      <div class="result">
        <div class="ball" style="background: ${ballColor(drwtNo1)}">${drwtNo1}</div>
        <div class="ball" style="background: ${ballColor(drwtNo2)}">${drwtNo2}</div>
        <div class="ball" style="background: ${ballColor(drwtNo3)}">${drwtNo3}</div>
        <div class="ball" style="background: ${ballColor(drwtNo4)}">${drwtNo4}</div>
        <div class="ball" style="background: ${ballColor(drwtNo5)}">${drwtNo5}</div>
        <div class="ball" style="background: ${ballColor(drwtNo6)}">${drwtNo6}</div>
        <div style="width: 30px; display: inline-block;"> + </div>
        <div class="ball" style="background: ${ballColor(bnusNo)}">${bnusNo}</div>
      </div>
    </div>
    `
    document.getElementById('result-record').append(temp)
  })
}

askForRecord();

