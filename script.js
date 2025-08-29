
class SmartReadingPlatform {
  constructor() {
    // النصوص المتدرجة حسب المستوى
    this.texts = {
      1: [
        { title: "الطَّائِرُ الصَّغِيرُ", content: "كَانَ هُنَاكَ طَائِرٌ صَغِيرٌ يَعِيشُ فِي غَابَةٍ جَمِيلَةٍ. كَانَ الطَّائِرُ يُحِبُّ الغِنَاءَ كُلَّ صَبَاحٍ. فِي يَوْمٍ مِنَ الأَيَّامِ، قَرَّرَ الطَّائِرُ أَنْ يَسْتَكْشِفَ أَجْزَاءً جَدِيدَةً مِنَ الغَابَةِ. طَارَ عَالِيًا فَوْقَ الأَشْجَارِ وَرَأَى مَنْظَرًا رَائِعًا. عَادَ الطَّائِرُ إِلَى عُشِّهِ سَعِيدًا بِمَا رَآهُ." },
        { title: "الفَلَّاحُ الطَّيِّبُ", content: "فِي قَرْيَةٍ صَغِيرَةٍ، كَانَ يَعِيشُ فَلَّاحٌ طَيِّبُ القَلْبِ. كَانَ يَزْرَعُ الخُضْرَوَاتِ وَالفَوَاكِهَ فِي حَقْلِهِ الصَّغِيرِ. كُلَّ يَوْمٍ، كَانَ يَسْتَيْقِظُ مُبَكِّرًا لِيَعْتَنِيَ بِنَبَاتَاتِهِ. الجِيرَانُ يُحِبُّونَهُ كَثِيرًا لأَنَّهُ يُسَاعِدُهُمْ دَائِمًا. فِي نِهَايَةِ المَوْسِمِ، كَانَ مَحْصُولُهُ وَفِيرًا وَجَمِيلًا." }
      ],
      2: [
        { title: "رِحْلَةُ الاِكْتِشَافِ", content: "انْطَلَقَتْ مَجْمُوعَةٌ مِنَ الطُّلَّابِ فِي رِحْلَةٍ عِلْمِيَّةٍ إِلَى المُتْحَفِ الطَّبِيعِيِّ. كَانُوا مُتَحَمِّسِينَ لِرُؤْيَةِ الهَيَاكِلِ العَظْمِيَّةِ لِلدِّينَاصُورَاتِ وَالحَيَوَانَاتِ المُنْقَرِضَةِ. شَرَحَ لَهُمُ المُرْشِدُ تَارِيخَ هَذِهِ المَخْلُوقَاتِ وَكَيْفَ عَاشَتْ عَلَى الأَرْضِ مَلَايِينَ السِّنِينَ. تَعَلَّمَ الطُّلَّابُ أَهَمِّيَّةَ الحِفَاظِ عَلَى البِيئَةِ وَحِمَايَةِ الحَيَوَانَاتِ مِنَ الانْقِرَاضِ." },
        { title: "عَالِمُ الفَضَاءِ الشَّابُّ", content: "أَحْمَدُ طَالِبٌ فِي المَرْحَلَةِ الثَّانَوِيَّةِ يَحْلُمُ بِأَنْ يُصْبِحَ عَالِمَ فَضَاءٍ. يَقْضِي سَاعَاتٍ طَوِيلَةً فِي قِرَاءَةِ الكُتُبِ العِلْمِيَّةِ وَمُشَاهَدَةِ الأَفْلَامِ الوَثَائِقِيَّةِ عَنِ الكَوَاكِبِ وَالنُّجُومِ. يَسْتَخْدِمُ تِلِسْكُوبًا صَغِيرًا لِمُرَاقَبَةِ القَمَرِ وَالكَوَاكِبِ فِي اللَّيْلِ. يُؤْمِنُ أَحْمَدُ بِأَنَّ العِلْمَ وَالمَعْرِفَةَ هُمَا مِفْتَاحُ التَّقَدُّمِ وَالنَّجَاحِ." }
      ],
      3: [
        { title: "التِّكْنُولُوجِيَا وَالتَّعْلِيمُ", content: "شَهِدَ القَرْنُ الحَادِي وَالعِشْرُونَ تَطَوُّرًا هَائِلًا فِي مَجَالِ التِّكْنُولُوجِيَا التَّعْلِيمِيَّةِ. أَصْبَحَتِ الفُصُولُ الذَّكِيَّةُ وَالتَّعَلُّمُ الإِلِكْتُرُونِيُّ جُزْءًا لَا يَتَجَزَّأُ مِنَ العَمَلِيَّةِ التَّعْلِيمِيَّةِ. تُسَاعِدُ هَذِهِ التِّقْنِيَّاتُ الطُّلَّابَ عَلَى فَهْمِ المَفَاهِيمِ المُعَقَّدَةِ بِطَرِيقَةٍ تَفَاعُلِيَّةٍ وَمُمْتِعَةٍ. كَمَا تُتِيحُ لِلْمُعَلِّمِينَ إِمْكَانِيَّةَ تَخْصِيصِ التَّعْلِيمِ وَفْقًا لِاحْتِيَاجَاتِ كُلِّ طَالِبٍ عَلَى حِدَةٍ." },
        { title: "الطَّاقَةُ المُتَجَدِّدَةُ", content: "تُعَدُّ الطَّاقَةُ المُتَجَدِّدَةُ مِنْ أَهَمِّ الحُلُولِ لِمُوَاجَهَةِ تَحَدِّيَاتِ التَّغَيُّرِ المُنَاخِيِّ وَالحِفَاظِ عَلَى البِيئَةِ. تَشْمَلُ مَصَادِرُ الطَّاقَةِ المُتَجَدِّدَةِ الطَّاقَةَ الشَّمْسِيَّةَ وَطَاقَةَ الرِّيَاحِ وَالطَّاقَةَ المَائِيَّةَ. تَسْتَثْمِرُ العَدِيدُ مِنَ الدُّوَلِ مِلْيَارَاتِ الدُّولَارَاتِ فِي تَطْوِيرِ هَذِهِ التِّقْنِيَّاتِ لِتَقْلِيلِ الاِعْتِمَادِ عَلَى الوَقُودِ الأُحْفُورِيِّ وَخَفْضِ انْبِعَاثَاتِ الكَرْبُونِ." }
      ],
      4: [
        { title: "الذَّكَاءُ الاِصْطِنَاعِيُّ وَمُسْتَقْبَلُ البَشَرِيَّةِ", content: "يُمَثِّلُ الذَّكَاءُ الاِصْطِنَاعِيُّ نَقْلَةً نَوْعِيَّةً فِي تَارِيخِ التِّكْنُولُوجِيَا، حَيْثُ يُحَاكِي قُدْرَاتِ العَقْلِ البَشَرِيِّ فِي التَّعَلُّمِ وَالاِسْتِنْتَاجِ وَحَلِّ المُشْكِلَاتِ. تَتَنَوَّعُ تَطْبِيقَاتُهُ مِنَ الطِّبِّ وَالهَنْدَسَةِ إِلَى التَّعْلِيمِ وَالفُنُونِ. وَرَغْمَ الفَوَائِدِ الهَائِلَةِ الَّتِي يُقَدِّمُهَا، إِلَّا أَنَّهُ يُثِيرُ تَسَاؤُلَاتٍ أَخْلَاقِيَّةً وَاجْتِمَاعِيَّةً مُهِمَّةً حَوْلَ مُسْتَقْبَلِ العَمَلِ وَالخُصُوصِيَّةِ وَالأَمَانِ السَّيْبَرَانِيِّ." },
        { title: "الحَضَارَةُ الإِسْلَامِيَّةُ وَإِسْهَامَاتُهَا العِلْمِيَّةُ", content: "أَسْهَمَتِ الحَضَارَةُ الإِسْلَامِيَّةُ إِسْهَامَاتٍ جَوْهَرِيَّةً فِي تَقَدُّمِ العُلُومِ وَالمَعَارِفِ الإِنْسَانِيَّةِ عَبْرَ التَّارِيخِ. فَقَدْ بَرَعَ العُلَمَاءُ المُسْلِمُونَ فِي الرِّيَاضِيَّاتِ وَالفَلَكِ وَالطِّبِّ وَالكِيمْيَاءِ وَالفَلْسَفَةِ. أَسَّسُوا بُيُوتَ الحِكْمَةِ وَالمَكْتَبَاتِ الضَّخْمَةَ، وَتَرْجَمُوا التُّرَاثَ اليُونَانِيَّ وَالفَارِسِيَّ وَالهِنْدِيَّ، مُضِيفِينَ إِلَيْهِ اكْتِشَافَاتِهِمْ وَابْتِكَارَاتِهِمُ الأَصِيلَةَ الَّتِي أَثَّرَتْ عَلَى النَّهْضَةِ الأُورُوبِّيَّةِ." }
      ]
    };

    // تشجيع (مختصر)
    this.encouragements = {
      start: [{title:"🌟 أنت قادر على التميز!", text:"القراءة مفتاح المعرفة، وأنت تملك هذا المفتاح. ابدأ رحلتك نحو التفوق!"}],
      progress: [{title:"🎯 أداء رائع!", text:"تقدمك ملحوظ ومستمر. استمر!"}],
      complete: [{title:"🎉 مبروك! أكملت النص!", text:"أداء استثنائي!"}]
    };

    this.currentLevel = 1;
    this.currentTextIndex = 0;
    this.currentWordIndex = 0;
    this.isReading = false;
    this.startTime = null;
    this.timer = null;
    this.elapsedTime = 0;
    this.words = [];

    // Speech synthesis
    this.speechSynth = window.speechSynthesis;
    this.currentUtterance = null;
    this.isAudioReading = false;
    this.audioWordIndex = 0;
    this.audioTimer = null;

    // Progress
    this.progressData = JSON.parse(localStorage.getItem('progressData') || '[]');
    this.chart = null;

    // ✅ خريطة الملفات الصوتية
    this.audioMap = {
      1: { 0: 'audio/luvvoice.com-20250829-FYw1fI.mp3', 1: 'audio/luvvoice.com-20250829-GbpwvG.mp3' },
      2: { 0: 'audio/luvvoice.com-20250829-lDPtdq.mp3', 1: 'audio/luvvoice.com-20250829-lN0xMU.mp3' },
      3: { 0: 'audio/luvvoice.com-20250829-nngwau.mp3', 1: 'audio/luvvoice.com-20250829-zYDQwp.mp3' },
      4: { 0: 'audio/luvvoice.com-20250829-Wu9epC.mp3', 1: 'audio/luvvoice.com-20250829-Nk4JdQ.mp3' }
    };

    this.initializeElements();
    this.loadStats();
    this.setupEventListeners();
    this.updateText();
    this.updateEncouragement('start');
    this.initializeChart();
    this.updateAchievements();
  }

