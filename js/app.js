let nav__bar = document.querySelector('.nav__bar')
 
document.querySelector('#menu__btn').onclick = () =>{
    nav__bar.classList.toggle('active');
}

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true,
    normalizeScroll: true,
});

document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll('.nav__bar a');
    const navBar = document.querySelector('.nav__bar');

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Отключаем стандартное поведение якорных ссылок

            const targetId = link.getAttribute('href'); // Получаем href (например, "#section-id")
            if (targetId && targetId.startsWith("#")) {
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Используем селектор в scrollTo
                    gsap.to(window, {
                        duration: 1.5,
                        scrollTo: targetId, // Передаём селектор
                        ease: "power2.out",
                    });
                } else {
                    console.warn(`Элемент с ID ${targetId} не найден.`);
                }
            }

            // Закрываем мобильное меню, если оно открыто
            if (navBar && navBar.classList.contains('active')) {
                navBar.classList.remove('active');
            }
        });
    });
});



gsap.fromTo('.hero-section', {opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
        trigger: '.hero-section',
        start: 'center',
        end: '820',
        scrub: true
    }
})

let itemsL = gsap.utils.toArray('.gallary__left .gallary__item')

itemsL.forEach( item => {
    gsap.fromTo(item, {x: -100, opacity: 0}, {
        opacity: 1, x:0,
        scrollTrigger: {
            trigger: item,
            start: '-850',
            end: '-100',
            scrub: true,
        }
    })
})

let itemsR = gsap.utils.toArray('.gallary__right .gallary__item')

itemsR.forEach( item => {
    gsap.fromTo(item, {x: 100, opacity: 0}, {
        opacity: 1, x:0,
        scrollTrigger: {
            trigger: item,
            start: '-850',
            end: '-100',
            scrub: true,
        }
    })
})



let images = document.querySelectorAll('.image');
let gallary__items = document.querySelectorAll('.gallary__item');

images.forEach((image, index) => {
    image.onclick = () => {
        gallary__items[index].classList.toggle('active');
    };
});




