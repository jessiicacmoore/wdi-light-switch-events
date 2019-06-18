const lightSwitch = document.querySelector('.switch');
const body = document.querySelector('body');
const lightStatus = document.querySelector('.status')


lightSwitch.addEventListener('click', () => {
  if (lightSwitch.classList.contains('on')) {
    lightSwitch.classList.remove('on');
    lightSwitch.classList.add('off');
    body.classList.remove('light');
    body.classList.add('dark');
    lightStatus.innerText = "Hey, who turned off the lights?"
  } else {
    lightSwitch.classList.remove('off');
    lightSwitch.classList.add('on');
    body.classList.remove('dark');
    body.classList.add('light');
    lightStatus.innerText = "It's so bright in here!"
  }
});

