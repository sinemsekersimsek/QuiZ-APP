const quizData = [
    {
      question: 'What is the largest ocean in the world?',
      a: 'Pacific Ocean',
      b: 'Atlantic Ocean',
      c: 'Indian Ocean',
      d:'Southern Ocean',
      e:'Arctic Ocean', 
      correct: 'a',
    },
    {
      question: 'Who is the painter of the Mona Lisa painting?',
      a: 'Frida Kahlo',
      b: 'Leonardo da Vinci',
      c: 'Pablo Picasso',
      d: 'Salvador Dali',
      e: 'Johannes Vermeer',
      correct: 'b',
    },
    {
      question: 'What is the approximate value of the number "π" in mathematics?',
      a: '3.2134',
      b: '3.6212',
      c: '3.1583',
      d: '3.14159',
      e: '3.234',
      correct: 'd',
    },
    {
      question: 'Which planet is also known as the "Red Planet"?',
      a: 'Uranus',
      b: 'Neptune',
      c: 'Mars',
      d: 'Saturn',
      e: 'Jupiter',
      correct: 'c',
    },
    {
      question: ' How many major bones are there in the human body?',
      a: '201',
      b: '226',
      c: '111',
      d: '121',
      e: '206',
      correct: 'e',
    },
  ]
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const d_text = document.getElementById('d_text')
  const e_text = document.getElementById('e_text')
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]
  
    deselectedAnswers()
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
  }
  
  function deselectedAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false))
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id
      }
    })
    return answer
  }
  
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
  
    //console.log(answer)
  
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++
      }
      currentQuiz++
  
      if (currentQuiz < quizData.length) {
        loadQuiz()
      } else {
        quiz.innerHTML = `
        <h2> The test is completed. ${score * 20} You received.🥳 </h2>
        <button class="submit" onClick="location.reload()"> Try Again 🌀  </button>
  
      `
      }
    }
  })