const songSets = [
    [
        { src: "songs/Geometry-of-Darkness/ПРИТЧА ВО ЯЗЫЦЕХ ИНТРО.mp3", title: "ПРИТЧА ВО ЯЗЫЦЕХ ИНТРО"},
        { src: "songs/Geometry-of-Darkness/шерше ля фам.mp3", title: "шерше ля фам"},
        { src: "songs/Geometry-of-Darkness/аморе аморе.mp3", title: "аморе аморе"},
        { src: "songs/Geometry-of-Darkness/в джазе одни девчонки.mp3", title: "в джазе одни девчонки"},
        { src: "songs/Geometry-of-Darkness/ветрянка.mp3", title: "ветрянка"},
        { src: "songs/Geometry-of-Darkness/время вернуться назад.mp3", title: "время вернуться назад"},
        { src: "songs/Geometry-of-Darkness/геометрия тьмы.mp3", title: "геометрия тьмы"},
        { src: "songs/Geometry-of-Darkness/герметика.mp3", title: "герметика"},
        { src: "songs/Geometry-of-Darkness/докучные сказки докучные сказки докучные.mp3", title: "докучные сказки"},
        { src: "songs/Geometry-of-Darkness/люди хтонь небытие.mp3", title: "люди хтонь небытие"},
        { src: "songs/Geometry-of-Darkness/нежное электричество.mp3", title: "нежное электричество"},
        { src: "songs/Geometry-of-Darkness/Отказываю Небу.mp3", title: "Отказываю Небу"},
        { src: "songs/Geometry-of-Darkness/претор был прав.mp3", title: "претор был прав"},
        { src: "songs/Geometry-of-Darkness/радуга земного тяготения.mp3", title: "радуга земного тяготения"},
        { src: "songs/Geometry-of-Darkness/что отличает птицу от летучей мыши.mp3", title: "что отличает птицу от летучей мыши"},
        { src: "songs/Geometry-of-Darkness/шёпот далёких звёзд.mp3", title: "шёпот далёких звёзд"},
        { src: "songs/Geometry-of-Darkness/эдельвейс.mp3", title: "эдельвейс"},
        { src: "songs/Geometry-of-Darkness/а что если смерть существо.mp3", title: "а что если смерть существо"},
        { src: "songs/Geometry-of-Darkness/звёзды все принадлежат богам.mp3", title: "звёзды все принадлежат богам"},
        { src: "songs/Geometry-of-Darkness/я верю только в неизбежность зла.mp3", title: "я верю только в неизбежность зла"},
        { src: "songs/Geometry-of-Darkness/ВРЕМЯ И КАМУШКИ АУТРО.mp3", title: "ВРЕМЯ И КАМУШКИ АУТРО"},
    ],
    [
        { src: "songs/my-beautiful-void/pyrokinesis_Ничего_не_помню_ничего_не_чувствую.mp3", title: "Ничего не помню ничего не чувствую"},
        { src: "songs/my-beautiful-void/pyrokinesis - My Beautiful Madness.mp3", title: "My Beautiful Madness"},
        { src: "songs/my-beautiful-void/pyrokinesis - Ангелы не летают.mp3", title: "Ангелы не летают"},
        { src: "songs/my-beautiful-void/pyrokinesis - Виа Долороса.mp3", title: "Виа Долороса"},
        { src: "songs/my-beautiful-void/pyrokinesis - Все розы попадают в ад.mp3", title: "Все розы попадают в ад"},
        { src: "songs/my-beautiful-void/pyrokinesis - Гепатит спид сифилис.mp3", title: "Гепатит спид сифилис"},
        { src: "songs/my-beautiful-void/pyrokinesis - Дети бабочек.mp3", title: "Дети бабочек"},
        { src: "songs/my-beautiful-void/pyrokinesis - Моя милая пустота.mp3", title: "Моя милая пустота"},
        { src: "songs/my-beautiful-void/pyrokinesis - Пальчики паноптикум.mp3", title: "Пальчики паноптикум"},
        { src: "songs/my-beautiful-void/pyrokinesis - Почему да потому что.mp3", title: "Почему да потому что"},
        { src: "songs/my-beautiful-void/pyrokinesis - Сигаретка без кнопки.mp3", title: "Сигаретка без кнопки"},
        { src: "songs/my-beautiful-void/pyrokinesis - Сколопендра.mp3", title: "Сколопендра"},
        { src: "songs/my-beautiful-void/pyrokinesis - Цветами радуги.mp3", title: "Цветами радуги"},
        { src: "songs/my-beautiful-void/pyrokinesis - Цветочек зла.mp3", title: "Цветочек зла"},
        { src: "songs/my-beautiful-void/pyrokinesis - Чёрное солнышко.mp3", title: "Чёрное солнышко"},
        { src: "songs/my-beautiful-void/pyrokinesis_В_городе_где_гаснут_фонари.mp3", title: "В городе где гаснут фонари"},
        { src: "songs/my-beautiful-void/pyrokinesis_Как_сатурн_пожирает_своих_детей.mp3", title: "Как сатурн пожирает своих детей"},

    ],
    [
        { src: "songs/feed-demons/pyrokinesis - СИМУЛЯКР.mp3", title: "СИМУЛЯКР"},
        { src: "songs/feed-demons/pyrokinesis - Ад пуст, все бесы здесь", title: "Ад пуст, все бесы здесь"},
        { src: "songs/feed-demons/pyrokinesis - Не время для драконов.mp3", title: "Не время для драконов"},
        { src: "songs/feed-demons/pyrokinesis - Ничего святого.mp3", title: "Ничего святого"},
        { src: "songs/feed-demons/pyrokinesis - Самое грустное диско.mp3", title: "Самое грустное диско"},
        { src: "songs/feed-demons/pyrokinesis - Чёрная дыра.mp3", title: "Чёрная дыра"},
        { src: "songs/feed-demons/pyrokinesis_Корми_демонов_по_расписанию.mp3", title: "Корми демонов по расписанию"},
        { src: "songs/feed-demons/phyrokinesis - Цветы над черепами (feat. STED.D).mp3", title: "Цветы над черепами (feat. STED.D)"},

    ],
    [
        { src: "songs/eclipse/pyrokinesis - Танцуй полумесяц.mp3", title: "Танцуй полумесяц"},
        { src: "songs/eclipse/pyrokinesis - Твои шипы моё оружие.mp3", title: "Твои шипы моё оружие"},
        { src: "songs/eclipse/pyrokinesis - AMENE.mp3", title: "AMENE"},
        { src: "songs/eclipse/pyrokinesis - Девочка из Кони-Айленд.mp3", title: "Девочка из Кони-Айленд"},
        { src: "songs/eclipse/Pyrokinesis - Культура.mp3", title: "Культура"},
        { src: "songs/eclipse/pyrokinesis - Пепел и прах.mp3", title: "Пепел и прах"},
        { src: "songs/eclipse/pyrokinesis - Прикоснувшиеся к солнцу.mp3", title: "Прикоснувшиеся к солнцу"},
        { src: "songs/eclipse/pyrokinesis - стотысячекрылым.mp3", title: "стотысячекрылым"},

    ],
    [
        { src: "songs/spb-tea/pyrokinesis - Письмо и безразличие интро.mp3", title: "Письмо и безразличие интро"},
        { src: "songs/spb-tea/pyrokinesis - Абсолютно чёрное тело.mp3", title: "Абсолютно чёрное тело"},
        { src: "songs/spb-tea/pyrokinesis - Альма-матер.mp3", title: "Альма-матер"},
        { src: "songs/spb-tea/pyrokinesis - Веснушки.mp3", title: "Веснушки"},
        { src: "songs/spb-tea/pyrokinesis - Да что романтичного в птичках.mp3", title: "Да что романтичного в птичках"},
        { src: "songs/spb-tea/pyrokinesis - До последнего люмена.mp3", title: "До последнего люмена"},
        { src: "songs/spb-tea/pyrokinesis - Зависимость.mp3", title: "Зависимость"},
        { src: "songs/spb-tea/pyrokinesis - Нефть (Письмо Иосифу).mp3", title: "Нефть (Письмо Иосифу)"},
        { src: "songs/spb-tea/pyrokinesis - Питер, чай, не Франция.mp3", title: "Питер, чай, не Франция"},
        { src: "songs/spb-tea/pyrokinesis - Реквием по Жанне д'Арк.mp3", title: "Реквием по Жанне д'Арк"},
        { src: "songs/spb-tea/pyrokinesis - Чемпионы пепла.mp3", title: "Чемпионы пепла"},
        { src: "songs/spb-tea/pyrokinesis - Мискузи мадам аутро.mp3", title: "Мискузи мадам аутро"},
    ],
    [
        { src: "songs/acustic/PYROKINESIS_-_moya_devochka_soft-granzh.mp3", title: "моя девочка софт-гранж"},
        { src: "songs/acustic/Pyrokinesis_-_JEtojj_muze_nuzhny_mucheniki.mp3", title: "этой музе нужны мученики"},
        { src: "songs/acustic/Pyrokinesis_-_Iskusstvo_khujjnya.mp3", title: "Искусство-хуйня"},
        { src: "songs/acustic/pyrokinesis - мыльные пузыри.mp3", title: "мыльные пузыри"},
        { src: "songs/acustic/pyrokinesis - ганфайтер.mp3", title: "ганфайтер"},
        { src: "songs/acustic/Pyrokinesis - Восток Моей Юности.mp3", title: "Восток Моей Юности"},
        { src: "songs/acustic/pyrokinesis - бумажный феникс.mp3", title: "бумажный феникс"},
        { src: "songs/acustic/Pyrokinesis_-_YA_sharyu.mp3", title: "я шарю"},

    ],
    [
        { src: "songs/thorns-of-evolution/pyrokinesis - Терновый венец эволюции.mp3", title: "терновый венец эволюции"},
        { src: "songs/thorns-of-evolution/pyrokinesis - KERRIGAN.mp3", title: "KERRIGAN"},
        { src: "songs/thorns-of-evolution/pyrokinesis - ONI.mp3", title: "ONI"},
        { src: "songs/thorns-of-evolution/pyrokinesis - Останови меня.mp3", title: "Останови меня"},
        { src: "songs/thorns-of-evolution/pyrokinesis feat. Sted.d - Без промаха.mp3", title: "Без промаха"},
        { src: "songs/thorns-of-evolution/PYROKINESIS_- девочка оседлавшая молнию.mp3", title: "девочка оседлавшая молнию"},
        { src: "songs/thorns-of-evolution/PYROKINESIS_- Остановите меня.mp3", title: "Остановите меня"},
        { src: "songs/thorns-of-evolution/PYROKINESIS_-_ENIGMA.mp3", title: "_ENIGMA"},
        { src: "songs/thorns-of-evolution/PYROKINESIS_-_videoGAMEs_OVER.mp3", title: "videoGAMEs OVER"},
        { src: "songs/thorns-of-evolution/PYROKINESIS_-_КАДУЦИЙ.mp3", title: "КАДУЦИЙ"},
        { src: "songs/thorns-of-evolution/Pyrokinesis_Кто_Же_Перерезал_Небу_Горло.mp3", title: "Кто Же Перерезал Небу Горло"},

    ],
    [
        { src: "songs/roze/PYROKINESIS_-_BLACK ROZE GARROTE.mp3", title: "BLACK ROZE GARROTE"},
        { src: "songs/roze/PYROKINESIS_-_AVE MARIA.mp3", title: "AVE MARIA"},
        { src: "songs/roze/PYROKINESIS_-_deGenerationP.mp3", title: "deGenerationP"},
        { src: "songs/roze/PYROKINESIS_-_Jeanne dArc.mp3", title: "Jeanne dArc"},
        { src: "songs/roze/PYROKINESIS_-_Разбивай витрины.mp3", title: "Разбивай витрины"},
        { src: "songs/roze/PYROKINESIS_-_Роза Эмпирея.mp3", title: "Роза Эмпирея"},
        { src: "songs/roze/PYROKINESIS_feat_STEDD_-_Сага о маяках и скалах.mp3", title: "Сага о маяках и скалах"},

    ]
]

