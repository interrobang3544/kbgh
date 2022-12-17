const form = document.querySelector(".form"),
  input = form.querySelector("input"),
  userInput = document.querySelector(".user-input");
 
function askForNum() {
  form.addEventListener("submit", handleSubmit)
}

function handleSubmit(event) {
  event.preventDefault();
  console.log(typeof(input.value))
  paintInput(input.value);
  generateBalls(input.value);
}
  
function paintInput(text){
  userInput.classList.remove('hide');
  form.classList.add('hide');
  userInput.innerHTML = `
  <div>${text}번 생성합니다</div>
  <button type="button" class="btn btn-primary retry-btn" onclick="location.href='/lotto'">다시 하기</button>
  `
}

askForNum();


const result = document.getElementById('result');
let pickedNum = [];
let newDiv = [];

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
  
      let ballColor;
      if (number <= 10) {
        ballColor = 'rgb(251,196,0)';
      } else if (number <= 20) {
        ballColor = 'rgb(105,200,242)';
      } else if (number <= 30) {
        ballColor = 'rgb(255,121,121)';
      } else if (number <= 40) {
        ballColor = 'rgb(164,164,164)';
      } else {
        ballColor = 'rgb(176,216,64)';
      }
      ball.style.background = ballColor;
      
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
