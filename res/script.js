import './style.css'

import page from './page.html?raw'

document.querySelector('#app').innerHTML = page

setupCounter(document.querySelector('#counter'))

function setupCounter(element) {
    let counter = 0
    const setCounter = (count) => {
        counter = count
        element.innerHTML = `count is ${counter}`
    }
    element.addEventListener('click', () => setCounter(counter + 1))
    setCounter(0)
}
