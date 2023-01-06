const bar = document.querySelector(".header-bar")
const list = document.querySelector(".header-list")
const key = 'is-show'

bar.addEventListener('click', function (e) {
    list.classList.add(key)
})

window.addEventListener('click', function (e) {
    if(!list.contains(e.target) && !e.target.matches('.header-bar')) {
        list.classList.remove(key)
    }
})