document.querySelectorAll('.gallary__item').forEach((item, index) => {
    const songSet = songSets[index];
    let currentSongIndex = 0;
    
    const audioElement = item.querySelector('audio');
    const progressBar = item.querySelector('#progress');
    const titleElement = item.querySelector('#song-title');
    const playPauseBtn = item.querySelector('#ctrlIcon');
    const forwardBtn = item.querySelector('#forward');
    const backwardBtn = item.querySelector('#backward');
    const mainCtrlIcon = item.querySelector('.ctrl-icon'); 


    function loadSong(songIndex) {
        const song = songSet[songIndex];
        audioElement.src = song.src;
        titleElement.textContent = song.title
        audioElement.load();
        playPauseBtn.classList.remove('fa-play');
        playPauseBtn.classList.add('fa-pause');        
    }

    function playPauseSong() {
        if (audioElement.paused) {
            audioElement.play();
            mainCtrlIcon.classList.remove('fa-play');
            mainCtrlIcon.classList.add('fa-pause');
            playPauseBtn.classList.remove('fa-play');
            playPauseBtn.classList.add('fa-pause');
        } else{
            mainCtrlIcon.classList.remove('fa-pause');
            mainCtrlIcon.classList.add('fa-play');
            audioElement.pause();
            playPauseBtn.classList.remove('fa-pause');
            playPauseBtn.classList.add('fa-play');
        }
    }

    if (mainCtrlIcon) {
        mainCtrlIcon.addEventListener('click', () => {
            item.classList.toggle('active');
            playPauseSong();
        });
    }

    function playNextSong() {
        currentSongIndex = (currentSongIndex + 1) % songSet.length;
        loadSong(currentSongIndex)
    }

    function playPreviousSong() {
        currentSongIndex = (currentSongIndex - 1 + songSet.length) % songSet.length;
        loadSong(currentSongIndex)
    }

    audioElement.ontimeupdate = () => {
        progressBar.max = audioElement.duration;
        progressBar.value = audioElement.currentTime;
    }

    progressBar.oninput = () => {
        audioElement.currentTime = progressBar.value;
    }

    playPauseBtn.onclick = playPauseSong;
    forwardBtn.onclick = playNextSong;
    backwardBtn.onclick = playPreviousSong;

    loadSong(currentSongIndex);
})

