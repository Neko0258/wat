const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const math = [
  {
    question: "Câu 1: Tập hợp A = {1; 2; 3; 4; 5; 6} có bao nhiêu tập hợp con gồm 2 phần tử?",
    answerA:
      "A. 30.",
    answerB:
      "B. 15.",
    answerC:
      "C. 10.",
    answerD:
      "D. 3.",
  },
  {
    question: "Câu 2: Lớp 10A có 7 HS giỏi Toán, 5 HS giỏi Lý, 6 HS giỏi Hoá, 3 HS giỏi cả Toán và Lý, 4 HS giỏi cả Toán và Hoá, 2 HS giỏi cả Lý và Hoá, 1 HS giỏi cả 3 môn Toán , Lý, Hoá . Số HS giỏi  ít nhất một môn (Toán, Lý , Hoá ) của lớp 10A là:",
    answerA:
      "A. 9.",
    answerB:
      "B. 10.",
    answerC:
      "C. 18",
    answerD:
      "D. 28.",
  },
  {
    question: "Câu 3: “ Đồ thị hàm số đi qua hai điểm A(0;-3); B(-1;-5). Thì a và b bằng:”",
    answerA:
      "A. a = -2; b = 3.",
    answerB:
      "B. a = 2; b = 3.",
    answerC:
      "C. a = -2; b = -3.",
    answerD:
      "D. a = 1; b = -4.",
  },
  {
    question: "Câu 4: Hàm số y = f(x) có đạo hàm bằng 0 tại x = 1. Khi đó, giá trị của hàm số y = f(x) tại x = 2 là:",
    answerA:
      "A. 2.",
    answerB:
      "B. 3.",
    answerC:
      "C. 4.",
    answerD:
      "D. 5.",
  },
];

const english = [
  {
    question: "Câu 1: My wife handles most of the chores around house. She is a_____________.",
    answerA:
      "A. homemaker.",
    answerB:
      "B. employer.",
    answerC:
      "C. breadwinner.",
    answerD:
      "D. assistant.",
  },
  {
    question: "Câu 2: They have just bought a new house with a huge amount of money, therefore, there is a _________ on them. They have to work hard to earn money to pay the bank.",
    answerA:
      "A. physical strength.",
    answerB:
      "B. financial burden.",
    answerC:
      "C. household chore.",
    answerD:
      "D. positive atmosphere.",
  },
  {
    question: "Câu 3: The teacher asked the students to write a short essay on the topic “My favorite subject”. The students were _________ to write the essay.",
    answerA:
      "A. required.",
    answerB:
      "B. forced.",
    answerC:
      "C. obliged.",
    answerD:
      "D. encouraged.",
  },
  {
    question: "Câu 4: If parents behave well, they will__________a good example for their children.",
    answerA:
      "A. do.",
    answerB:
      "B. take.",
    answerC: 
      "C. set.",
    answerD:
      "D. buy.",
  },
];

const render = (exams) => {
  const content = exams.map((exam, index) => {
    console.log(exam.question);
    return `
            <div class="question">${exam.question}</div>
            <div class="row">
                <div class="col">
                    <input type="radio" name="answer + ${index}" id="answerA"></input>
                    <label for="answerA">${exam.answerA}</label>
                </div>
                <div class="col">
                    <input type="radio" name="answer + ${index}" id="answerB"></input>
                    <label for="answerB">${exam.answerB}</label>
                </div>
                <div class="col">
                    <input type="radio" name="answer + ${index}" id="answerC"></input>
                    <label for="answerC">${exam.answerC}</label>
                </div>
                <div class="col">
                    <input type="radio" name="answer + ${index}" id="answerD"></input>
                    <label for="answerD">${exam.answerD}</label>
                </div>
            </div>
            </div>
        `;
  });
  content.push('<button class="button">Nộp bài</button>')
  $(".content").innerHTML = content.join("");
};

const handleExam = (examName) => {
    if(examName === 'math') render(math)
    if(examName === 'english') render(english)
};