  initializeElements() {
    this.elements = {
      levelButtons: document.querySelectorAll('.level-button'),
      textSelect: document.getElementById('textSelect'),
      readingText: document.getElementById('readingText'),
      startBtn: document.getElementById('startBtn'),
      pauseBtn: document.getElementById('pauseBtn'),
      resetBtn: document.getElementById('resetBtn'),
      progressBar: document.getElementById('progressBar'),
      progressText: document.getElementById('progressText'),
      wordsRead: document.getElementById('wordsRead'),
      readingSpeed: document.getElementById('readingSpeed'),
      accuracy: document.getElementById('accuracy'),
      level: document.getElementById('level'),
      timerDisplay: document.getElementById('timerDisplay'),
      timerCircle: document.getElementById('timerCircle'),
      testAudioBtn: document.getElementById('testAudioBtn'),
      playAudioBtn: document.getElementById('playAudioBtn'),
      pauseAudioBtn: document.getElementById('pauseAudioBtn'),
      stopAudioBtn: document.getElementById('stopAudioBtn'),
      repeatAudioBtn: document.getElementById('repeatAudioBtn'),
      speedRange: document.getElementById('speedRange'),
      speedValue: document.getElementById('speedValue'),
      pitchRange: document.getElementById('pitchRange'),
      pitchValue: document.getElementById('pitchValue'),
      volumeRange: document.getElementById('volumeRange'),
      volumeValue: document.getElementById('volumeValue'),
      highlightWords: document.getElementById('highlightWords'),
      autoScroll: document.getElementById('autoScroll'),
      slowMode: document.getElementById('slowMode'),
      audioIndicator: document.getElementById('audioIndicator'),
      // ✅ مرجع مشغل الصوت
      audioPlayer: document.getElementById('audioPlayer'),
      totalSessions: document.getElementById('totalSessions'),
      totalWords: document.getElementById('totalWords'),
      avgSpeed: document.getElementById('avgSpeed'),
      bestSpeed: document.getElementById('bestSpeed'),
      totalTime: document.getElementById('totalTime'),
      clearStats: document.getElementById('clearStats'),
      encouragementTitle: document.getElementById('encouragementTitle'),
      encouragementText: document.getElementById('encouragementText'),
      progressChart: document.getElementById('progressChart'),
      achievementBadges: document.getElementById('achievementBadges')
    };
  }

