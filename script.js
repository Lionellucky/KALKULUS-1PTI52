        const landingSection = document.getElementById('landing-section');
        const learningSection = document.getElementById('learning-section');
        const quizSection = document.getElementById('quiz-section');
        const resultsSection = document.getElementById('results-section');
        
        const homeBtn = document.getElementById('home-btn');
        const startQuizBtn = document.getElementById('start-quiz-btn');
        
        const unitTitleEl = document.getElementById('unit-title');
        const unitContentEl = document.getElementById('unit-content');
        
        const questionCounterEl = document.getElementById('question-counter');
        const totalQuestionsEl = document.getElementById('total-questions');
        const progressBar = document.getElementById('progress-bar');
        const questionTextEl = document.getElementById('question-text');
        const optionsContainer = document.getElementById('options-container');
        const submitBtn = document.getElementById('submit-btn');
        
        const scoreTextEl = document.getElementById('score-text');
        const feedbackTextEl = document.getElementById('feedback-text');
        const retryQuizBtn = document.getElementById('retry-quiz-btn');
        const nextUnitBtn = document.getElementById('next-unit-btn');

        // --- Data for Educational Units ---
        const units = [
  {
    title: 'Unit 1: Limit',
    content: `
      <h3>Pendahuluan</h3>
      <p>Konsep <strong>limit</strong> menjelaskan nilai yang didekati fungsi ketika variabel mendekati suatu titik. Limit digunakan untuk mendefinisikan <em>turunan</em> dan <em>integral</em>.</p>

      <h3>Materi Utama</h3>
      <ul>
        <li>Pemahaman intuitif limit</li>
        <li>Limit satu sisi</li>
        <li>Teorema limit (penjumlahan, pengurangan, perkalian, pembagian, substitusi, apit)</li>
        <li>Limit fungsi trigonometri</li>
        <li>Limit tak hingga dan barisan</li>
        <li>Kontinuitas fungsi</li>
      </ul>

      <details>
        <summary style="cursor:pointer; font-weight:bold; color:#2563eb;">
          📄 View Full Lecture PDF
        </summary>
        <iframe src="PB1MAT_MSA08 - 01 Limit.pdf" width="100%" height="600px" style="border:none; margin-top:1rem;"></iframe>
      </details>
    `,
    quiz: [
      { question: "Apa arti dari limit fungsi?", options: ["Nilai tepat fungsi", "Nilai yang didekati fungsi", "Nilai maksimum fungsi", "Kecepatan fungsi"], answer: "Nilai yang didekati fungsi" },
      { question: "Hitung lim (x → 2) (x + 5).", options: ["2", "5", "7", "10"], answer: "7" },
      { question: "Limit digunakan untuk mendefinisikan apa?", options: ["Turunan dan integral", "Peluang", "Statistika", "Persamaan linear"], answer: "Turunan dan integral" }
    ]
  },
  {
    title: 'Unit 2: Turunan (Derivatives)',
    content: `
      <h3>Pendahuluan</h3>
      <p><strong>Turunan</strong> adalah laju perubahan sesaat suatu fungsi. Konsep ini diambil dari limit selisih nilai fungsi.</p>

      <h3>Materi Utama</h3>
      <ul>
        <li>Definisi turunan</li>
        <li>Aturan pencarian turunan (konstanta, pangkat, penjumlahan, perkalian, pembagian)</li>
        <li>Turunan fungsi trigonometri</li>
        <li>Aturan rantai</li>
        <li>Turunan tingkat tinggi</li>
        <li>Diferensiasi implisit</li>
        <li>Laju yang berkaitan</li>
        <li>Diferensiasi dan aproksimasi</li>
      </ul>

      <details>
        <summary style="cursor:pointer; font-weight:bold; color:#2563eb;">
          📄 View Full Lecture PDF
        </summary>
        <iframe src="PB2MAT_MSA08 - 02 Turunan.pdf" width="100%" height="600px" style="border:none; margin-top:1rem;"></iframe>
      </details>
    `,
    quiz: [
      { question: "Apa arti turunan dari suatu fungsi?", options: ["Luas di bawah kurva", "Laju perubahan sesaat", "Nilai maksimum fungsi", "Nilai limit tak hingga"], answer: "Laju perubahan sesaat" },
      { question: "Turunan dari f(x) = x³ adalah?", options: ["3x²", "x²", "x³", "2x"], answer: "3x²" },
      { question: "Aturan rantai digunakan jika?", options: ["Ada fungsi di dalam fungsi lain", "Fungsi linear", "Limit tak hingga", "Integral tentu"], answer: "Ada fungsi di dalam fungsi lain" }
    ]
  },
  {
    title: 'Unit 3: Aplikasi Turunan',
    content: `
      <h3>Pendahuluan</h3>
      <p>Aplikasi turunan mencakup optimasi, analisis grafik, dan penyelesaian masalah praktis.</p>

      <h3>Materi Utama</h3>
      <ul>
        <li>Maksimum dan minimum</li>
        <li>Kemonotonan dan kecekungan</li>
        <li>Ekstrim lokal dan interval terbuka</li>
        <li>Masalah praktis (optimasi)</li>
        <li>Penggambaran grafik fungsi</li>
        <li>Teorema nilai rataan</li>
        <li>Metode numerik (biseksi, Newton, fixed-point)</li>
        <li>Anti turunan</li>
      </ul>

      <details>
        <summary style="cursor:pointer; font-weight:bold; color:#2563eb;">
          📄 View Full Lecture PDFs
        </summary>
        <iframe src="PB3MAT_MSA08 - 03 Aplikasi Turunan Part I.pdf" width="100%" height="400px" style="border:none; margin-top:1rem;"></iframe>
        <iframe src="PB3MAT_MSA08 - 03 Aplikasi Turunan Part II.pdf" width="100%" height="400px" style="border:none; margin-top:1rem;"></iframe>
      </details>
    `,
    quiz: [
      { question: "Untuk mencari titik maksimum/minimum fungsi digunakan konsep?", options: ["Limit", "Turunan pertama", "Integral", "Eksponen"], answer: "Turunan pertama" },
      { question: "Jika f'(x) > 0 pada suatu interval, maka fungsi?", options: ["Menurun", "Naik", "Konstan", "Tak tentu"], answer: "Naik" },
      { question: "Metode Newton digunakan untuk?", options: ["Mencari turunan", "Menyelesaikan persamaan numerik", "Mencari integral", "Mencari limit"], answer: "Menyelesaikan persamaan numerik" }
    ]
  },
  {
    title: 'Unit 4: Integral Tentu',
    content: `
      <h3>Pendahuluan</h3>
      <p><strong>Integral tentu</strong> digunakan untuk menghitung luas di bawah kurva dan berhubungan dengan Teorema Dasar Kalkulus.</p>

      <h3>Materi Utama</h3>
      <ul>
        <li>Definisi integral tentu</li>
        <li>Jumlah Riemann</li>
        <li>Teorema dasar kalkulus (pertama & kedua)</li>
        <li>Metode substitusi</li>
        <li>Teorema nilai rata-rata untuk integral</li>
        <li>Integrasi numerik (trapesium, titik tengah, dll.)</li>
      </ul>

      <details>
        <summary style="cursor:pointer; font-weight:bold; color:#2563eb;">
          📄 View Full Lecture PDFs
        </summary>
        <iframe src="PB5MAT_MSA08 - 04 Integral Tentu Part I.pdf" width="100%" height="400px" style="border:none; margin-top:1rem;"></iframe>
        <iframe src="PB5MAT_MSA08 - 04 Integral Tentu Part II.pdf" width="100%" height="400px" style="border:none; margin-top:1rem;"></iframe>
      </details>
    `,
    quiz: [
      { question: "Integral tentu digunakan untuk menghitung?", options: ["Laju perubahan", "Luas di bawah kurva", "Nilai maksimum fungsi", "Limit tak hingga"], answer: "Luas di bawah kurva" },
      { question: "Teorema dasar kalkulus menghubungkan?", options: ["Limit dan turunan", "Turunan dan integral", "Integral dan probabilitas", "Turunan dan eksponen"], answer: "Turunan dan integral" },
      { question: "Metode trapesium digunakan dalam?", options: ["Turunan", "Integrasi numerik", "Limit", "Persamaan linear"], answer: "Integrasi numerik" }
    ]
  },
  {
    title: 'Unit 5: Penerapan Integral',
    content: `
      <h3>Pendahuluan</h3>
      <p>Penerapan integral meliputi perhitungan luas, volume, panjang kurva, dan aplikasi fisika.</p>

      <h3>Materi Utama</h3>
      <ul>
        <li>Luas daerah bidang datar</li>
        <li>Volume benda (cakram, cincin, kulit silinder)</li>
        <li>Panjang kurva & luas permukaan putar</li>
        <li>Kerja & gaya (pegas, fluida, pompa cairan)</li>
        <li>Momen & pusat massa</li>
      </ul>

      <details>
        <summary style="cursor:pointer; font-weight:bold; color:#2563eb;">
          📄 View Full Lecture PDFs
        </summary>
        <iframe src="PB6MAT_MSA08 - 05 Penerapan Integral Part I.pdf" width="100%" height="400px" style="border:none; margin-top:1rem;"></iframe>
        <iframe src="PB6MAT_MSA08 - 05 Penerapan Integral Part II.pdf" width="100%" height="400px" style="border:none; margin-top:1rem;"></iframe>
      </details>
    `,
    quiz: [
      { question: "Metode kulit silinder digunakan untuk menghitung?", options: ["Turunan", "Volume benda putar", "Luas permukaan", "Pusat massa"], answer: "Volume benda putar" },
      { question: "Kerja pada pegas dapat dihitung menggunakan?", options: ["Limit", "Integral", "Turunan", "Persamaan linear"], answer: "Integral" },
      { question: "Pusat massa lamina homogen disebut?", options: ["Centroid", "Asimtot", "Gradien", "Lokus"], answer: "Centroid" }
    ]
  },
  {
    title: 'Unit 6: Fungsi Transenden',
    content: `
      <h3>Pendahuluan</h3>
      <p><strong>Fungsi transenden</strong> mencakup fungsi eksponensial, logaritma, trigonometri invers, hiperbola, dan aplikasinya dalam persamaan diferensial.</p>

      <h3>Materi Utama</h3>
      <ul>
        <li>Fungsi logaritma alami</li>
        <li>Fungsi invers & turunannya</li>
        <li>Fungsi eksponen alami</li>
        <li>Fungsi eksponen & logaritma umum</li>
        <li>Pertumbuhan & peluruhan eksponensial</li>
        <li>Persamaan diferensial linier orde pertama</li>
        <li>Aproksimasi persamaan diferensial</li>
        <li>Fungsi trigonometri invers & hiperbola</li>
      </ul>

      <details>
        <summary style="cursor:pointer; font-weight:bold; color:#2563eb;">
          📄 View Full Lecture PDF
        </summary>
        <iframe src="PB7MAT_MSA08 - 06 Fungsi Transenden Part I.pdf" width="100%" height="600px" style="border:none; margin-top:1rem;"></iframe>
      </details>
    `,
    quiz: [
      { question: "Fungsi eksponensial alami memiliki basis?", options: ["10", "2", "e", "π"], answer: "e" },
      { question: "Turunan dari ln(x) adalah?", options: ["1/x", "x", "e^x", "0"], answer: "1/x" },
      { question: "Model logistik digunakan untuk?", options: ["Pertumbuhan populasi", "Integral tentu", "Limit tak hingga", "Turunan trigonometri"], answer: "Pertumbuhan populasi" }
    ]
  }


        ];

        // --- Application State ---
        let currentUnitIndex = 0;
        let currentQuestionIndex = 0;
        let score = 0;
        let selectedAnswer = null;

        // --- Functions ---
        
        function goHome() {
            currentUnitIndex = 0;
            landingSection.classList.remove('hidden');
            learningSection.classList.add('hidden');
            quizSection.classList.add('hidden');
            resultsSection.classList.add('hidden');
        }
        
        function selectChapter(unitIndex) {
            currentUnitIndex = unitIndex;
            landingSection.classList.add('hidden');
            loadUnit(currentUnitIndex);
        }

        function loadUnit(unitIndex) {
            const unit = units[unitIndex];
            unitTitleEl.textContent = unit.title;
            unitContentEl.innerHTML = unit.content;
            
            learningSection.classList.remove('hidden');
            quizSection.classList.add('hidden');
            resultsSection.classList.add('hidden');
        }

        function startQuiz() {
            currentQuestionIndex = 0;
            score = 0;
            learningSection.classList.add('hidden');
            resultsSection.classList.add('hidden');
            quizSection.classList.remove('hidden');
            totalQuestionsEl.textContent = units[currentUnitIndex].quiz.length;
            loadQuestion();
        }

        function loadQuestion() {
            selectedAnswer = null;
            submitBtn.disabled = true;
            submitBtn.textContent = "Submit Answer";
            
            const questionData = units[currentUnitIndex].quiz[currentQuestionIndex];
            questionCounterEl.textContent = currentQuestionIndex + 1;
            questionTextEl.textContent = questionData.question;
            
            const progress = ((currentQuestionIndex) / units[currentUnitIndex].quiz.length) * 100;
            progressBar.style.width = `${progress}%`;

            optionsContainer.innerHTML = '';
            questionData.options.forEach(option => {
                const optionElement = document.createElement('div');
                optionElement.textContent = option;
                optionElement.addEventListener('click', () => selectOption(optionElement, option));
                optionsContainer.appendChild(optionElement);
            });
        }
        
        function selectOption(optionElement, option) {
            Array.from(optionsContainer.children).forEach(child => {
                child.classList.remove('selected-answer');
            });
            optionElement.classList.add('selected-answer');
            selectedAnswer = option;
            submitBtn.disabled = false;
        }

        function submitAnswer() {
            submitBtn.disabled = true;
            const questionData = units[currentUnitIndex].quiz[currentQuestionIndex];
            const isCorrect = selectedAnswer === questionData.answer;
            
            if (isCorrect) {
                score++;
            }
            
            Array.from(optionsContainer.children).forEach(child => {
                child.style.pointerEvents = 'none';
                if (child.textContent === questionData.answer) {
                    child.classList.add('correct-answer');
                } else if (child.textContent === selectedAnswer) {
                    child.classList.add('incorrect-answer');
                }
            });
            
            setTimeout(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < units[currentUnitIndex].quiz.length) {
                    loadQuestion();
                } else {
                    showResults();
                }
            }, 1500);
        }
        
        function showResults() {
            quizSection.classList.add('hidden');
            resultsSection.classList.remove('hidden');
            
            const totalQuestions = units[currentUnitIndex].quiz.length;
            const percentage = Math.round((score / totalQuestions) * 100);
            
            scoreTextEl.textContent = `${percentage}%`;
            
            let feedback = '';
            if (percentage === 100) {
                feedback = "Excellent work! You've mastered this unit.";
            } else if (percentage >= 75) {
                feedback = "Great job! You have a strong understanding.";
            } else if (percentage >= 50) {
                feedback = "Good effort. A little review might help!";
            } else {
                feedback = "Don't give up! Review the material and try again.";
            }
            feedbackTextEl.textContent = feedback;
            
            if (currentUnitIndex >= units.length - 1) {
                nextUnitBtn.classList.add('hidden');
            } else {
                 nextUnitBtn.classList.remove('hidden');
            }
        }
        
        function handleNextUnit() {
            currentUnitIndex++;
            if (currentUnitIndex < units.length) {
                loadUnit(currentUnitIndex);
            }
        }

        // --- Event Listeners ---
        homeBtn.addEventListener('click', goHome);
        document.querySelectorAll('.chapter-card').forEach(card => {
            card.addEventListener('click', () => {
                const unitIndex = parseInt(card.dataset.unit, 10);
                selectChapter(unitIndex);
            });
        });
        startQuizBtn.addEventListener('click', startQuiz);
        submitBtn.addEventListener('click', submitAnswer);
        retryQuizBtn.addEventListener('click', startQuiz);
        nextUnitBtn.addEventListener('click', handleNextUnit);
        
        // --- Initial Load ---
        window.addEventListener('load', () => {
            goHome(); // Show landing page first
        });