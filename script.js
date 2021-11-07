
// ! dark and light theme toggle

// ? calling and accessing the elements
let toggleBtn = document.querySelector('.toggle-btn')
let bodyElement = document.querySelector('body')

// ? toggle the class (set and remove the class dark in every click)
function setDarkTheme(){
    bodyElement.classList.toggle('dark')
}

// ? add event listener to the btn
toggleBtn.addEventListener('click', switchTheme)

function switchTheme() {
    // Get the value of the "dark" item from the local storage on every click
  let darkMode = localStorage.getItem('dark')

  if (darkMode !== 'on') {
    //   Set the value of the item to "on" when dark mode is on
      setDarkTheme()
    darkMode = localStorage.setItem('dark', 'on')
  } else {
    //   Set the value of the item to  "null" when dark mode if off
      setDarkTheme()
    darkMode = localStorage.setItem('dark', 'off')
  }
}

// Get the value of the "dark" item from the local storage
let darkMode = localStorage.getItem('dark')

// check dark mode is on or off on page reload
if(darkMode === 'on'){
    setDarkTheme()
}
