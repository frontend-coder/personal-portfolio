$(document).ready(() => {
  function setTheme() {
    if (localStorage.getItem('theme') == null) {
      localStorage.setItem('theme', 'light');
      document.body.classList.add(localStorage.getItem('theme'));
    } else {
      document.body.classList.add(localStorage.getItem('theme'));
    }
  }
  setTheme();
  const darkThemeBtn = document.querySelector('#dark-theme');

  function darkToggleTheme() {
    if (localStorage.getItem('theme') == 'light') {
      localStorage.setItem('theme', 'dark');
      document.body.classList.remove('light');
      document.body.classList.add(localStorage.getItem('theme'));
    } else {
      document.body.classList.add(localStorage.getItem('theme'));
    }
  }

  darkThemeBtn.addEventListener('click', (e) => {
    darkToggleTheme();
  });

  const lightThemeBtn = document.querySelector('#light-theme');

  function lightToggleTheme() {
    if (localStorage.getItem('theme') == 'dark') {
      localStorage.setItem('theme', 'light');
      document.body.classList.remove('dark');
      document.body.classList.add(localStorage.getItem('theme'));
    } else {
      document.body.classList.add(localStorage.getItem('theme'));
    }
  }

  lightThemeBtn.addEventListener('click', (e) => {
    lightToggleTheme();
  });

  function setScene() {
    if (localStorage.getItem('scenetheme') == null) {
      localStorage.setItem('scenetheme', 'css/pink.css');
      const ownStyle = localStorage.getItem('scenetheme');
      document.querySelector('#change__style').href = ownStyle;
    } else {
      const ownStyle = localStorage.getItem('scenetheme');
      document.querySelector('#change__style').href = ownStyle;
    }
  }
  setScene();

  const scenePinkBtn = document.querySelector('#scene__pink');

  function scenePink() {
    localStorage.setItem('scenetheme', 'css/pink.css');
    const pinkStyle = localStorage.getItem('scenetheme');
    document.querySelector('#change__style').href = pinkStyle;
  }

  scenePinkBtn.addEventListener('click', (e) => {
    scenePink();
  });

  const sceneBlueBtn = document.querySelector('#scene__blue');

  function sceneBlue() {
    localStorage.setItem('scenetheme', 'css/blue.css');
    const pinkStyle = localStorage.getItem('scenetheme');
    document.querySelector('#change__style').href = pinkStyle;
  }
  sceneBlueBtn.addEventListener('click', (e) => {
    sceneBlue();
  });

  const sceneOrangeBtn = document.querySelector('#scene__orange');

  function sceneOrange() {
    localStorage.setItem('scenetheme', 'css/orange.css');
    const pinkStyle = localStorage.getItem('scenetheme');
    document.querySelector('#change__style').href = pinkStyle;
  }
  sceneOrangeBtn.addEventListener('click', (e) => {
    sceneOrange();
  });

  const sceneYellowBtn = document.querySelector('#scene__yellow');

  function sceneYellow() {
    localStorage.setItem('scenetheme', 'css/yellow.css');
    const pinkStyle = localStorage.getItem('scenetheme');
    document.querySelector('#change__style').href = pinkStyle;
  }
  sceneYellowBtn.addEventListener('click', (e) => {
    sceneYellow();
  });

  const sceneGreenBtn = document.querySelector('#scene__green');

  function sceneGreen() {
    localStorage.setItem('scenetheme', 'css/green.css');
    document.querySelector('#change__style').href = localStorage.getItem('scenetheme');
  }
  sceneGreenBtn.addEventListener('click', (e) => {
    sceneGreen();
  });
  // menu
  const navTogglerBtn = document.querySelector('.nav-toggler');
  const aside = document.querySelector('.aside_left');

  navTogglerBtn.addEventListener('click', () => {
    asideSectionTogglerBtn();
  });

  function asideSectionTogglerBtn() {
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
  }

  document.querySelector('.toggle-style-switcher').addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
  });
});