//Swiper
let sliderMain;
document.addEventListener("DOMContentLoaded", function() {
    sliderMain = new Swiper('.slider_main', {
        freeMode: true,
        centeredSlides: true,
        mousewheel: true,
        parallax: true,
        speed: 1000,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            680: {
                slidesPerView: 3,
                spaceBetween: 60
            }
        }
    });

});


document.querySelectorAll('.slider__item').forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle('opened')
    })
})

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: '.tour',
    start: 'top top',
    end: 'bottom bottom',
    onEnter: () => console.log('Вошли в секцию .tour'),
    onLeave: () => console.log('Покинули секцию .tour'),
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM загружен');
    const tour = document.querySelector('.tour');
    if (!tour) {
        console.error('.tour не найдена в DOM');
    } else {
        console.log('.tour найдена');
    }
});

//tour
const zSpacing = -1000;
let lastPos = zSpacing / 5;
const frames = Array.from(document.querySelectorAll('.frame'));

const zVals = [];

// Инициализация z-значений для всех кадров
frames.forEach((_, i) => {
    zVals.push(i * zSpacing);
});

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: ".tour",
    start: "top top",
    end: `+=${frames.length * 300}px`, 
    scrub: true,
    pin: true,
    onUpdate: (self) => {
        const progress = self.progress.toFixed(2);
        const top = progress * frames.length * 100; 
        const delta = lastPos - top;

        lastPos = top;

        frames.forEach(function(n, i) {
            
            zVals.push((i * zSpacing) + zSpacing)
            zVals[i] += delta * -10
            let frame = frames[i],
                    transform = `translateZ(${zVals[i]}px)`,
                    opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
            frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
        
            if (opacity == 0) {
                setTimeout(() => {
                    frame.style.visibility = 'collapse'
                }, 300)
            } else if(opacity == 1) {
                setTimeout(() => {
                    frame.style.visibility = 'visible'
                }, 300)
            }
        })

        const videos = document.querySelectorAll('.frame__media');

        videos.forEach((video) => {
            video.addEventListener('click', () => {
                video.muted = !video.muted; 
                if (!video.muted) {
                    video.play(); 
                }
            });
        });

    },
});


