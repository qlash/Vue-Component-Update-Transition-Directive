Vue.directive('changed', {
    componentUpdated(el, arg) {
        const callback = () => {
            el.classList.remove(arg.value)
            if (el.className == "") el.removeAttribute('class')
            el.removeEventListener('animationend', callback)
        }
        el.addEventListener('animationend', callback, false)
        el.classList.add(arg.value)
    }
})