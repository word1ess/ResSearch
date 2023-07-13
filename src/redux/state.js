let rerenderEntireTree = () => {};

let state = {
  indexPage: {
    researches: [
      {
        id: 1,
        title: "Анализ существования насилия по кастовому признаку в Индии",
        image: "/image/main/research/1.png",
      },
      {
        id: 2,
        title: "Социологический анализ оккупации Палестины",
        image: "image/main/research/2.png",
      },
      {
        id: 3,
        title:
          "Социологическая проверка международных миротворческих усилий в локальных конфликтах",
        image: "image/main/research/3.png",
      },
      {
        id: 4,
        title:
          "Проследить взаимосвязь между наксализмом и внутригосударственным конфликтом",
        image: "image/main/research/4.png",
      },
    ],
  },
  researchesPage: {
    researches: [
      {
        id: 1,
        owner: "УрФУ",
        title: "Анализ существования насилия по кастовому признаку в Индии",
        text: "Мы приглашаем вас принять участие в этом исследовании, в котором исследуются связи между различными типами личности, привязанностью и воспринимаемым остракизмом (то есть чувством игнорирования или исключенности). Доктор Дэниел Вальдек — доцент кафедры психологии Школы психологических, социальных и поведенческих наук Университета Ковентри - возглавляет это исследование.",
        duration: "долгосрочное",
        image: "/image/main/research/1.png",
        date: "16.05.2023",
        countOfRespondents: 20,
        maxCountOfRespondents: 25,
      },
      {
        id: 2,
        owner: "УрФУ",
        title: "Социологический анализ оккупации Палестины",
        text: "Мы приглашаем вас принять участие в этом исследовании, в котором исследуются связи между различными типами личности, привязанностью и воспринимаемым остракизмом (то есть чувством игнорирования или исключенности). Доктор Дэниел Вальдек — доцент кафедры психологии Школы психологических, социальных и поведенческих наук Университета Ковентри - возглавляет это исследование.",
        duration: "долгосрочное",
        image: "image/main/research/2.png",
        date: "16.05.2023",
        countOfRespondents: 20,
        maxCountOfRespondents: 25,
      },
      {
        id: 3,
        owner: "УрФУ",
        title:
          "Социологическая проверка международных миротворческих усилий в локальных конфликтах",
        text: "Мы приглашаем вас принять участие в этом исследовании, в котором исследуются связи между различными типами личности, привязанностью и воспринимаемым остракизмом (то есть чувством игнорирования или исключенности). Доктор Дэниел Вальдек — доцент кафедры психологии Школы психологических, социальных и поведенческих наук Университета Ковентри - возглавляет это исследование.",
        duration: "долгосрочное",
        image: "image/main/research/3.png",
        date: "16.05.2023",
        countOfRespondents: 20,
        maxCountOfRespondents: 25,
      },
      {
        id: 4,
        owner: "УрФУ",
        title:
          "Проследить взаимосвязь между наксализмом и внутригосударственным конфликтом",
        text: "Мы приглашаем вас принять участие в этом исследовании, в котором исследуются связи между различными типами личности, привязанностью и воспринимаемым остракизмом (то есть чувством игнорирования или исключенности). Доктор Дэниел Вальдек — доцент кафедры психологии Школы психологических, социальных и поведенческих наук Университета Ковентри - возглавляет это исследование.",
        duration: "долгосрочное",
        image: "image/main/research/4.png",
        date: "16.05.2023",
        countOfRespondents: 20,
        maxCountOfRespondents: 25,
      },
    ],
    filters: [
      { id: 1, text: "По новизне" },
      { id: 2, text: "Длительность" },
      { id: 3, text: "Направление" },
    ],
  },
  userPage: {
    userInfo: {
      image: "/image/main/research/1.png",
      userName: "Анастасия",
      birthDay: "15.03.1967",
      sex: "женский",
      country: "Республика Татарстан",
      education: "среднее профессиональное",
      phone: "89123659866",
      email: "email@example.com",
    },
  },
};

window.state = state;

export const changeUserInfo = (
  userName,
  birthDay,
  sex,
  country,
  education,
  phone,
  email
) => {
  state.userPage.userInfo.userName = userName;
  state.userPage.userInfo.birthDay = birthDay;
  state.userPage.userInfo.sex = sex;
  state.userPage.userInfo.country = country;
  state.userPage.userInfo.education = education;
  state.userPage.userInfo.phone = phone;
  state.userPage.userInfo.email = email;
  rerenderEntireTree();
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
