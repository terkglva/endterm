// src/i18n/translations.js
export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      characters: 'Characters',
      favorites: 'Favorites',
      about: 'About',
      profile: 'Profile',
      login: 'Login',
      signup: 'Sign Up',
      logout: 'Logout'
    },
    // Home Page
    home: {
      title: 'Wubba Lubba Dub Dub!',
      subtitle: 'Welcome to the Citadel of Ricks... and Mortys.',
      description: 'Dive into the infinite multiverse! We\'ve cataloged every known version of your favorite characters. Track their dimensions, status, and first (and likely traumatic) appearance.',
      exploreButton: 'Explore the Multiverse Now',
      portalWarning: '(Don\'t stand too close to the green stuff)'
    },
    // Character List
    characterList: {
      title: 'Dimensional Character Roster',
      searchPlaceholder: 'Search by name (e.g., Rick Sanchez)',
      noResults: 'No results found for',
      entitiesFound: 'entities found. Showing',
      onPage: 'on page',
      previous: 'Previous',
      next: 'Next',
      page: 'Page',
      of: 'of'
    },
    // Character Details
    characterDetails: {
      backButton: '← Back to List',
      details: 'Details',
      species: 'Species',
      gender: 'Gender',
      origin: 'Origin',
      lastSeen: 'Last Seen Location',
      type: 'Type',
      episodeCount: 'Episode Count',
      created: 'Created Date'
    },
    // Favorites
    favorites: {
      title: 'Your Favorite Characters',
      mergeMessage: 'Your local favorites were merged with your account.',
      noFavorites: 'No favorites yet. Start exploring and add some characters to your favorites!',
      saved: 'saved',
      favorite: 'favorite',
      favorites: 'favorites'
    },
    // Auth
    auth: {
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      loginTitle: 'Login',
      signupTitle: 'Sign Up',
      loginButton: 'Login',
      signupButton: 'Sign Up',
      loggingIn: 'Logging in...',
      creatingAccount: 'Creating Account...',
      dontHaveAccount: 'Don\'t have an account?',
      alreadyHaveAccount: 'Already have an account?',
      passwordHint: 'Password (8+ chars, 1 number, 1 special char)',
      passwordRequirements: 'Password must contain:',
      requirement1: 'At least 8 characters',
      requirement2: 'At least one number',
      requirement3: 'At least one special character (!@#$%^&*)',
      errors: {
        invalidCredentials: 'Invalid email or password',
        userNotFound: 'No account found with this email',
        wrongPassword: 'Incorrect password',
        invalidEmail: 'Please enter a valid email address',
        passwordsNoMatch: 'Passwords do not match',
        emailInUse: 'This email is already registered',
        weakPassword: 'Password is too weak'
      }
    },
    // Profile
    profile: {
      title: 'Profile',
      uploadButton: 'Upload Profile Picture',
      uploading: 'Uploading...',
      fileHint: 'Accepted: JPG, PNG (max 5MB)',
      email: 'Email',
      userId: 'User ID',
      accountCreated: 'Account Created',
      logoutButton: 'Logout'
    },
    // About
    about: {
      title: '[SECTION 42-A]: The Project Manifest',
      subtitle: 'The "Character Explorer" V3.14 (Better than the V3.0, obviously).',
      section1Title: '1. Purpose of Operation',
      section1Text: 'This is a comprehensive, multi-dimensional database built to categorize the vast and usually depressing array of entities encountered across known realities. Its primary function is to prevent embarrassing mix-ups, such as mistaking an Evil Morty for a regular one, or forgetting which dimension you stashed a particular Jerry in.',
      section2Title: '2. Technical Specifications',
      spec1: '**Interface Logic:** React.js (Chosen for its structural integrity, unlike Jerry\'s marriage).',
      spec2: '**Styling Protocol:** CSS (Dark Theme/Neon Green & Purple, because anything else is amateur hour).',
      spec3: '**Data Source:** The Rick and Morty API (Unsanctioned data scraping is more fun, but less legal).',
      spec4: '**Security:** Minimal. If Evil Morty wants in, he\'s getting in. Don\'t store your passwords here.',
      section3Title: '3. Disclaimer (Mandatory)',
      section3Text: 'All character information is based on observations, potentially unreliable test results, and frankly, guesswork. The project creators (Morty and a couple of interns) are not responsible for psychological trauma, existential dread, or interdimensional parasites resulting from the exploration of this data.',
      mortyNote: '**Morty\'s Emergency Note:**',
      mortyText: '"Just look at the pretty colors and try not to think about how small you are in the grand scheme of things. Also, do not click on anything labeled \'Time Travel\'."'
    },
    // Common
    common: {
      loading: 'Loading dimension data...',
      error: '⚠️ Access Denied / Error',
      offline: '⚠️ You are offline. Some features may not be available.',
      notFound: '404 - Dimension Not Found',
      status: {
        alive: 'Alive',
        dead: 'Dead',
        unknown: 'Unknown'
      }
    }
  },
  
  ru: {
    // Навигация
    nav: {
      home: 'Главная',
      characters: 'Персонажи',
      favorites: 'Избранное',
      about: 'О проекте',
      profile: 'Профиль',
      login: 'Вход',
      signup: 'Регистрация',
      logout: 'Выход'
    },
    // Главная страница
    home: {
      title: 'Вубба Лубба Даб Даб!',
      subtitle: 'Добро пожаловать в Цитадель Риков... и Морти.',
      description: 'Погрузитесь в бесконечную мультивселенную! Мы каталогизировали все известные версии ваших любимых персонажей. Отслеживайте их измерения, статус и первое (вероятно, травматичное) появление.',
      exploreButton: 'Исследовать мультивселенную',
      portalWarning: '(Не подходите слишком близко к зеленой штуке)'
    },
    // Список персонажей
    characterList: {
      title: 'Реестр персонажей измерений',
      searchPlaceholder: 'Поиск по имени (например, Рик Санчез)',
      noResults: 'Результаты не найдены для',
      entitiesFound: 'сущностей найдено. Показано',
      onPage: 'на странице',
      previous: 'Назад',
      next: 'Вперед',
      page: 'Страница',
      of: 'из'
    },
    // Детали персонажа
    characterDetails: {
      backButton: '← Назад к списку',
      details: 'Детали',
      species: 'Вид',
      gender: 'Пол',
      origin: 'Происхождение',
      lastSeen: 'Последняя локация',
      type: 'Тип',
      episodeCount: 'Количество эпизодов',
      created: 'Дата создания'
    },
    // Избранное
    favorites: {
      title: 'Ваши любимые персонажи',
      mergeMessage: 'Ваше локальное избранное было объединено с вашим аккаунтом.',
      noFavorites: 'Пока нет избранного. Начните исследовать и добавьте персонажей в избранное!',
      saved: 'сохранено',
      favorite: 'избранный',
      favorites: 'избранных'
    },
    // Аутентификация
    auth: {
      email: 'Email',
      password: 'Пароль',
      confirmPassword: 'Подтвердите пароль',
      loginTitle: 'Вход',
      signupTitle: 'Регистрация',
      loginButton: 'Войти',
      signupButton: 'Зарегистрироваться',
      loggingIn: 'Вход...',
      creatingAccount: 'Создание аккаунта...',
      dontHaveAccount: 'Нет аккаунта?',
      alreadyHaveAccount: 'Уже есть аккаунт?',
      passwordHint: 'Пароль (8+ символов, 1 цифра, 1 спецсимвол)',
      passwordRequirements: 'Пароль должен содержать:',
      requirement1: 'Минимум 8 символов',
      requirement2: 'Минимум одну цифру',
      requirement3: 'Минимум один спецсимвол (!@#$%^&*)',
      errors: {
        invalidCredentials: 'Неверный email или пароль',
        userNotFound: 'Аккаунт с таким email не найден',
        wrongPassword: 'Неверный пароль',
        invalidEmail: 'Введите корректный email адрес',
        passwordsNoMatch: 'Пароли не совпадают',
        emailInUse: 'Этот email уже зарегистрирован',
        weakPassword: 'Пароль слишком слабый'
      }
    },
    // Профиль
    profile: {
      title: 'Профиль',
      uploadButton: 'Загрузить фото профиля',
      uploading: 'Загрузка...',
      fileHint: 'Принимаются: JPG, PNG (макс 5МБ)',
      email: 'Email',
      userId: 'ID пользователя',
      accountCreated: 'Аккаунт создан',
      logoutButton: 'Выйти'
    },
    // О проекте
    about: {
      title: '[РАЗДЕЛ 42-A]: Манифест проекта',
      subtitle: '"Character Explorer" V3.14 (Лучше чем V3.0, очевидно).',
      section1Title: '1. Цель операции',
      section1Text: 'Это комплексная многомерная база данных, созданная для каталогизации обширного и обычно удручающего набора сущностей, встречающихся в известных реальностях. Её основная функция - предотвратить неловкие ситуации, такие как путаница между Злым Морти и обычным, или забывание, в каком измерении вы спрятали конкретного Джерри.',
      section2Title: '2. Технические характеристики',
      spec1: '**Логика интерфейса:** React.js (Выбран за структурную целостность, в отличие от брака Джерри).',
      spec2: '**Протокол стилизации:** CSS (Темная тема/Неоновый зеленый и фиолетовый, потому что все остальное - любительский час).',
      spec3: '**Источник данных:** Rick and Morty API (Несанкционированный сбор данных веселее, но менее законен).',
      spec4: '**Безопасность:** Минимальная. Если Злой Морти захочет войти, он войдет. Не храните здесь свои пароли.',
      section3Title: '3. Отказ от ответственности (Обязательно)',
      section3Text: 'Вся информация о персонажах основана на наблюдениях, потенциально ненадежных результатах тестов и, откровенно говоря, догадках. Создатели проекта (Морти и пара стажеров) не несут ответственности за психологические травмы, экзистенциальный страх или межпространственных паразитов, возникших в результате изучения этих данных.',
      mortyNote: '**Экстренная заметка Морти:**',
      mortyText: '"Просто смотрите на красивые цвета и старайтесь не думать о том, насколько вы малы в грандиозной схеме вещей. Также не нажимайте ни на что с пометкой \'Путешествие во времени\'."'
    },
    // Общее
    common: {
      loading: 'Загрузка данных измерения...',
      error: '⚠️ Доступ запрещен / Ошибка',
      offline: '⚠️ Вы офлайн. Некоторые функции могут быть недоступны.',
      notFound: '404 - Измерение не найдено',
      status: {
        alive: 'Жив',
        dead: 'Мертв',
        unknown: 'Неизвестно'
      }
    }
  },
  
  kz: {
    // Навигация
    nav: {
      home: 'Басты бет',
      characters: 'Кейіпкерлер',
      favorites: 'Таңдаулылар',
      about: 'Жоба туралы',
      profile: 'Профиль',
      login: 'Кіру',
      signup: 'Тіркелу',
      logout: 'Шығу'
    },
    // Басты бет
    home: {
      title: 'Вубба Лубба Даб Даб!',
      subtitle: 'Риктер мен Мортилердің Цитаделіне қош келдіңіз.',
      description: 'Шексіз мультиәлемге еніңіз! Біз сіздің сүйікті кейіпкерлеріңіздің барлық белгілі нұсқаларын каталогтадық. Олардың өлшемдерін, мәртебесін және бірінші (мүмкін, жарақаттаушы) пайда болуын қадағалаңыз.',
      exploreButton: 'Мультиәлемді зерттеу',
      portalWarning: '(Жасыл заттарға тым жақын тұрмаңыз)'
    },
    // Кейіпкерлер тізімі
    characterList: {
      title: 'Өлшемдік кейіпкерлер тізімі',
      searchPlaceholder: 'Аты бойынша іздеу (мысалы, Рик Санчез)',
      noResults: 'Нәтиже табылмады',
      entitiesFound: 'нысан табылды. Көрсетілген',
      onPage: 'бетте',
      previous: 'Артқа',
      next: 'Алға',
      page: 'Бет',
      of: 'ішінен'
    },
    // Кейіпкер мәліметтері
    characterDetails: {
      backButton: '← Тізімге оралу',
      details: 'Мәліметтер',
      species: 'Түрі',
      gender: 'Жынысы',
      origin: 'Шыққан жері',
      lastSeen: 'Соңғы орын',
      type: 'Типі',
      episodeCount: 'Эпизодтар саны',
      created: 'Жасалған күні'
    },
    // Таңдаулылар
    favorites: {
      title: 'Сіздің сүйікті кейіпкерлеріңіз',
      mergeMessage: 'Сіздің жергілікті таңдаулыларыңыз аккаунтыңызбен біріктірілді.',
      noFavorites: 'Әлі таңдаулылар жоқ. Зерттеуді бастаңыз және кейіпкерлерді таңдаулыларға қосыңыз!',
      saved: 'сақталды',
      favorite: 'таңдаулы',
      favorites: 'таңдаулылар'
    },
    // Аутентификация
    auth: {
      email: 'Email',
      password: 'Құпия сөз',
      confirmPassword: 'Құпия сөзді растаңыз',
      loginTitle: 'Кіру',
      signupTitle: 'Тіркелу',
      loginButton: 'Кіру',
      signupButton: 'Тіркелу',
      loggingIn: 'Кіру...',
      creatingAccount: 'Аккаунт жасалуда...',
      dontHaveAccount: 'Аккаунтыңыз жоқ па?',
      alreadyHaveAccount: 'Аккаунтыңыз бар ма?',
      passwordHint: 'Құпия сөз (8+ таңба, 1 сан, 1 арнайы таңба)',
      passwordRequirements: 'Құпия сөз мыналарды қамтуы керек:',
      requirement1: 'Кемінде 8 таңба',
      requirement2: 'Кемінде бір сан',
      requirement3: 'Кемінде бір арнайы таңба (!@#$%^&*)',
      errors: {
        invalidCredentials: 'Қате email немесе құпия сөз',
        userNotFound: 'Бұл email-мен аккаунт табылмады',
        wrongPassword: 'Қате құпия сөз',
        invalidEmail: 'Дұрыс email мекенжайын енгізіңіз',
        passwordsNoMatch: 'Құпия сөздер сәйкес келмейді',
        emailInUse: 'Бұл email тіркелген',
        weakPassword: 'Құпия сөз тым әлсіз'
      }
    },
    // Профиль
    profile: {
      title: 'Профиль',
      uploadButton: 'Профиль суретін жүктеу',
      uploading: 'Жүктелуде...',
      fileHint: 'Қабылданады: JPG, PNG (макс 5МБ)',
      email: 'Email',
      userId: 'Пайдаланушы ID',
      accountCreated: 'Аккаунт жасалды',
      logoutButton: 'Шығу'
    },
    // Жоба туралы
    about: {
      title: '[БӨЛІМ 42-A]: Жоба манифесті',
      subtitle: '"Character Explorer" V3.14 (V3.0-ден жақсы, әрине).',
      section1Title: '1. Операцияның мақсаты',
      section1Text: 'Бұл белгілі шындықтарда кездесетін кең және әдетте көңілсіз нысандарды каталогтау үшін құрылған кешенді көп өлшемді деректер қоры. Оның негізгі функциясы - Жаман Мортиді қарапайым Мортимен шатастыру немесе белгілі бір Джерриді қай өлшемде жасырғаныңызды ұмыту сияқты ұятты қателерді болдырмау.',
      section2Title: '2. Техникалық сипаттамалар',
      spec1: '**Интерфейс логикасы:** React.js (Джерридің некесінен айырмашылығы, құрылымдық тұтастығы үшін таңдалды).',
      spec2: '**Стилдеу хаттамасы:** CSS (Қараңғы тақырып/Неон жасыл және күлгін, өйткені басқалары - әуесқой сағат).',
      spec3: '**Деректер көзі:** Rick and Morty API (Рұқсатсыз деректерді жинау қызықты, бірақ заңды емес).',
      spec4: '**Қауіпсіздік:** Минималды. Егер Жаман Морти кіргісі келсе, ол кіреді. Құпия сөздеріңізді мұнда сақтамаңыз.',
      section3Title: '3. Жауапкершіліктен бас тарту (Міндетті)',
      section3Text: 'Барлық кейіпкерлер туралы ақпарат бақылауларға, сенімсіз тест нәтижелеріне және шын мәнінде болжамдарға негізделген. Жоба авторлары (Морти және бірнеше тәжірибешілер) осы деректерді зерттеу нәтижесінде пайда болған психологиялық жарақаттар, экзистенциалды қорқыныш немесе өлшемаралық паразиттер үшін жауапты емес.',
      mortyNote: '**Мортидің төтенше жазбасы:**',
      mortyText: '"Тек әдемі түстерге қараңыз және өздеріңіз заттардың ұлы схемасында қаншалықты кішкентай екеніңіз туралы ойламауға тырысыңыз. Сондай-ақ, \'Уақытта саяхат\' деп белгіленген нәрсені баспаңыз."'
    },
    // Жалпы
    common: {
      loading: 'Өлшем деректері жүктелуде...',
      error: '⚠️ Қол жеткізу тыйым салынды / Қате',
      offline: '⚠️ Сіз офлайнсыз. Кейбір функциялар қолжетімсіз болуы мүмкін.',
      notFound: '404 - Өлшем табылмады',
      status: {
        alive: 'Тірі',
        dead: 'Өлі',
        unknown: 'Белгісіз'
      }
    }
  }
};