  setupEventListeners() {
    this.elements.levelButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => this.selectLevel(index + 1));
    });

    this.elements.textSelect.addEventListener('change', () => {
      this.currentTextIndex = parseInt(this.elements.textSelect.value);
      this.updateText(); this.reset(); this.stopAudio();
    });

    this.elements.startBtn.addEventListener('click', () => this.startReading());
    this.elements.pauseBtn.addEventListener('click', () => this.pauseReading());
    this.elements.resetBtn.addEventListener('click', () => this.reset());

    // الصوتيات
    this.elements.testAudioBtn.addEventListener('click', () => this.testAudio());
    this.elements.playAudioBtn.addEventListener('click', () => this.startAudioReading());
    this.elements.pauseAudioBtn.addEventListener('click', () => {
      const a = this.elements.audioPlayer;
      if (!a.paused && !a.ended && this.isAudioReading) this.pauseAudioFile();
      else this.pauseAudio();
    });
    this.elements.stopAudioBtn.addEventListener('click', () => {
      const a = this.elements.audioPlayer;
      if (!a.paused || a.currentTime > 0) this.stopAudioFile();
      else this.stopAudio();
    });
    this.elements.repeatAudioBtn.addEventListener('click', () => {
      const a = this.elements.audioPlayer;
      if (this.isAudioReading && !a.paused && isFinite(a.duration) && a.duration > 0) this.repeatSentenceFromFile();
      else this.repeatCurrentSentence();
    });

    this.elements.speedRange.addEventListener('input', (e) => this.elements.speedValue.textContent = e.target.value + 'x');
    this.elements.pitchRange.addEventListener('input', (e) => this.elements.pitchValue.textContent = e.target.value);
    this.elements.volumeRange.addEventListener('input', (e) => this.elements.volumeValue.textContent = Math.round(e.target.value*100) + '%');

    this.elements.clearStats.addEventListener('click', () => this.clearStats());

    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space' && !e.target.matches('input, textarea, select')) {
        e.preventDefault(); this.isReading ? this.pauseReading() : this.startReading();
      } else if (e.code === 'Escape') {
        this.reset(); this.stopAudio();
      } else if (e.code === 'KeyA' && e.ctrlKey) {
        e.preventDefault(); this.isAudioReading ? this.pauseAudio() : this.startAudioReading();
      }
    });
  }

  selectLevel(level) {
    this.currentLevel = level; this.currentTextIndex = 0;
    this.elements.levelButtons.forEach((btn, i) => btn.classList.toggle('active', i + 1 === level));
    this.elements.level.textContent = level;
    this.updateTextOptions(); this.updateText(); this.reset(); this.stopAudio(); this.updateEncouragement('start');
  }

  updateTextOptions() {
    const texts = this.texts[this.currentLevel];
    this.elements.textSelect.innerHTML = '';
    texts.forEach((t, i) => {
      const opt = document.createElement('option'); opt.value = i; opt.textContent = t.title;
      this.elements.textSelect.appendChild(opt);
    });
  }

  updateText() {
    const currentText = this.texts[this.currentLevel][this.currentTextIndex];
    if (!currentText) return;
    this.words = currentText.content.split(' ');
    this.elements.readingText.innerHTML = currentText.content;
    this.elements.readingText.className = `reading-text level-${this.currentLevel}`;
    this.updateProgress();
  }

  startReading() {
    if (this.isReading) return;
    this.isReading = true;
    this.startTime = Date.now() - this.elapsedTime;
    this.elements.startBtn.disabled = true;
    this.elements.pauseBtn.disabled = false;
    this.startTimer();
    this.highlightCurrentWord();
  }

  pauseReading() {
    if (!this.isReading) return;
    this.isReading = false;
    this.elements.startBtn.disabled = false;
    this.elements.pauseBtn.disabled = true;
    clearInterval(this.timer);
    this.saveSession();
    this.updateEncouragement('progress');
  }

  reset() {
    this.isReading = false; this.currentWordIndex = 0; this.elapsedTime = 0; this.startTime = null;
    this.elements.startBtn.disabled = false; this.elements.pauseBtn.disabled = true;
    clearInterval(this.timer); this.updateText(); this.updateProgress(); this.updateTimer(); this.updateTimerCircle();
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.elapsedTime = Date.now() - this.startTime;
      this.updateTimer(); this.updateTimerCircle(); this.updateReadingSpeed();
      if (Math.random() < 0.4 && this.currentWordIndex < this.words.length - 1) {
        this.currentWordIndex++; this.highlightCurrentWord(); this.updateProgress();
        if (this.currentWordIndex >= this.words.length - 1) this.completeReading();
      }
    }, 800);
  }

  highlightCurrentWord() {
    const highlighted = this.words.map((w,i)=> i===this.currentWordIndex? `<span class="word-highlight">${w}</span>` : w);
    this.elements.readingText.innerHTML = highlighted.join(' ');
    if (this.elements.autoScroll.checked) {
      const el = this.elements.readingText.querySelector('.word-highlight');
      if (el) el.scrollIntoView({behavior:'smooth', block:'center'});
    }
  }

  updateProgress() {
    const progress = this.words.length ? (this.currentWordIndex / this.words.length) * 100 : 0;
    this.elements.progressBar.style.width = `${progress}%`;
    this.elements.progressText.textContent = `${this.currentWordIndex} / ${this.words.length}`;
    this.elements.wordsRead.textContent = this.currentWordIndex;
  }

  updateTimer() {
    const m = Math.floor(this.elapsedTime / 60000);
    const s = Math.floor((this.elapsedTime % 60000) / 1000);
    this.elements.timerDisplay.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }

  updateTimerCircle() {
    const maxTime = 600000;
    const progress = Math.min(this.elapsedTime / maxTime, 1);
    const circumference = 2 * Math.PI * 50;
    const offset = circumference - (progress * circumference);
    this.elements.timerCircle.style.strokeDasharray = circumference;
    this.elements.timerCircle.style.strokeDashoffset = offset;
  }

  updateReadingSpeed() {
    if (this.elapsedTime > 0) {
      const minutes = this.elapsedTime / 60000;
      const speed = Math.round(this.currentWordIndex / minutes);
      this.elements.readingSpeed.textContent = speed || 0;
    }
  }

  completeReading() {
    this.pauseReading();
    this.updateEncouragement('complete'); this.updateAchievements();
    setTimeout(()=> alert("🎉 مبروك! أكملت النص!"), 500);
  }

  // ------- الصوت من الملفات -------
  getAudioSrc() {
    const level = this.currentLevel, idx = this.currentTextIndex;
    const levelMap = this.audioMap[level] || {};
    return levelMap[idx] || null;
  }

  startAudioReading() {
    const currentText = this.texts[this.currentLevel][this.currentTextIndex];
    if (!currentText) { alert('⚠️ لا يوجد نص للقراءة!'); return; }
    const src = this.getAudioSrc();
    if (src) { this.playAudioFile(src); return; }
    this.startSpeechSynthesisFallback();
  }

  playAudioFile(src) {
    const audio = this.elements.audioPlayer;
    audio.src = src; audio.currentTime = 0;
    this.isAudioReading = true;
    this.elements.playAudioBtn.disabled = true;
    this.elements.pauseAudioBtn.disabled = false;
    this.elements.audioIndicator.classList.remove('hidden');

    const words = this.words.length ? this.words : (this.texts[this.currentLevel][this.currentTextIndex].content.split(' '));
    this.words = words;
    if (this.audioTimer) clearInterval(this.audioTimer);

    const startHighlighting = () => {
      if (!isFinite(audio.duration) || audio.duration === 0) return;
      const msPerWord = (audio.duration * 1000) / words.length;
      this.audioWordIndex = 0;
      if (this.audioTimer) clearInterval(this.audioTimer);
      this.audioTimer = setInterval(() => {
        if (!this.isAudioReading) { clearInterval(this.audioTimer); return; }
        const idx = Math.min(words.length - 1, Math.floor((audio.currentTime * 1000) / msPerWord));
        this.audioWordIndex = idx;
        this.highlightAudioWord(idx);
      }, 120);
    };

    audio.onloadedmetadata = () => startHighlighting();
    audio.onplay = () => { if (isFinite(audio.duration) && audio.duration > 0) startHighlighting(); };
    audio.onended = () => { this.stopAudio(); };
    audio.onerror = () => { alert('تعذّر تشغيل ملف الصوت. سيتم استخدام القراءة الآلية.'); this.stopAudio(); this.startSpeechSynthesisFallback(); };

    audio.play().catch(()=> alert('يرجى الضغط على زر التشغيل بعد تفاعل مع الصفحة.'));
  }

  pauseAudioFile() {
    const audio = this.elements.audioPlayer;
    if (!audio.paused) audio.pause();
    this.isAudioReading = false;
    this.elements.playAudioBtn.disabled = false;
    this.elements.pauseAudioBtn.disabled = true;
    this.elements.audioIndicator.classList.add('hidden');
    if (this.audioTimer) clearInterval(this.audioTimer);
  }

  stopAudioFile() {
    const audio = this.elements.audioPlayer;
    audio.pause(); audio.currentTime = 0;
    this.isAudioReading = false;
    this.elements.playAudioBtn.disabled = false;
    this.elements.pauseAudioBtn.disabled = true;
    this.elements.audioIndicator.classList.add('hidden');
    if (this.audioTimer) clearInterval(this.audioTimer);
    this.updateText();
  }

  repeatSentenceFromFile() {
    const audio = this.elements.audioPlayer;
    if (!this.words || this.words.length === 0 || !isFinite(audio.duration) || audio.duration === 0) return;
    const words = this.words;
    const currentIndex = this.audioWordIndex || 0;

    const fullText = words.join(' ');
    const sentences = fullText.split(/(?<=[.!؟])\s+/);
    let cum = 0, startW = 0, endW = words.length - 1;
    for (let s of sentences) {
      const count = s.trim().split(/\s+/).filter(Boolean).length;
      const sStart = cum, sEnd = cum + count - 1;
      if (currentIndex >= sStart && currentIndex <= sEnd) { startW = sStart; endW = sEnd; break; }
      cum += count;
    }

    const msPerWord = (audio.duration * 1000) / words.length;
    const startTime = (startW * msPerWord) / 1000;
    const endTime = Math.min(audio.duration, ((endW + 1) * msPerWord) / 1000);
    audio.currentTime = startTime;
    audio.play().then(() => {
      if (this.audioTimer) clearInterval(this.audioTimer);
      this.isAudioReading = true;
      this.elements.playAudioBtn.disabled = true;
      this.elements.pauseAudioBtn.disabled = false;
      this.elements.audioIndicator.classList.remove('hidden');
      const guard = setInterval(() => {
        if (audio.currentTime >= endTime || audio.paused) { clearInterval(guard); audio.pause(); }
      }, 50);
    });
  }

  // ------- تمييز أثناء TTS -------
  startWordHighlighting() {
    const baseWordsPerSecond = 2.5;
    const rate = this.elements.slowMode.checked ? parseFloat(this.elements.speedRange.value) * 0.6 : parseFloat(this.elements.speedRange.value);
    const wordsPerSecond = baseWordsPerSecond * rate;
    const wordInterval = 1000 / wordsPerSecond;
    this.audioWordIndex = 0;
    this.audioTimer = setInterval(() => {
      if (this.audioWordIndex < this.words.length && this.isAudioReading) {
        this.highlightAudioWord(this.audioWordIndex);
        this.audioWordIndex++;
      } else {
        clearInterval(this.audioTimer);
      }
    }, wordInterval);
  }

  highlightAudioWord(wordIndex) {
    const highlighted = this.words.map((w,i)=> i===wordIndex? `<span class="word-highlight">${w}</span>` : w);
    this.elements.readingText.innerHTML = highlighted.join(' ');
    if (this.elements.autoScroll.checked) {
      const el = this.elements.readingText.querySelector('.word-highlight');
      if (el) el.scrollIntoView({behavior:'smooth', block:'center'});
    }
  }

  pauseAudio() {
    this.isAudioReading = false;
    this.speechSynth.pause();
    clearInterval(this.audioTimer);
    this.elements.playAudioBtn.disabled = false;
    this.elements.pauseAudioBtn.disabled = true;
    this.elements.audioIndicator.classList.add('hidden');
  }

  stopAudio() {
    this.isAudioReading = false;
    this.speechSynth.cancel();
    clearInterval(this.audioTimer);
    this.audioWordIndex = 0;
    this.elements.playAudioBtn.disabled = false;
    this.elements.pauseAudioBtn.disabled = true;
    this.elements.audioIndicator.classList.add('hidden');
    this.updateText();
  }

  repeatCurrentSentence() {
    const currentText = this.texts[this.currentLevel][this.currentTextIndex];
    if (!currentText) return;
    const sentences = currentText.content.split(/[.!؟]/);
    let currentSentence = sentences[0];
    if (this.audioWordIndex > 0) {
      const wordsUpToCurrent = this.words.slice(0, this.audioWordIndex).join(' ');
      for (let i = 0; i < sentences.length; i++) {
        if (sentences[i] && wordsUpToCurrent.includes(sentences[i].trim().split(' ').slice(-3).join(' '))) {
          currentSentence = sentences[i]; break;
        }
      }
    }
    const utterance = new SpeechSynthesisUtterance(currentSentence);
    utterance.lang = 'ar-SA';
    let rate = parseFloat(this.elements.speedRange.value);
    if (this.elements.slowMode.checked) rate = Math.max(0.3, rate * 0.5);
    utterance.rate = rate;
    utterance.pitch = parseFloat(this.elements.pitchRange.value);
    utterance.volume = parseFloat(this.elements.volumeRange.value);
    const voices = this.speechSynth.getVoices();
    const arabicVoice = voices.find(v => v.lang.includes('ar') || v.name.toLowerCase().includes('arabic'));
    if (arabicVoice) utterance.voice = arabicVoice;
    this.speechSynth.speak(utterance);
  }

  startSpeechSynthesisFallback() {
    const currentText = this.texts[this.currentLevel][this.currentTextIndex];
    this.speechSynth.cancel();
    const startSpeech = () => {
      this.words = currentText.content.split(' ');
      this.audioWordIndex = 0;
      this.isAudioReading = true;
      this.elements.playAudioBtn.disabled = true;
      this.elements.pauseAudioBtn.disabled = false;
      this.elements.audioIndicator.classList.remove('hidden');
      this.currentUtterance = new SpeechSynthesisUtterance(currentText.content);
      let rate = parseFloat(this.elements.speedRange.value);
      if (this.elements.slowMode.checked) rate = Math.max(0.3, rate * 0.5);
      this.currentUtterance.rate = rate;
      this.currentUtterance.pitch = parseFloat(this.elements.pitchRange.value);
      this.currentUtterance.volume = parseFloat(this.elements.volumeRange.value);
      const voices = this.speechSynth.getVoices();
      let selectedVoice = null;
      const patterns = [/ar.*sa/i,/ar.*eg/i,/ar.*ae/i,/ar/i,/arabic/i];
      for (const p of patterns){ selectedVoice = voices.find(v=> p.test(v.lang)||p.test(v.name)); if (selectedVoice) break; }
      if (selectedVoice){ this.currentUtterance.voice = selectedVoice; this.currentUtterance.lang = selectedVoice.lang; }
      else { this.currentUtterance.lang = 'ar-SA'; }
      this.currentUtterance.onstart = () => { if (this.elements.highlightWords.checked) this.startWordHighlighting(); };
      this.currentUtterance.onend = () => this.stopAudio();
      this.currentUtterance.onerror = () => { alert('خطأ في القراءة الصوتية.'); this.stopAudio(); };
      try { this.speechSynth.speak(this.currentUtterance); } catch { alert('تعذّر تشغيل النطق الآلي.'); this.stopAudio(); }
    };
    const voices = this.speechSynth.getVoices();
    if (voices.length === 0) { this.speechSynth.onvoiceschanged = () => startSpeech(); setTimeout(startSpeech, 1000); }
    else startSpeech();
  }

  // ------- إحصائيات مختصرة -------
  saveSession() {
    const stats = this.getStats();
    const minutes = this.elapsedTime / 60000;
    const speed = minutes > 0 ? Math.round(this.currentWordIndex / minutes) : 0;
    stats.totalSessions++; stats.totalWords += this.currentWordIndex; stats.totalTime += Math.round(minutes);
    stats.speeds.push(speed); stats.bestSpeed = Math.max(stats.bestSpeed, speed);
    this.progressData.push({date:new Date().toLocaleDateString('ar-SA'), speed, words:this.currentWordIndex, level:this.currentLevel, accuracy:100});
    if (this.progressData.length > 30) this.progressData = this.progressData.slice(-30);
    localStorage.setItem('readingStats', JSON.stringify(stats));
    localStorage.setItem('progressData', JSON.stringify(this.progressData));
    this.updateStatsDisplay(); this.updateChart();
  }

  getStats() {
    const def = { totalSessions:0, totalWords:0, totalTime:0, speeds:[], bestSpeed:0 };
    const saved = localStorage.getItem('readingStats');
    return saved ? JSON.parse(saved) : def;
  }

  loadStats(){ this.updateStatsDisplay(); }

  updateStatsDisplay() {
    const s = this.getStats();
    const avgSpeed = s.speeds.length ? Math.round(s.speeds.reduce((a,b)=>a+b,0)/s.speeds.length) : 0;
    this.elements.totalSessions.textContent = s.totalSessions;
    this.elements.totalWords.textContent = s.totalWords.toLocaleString('ar-SA');
    this.elements.totalTime.textContent = s.totalTime + 'د';
    this.elements.avgSpeed.textContent = avgSpeed;
    this.elements.bestSpeed.textContent = s.bestSpeed;
    const accuracy = Math.min(100, Math.max(85, 95 + (avgSpeed - 100) * 0.1));
    this.elements.accuracy.textContent = Math.round(accuracy) + '%';
  }

  clearStats() {
    if (confirm('هل أنت متأكد من مسح جميع الإحصائيات؟')) {
      localStorage.removeItem('readingStats'); localStorage.removeItem('progressData');
      this.progressData = []; this.updateStatsDisplay(); this.updateChart(); this.updateAchievements();
      alert('تم المسح بنجاح!');
    }
  }

  updateEncouragement(type) {
    const arr = this.encouragements[type];
    const e = arr[Math.floor(Math.random()*arr.length)];
    this.elements.encouragementTitle.textContent = e.title;
    this.elements.encouragementText.textContent = e.text;
  }

  initializeChart() {
    const ctx = this.elements.progressChart.getContext('2d');
    this.chart = new Chart(ctx, {
      type:'line',
      data:{ labels:[], datasets:[{ label:'سرعة القراءة (كلمة/دقيقة)', data:[], borderColor:'#667eea', backgroundColor:'rgba(102,126,234,0.1)', borderWidth:3, fill:true, tension:0.4, pointBackgroundColor:'#667eea', pointBorderColor:'#fff', pointBorderWidth:2, pointRadius:6 }]},
      options:{ responsive:true, maintainAspectRatio:false,
        plugins:{ legend:{ labels:{ font:{ family:'Cairo', size:14, weight:'bold' }}}},
        scales:{ y:{ beginAtZero:true, title:{display:true, text:'كلمة/دقيقة', font:{family:'Cairo', size:12, weight:'bold'}}},
                 x:{ title:{display:true, text:'الجلسات', font:{family:'Cairo', size:12, weight:'bold'}}}}
      }
    });
    this.updateChart();
  }

  updateChart() {
    if (!this.chart) return;
    const labels = this.progressData.map((_,i)=>`جلسة ${i+1}`);
    const speeds = this.progressData.map(s=>s.speed);
    this.chart.data.labels = labels;
    this.chart.data.datasets[0].data = speeds;
    this.chart.update();
  }

  updateAchievements() {
    const s = this.getStats();
    const ach = [];
    if (s.totalSessions >= 1) ach.push({icon:'🎯',title:'أول خطوة',desc:'أكملت جلستك الأولى'});
    if (s.bestSpeed >= 50) ach.push({icon:'⚡',title:'سريع',desc:'وصلت لـ 50 كلمة/دقيقة'});
    const wrap = this.elements.achievementBadges;
    wrap.innerHTML = '';
    if (ach.length === 0) { wrap.innerHTML = '<p class="text-gray-500 text-center col-span-2">ابدأ القراءة لكسب الإنجازات! 🎯</p>'; return; }
    ach.forEach(a => {
      const d = document.createElement('div');
      d.className = 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-3 rounded-xl text-center transform hover:scale-105 transition-all';
      d.innerHTML = `<div class="text-2xl mb-1">${a.icon}</div><div class="font-bold text-sm">${a.title}</div><div class="text-xs opacity-90">${a.desc}</div>`;
      wrap.appendChild(d);
    });
  }

  // اختبار الصوت
  testAudio() {
    this.speechSynth.cancel();
    const u = new SpeechSynthesisUtterance('مرحباً، هذا اختبار للصوت العربي');
    u.rate = 0.8; u.pitch = 1.0; u.volume = 1.0; u.lang = 'ar-SA';
    const voices = this.speechSynth.getVoices();
    const ar = voices.find(v => v.lang.includes('ar') || v.name.toLowerCase().includes('arabic'));
    if (ar) u.voice = ar;
    u.onstart = () => { this.elements.testAudioBtn.textContent = '🔊 يعمل الصوت!'; this.elements.testAudioBtn.style.background='linear-gradient(145deg,#48bb78,#38a169)'; };
    u.onend = () => { setTimeout(()=>{ this.elements.testAudioBtn.textContent='🔊 اختبار الصوت'; this.elements.testAudioBtn.style.background=''; }, 1500); };
    u.onerror = () => { alert('خطأ في اختبار الصوت'); this.elements.testAudioBtn.textContent='❌ خطأ في الصوت'; };
    try { this.speechSynth.speak(u); } catch { alert('غير مدعوم'); }
  }
}

document.addEventListener('DOMContentLoaded', ()=> new SmartReadingPlatform());
