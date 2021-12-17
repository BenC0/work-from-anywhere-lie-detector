const animations = {
    is_mobile: _ => {
        return window.innerWidth < 767
    },
    get_els: _ => {
        let sel = animations.is_mobile() ? "mobile" : "desktop";
        return document.querySelectorAll(`.animations .${sel}`)
    },
    set_state: s => {
        console.log(`Setting animation state to ${s}`)
        animations.get_els().forEach(el => {
            if(!el.classList.contains(s)) {
                el.classList.add('hide')
                el.removeAttribute("autoplay")
            } else {
                el.classList.remove('hide')
                el.setAttribute("autoplay", true)
            }
        })
    }
}
let x = 0
window.setInterval(_ => {
    let states = ["idle", "true", "idle", "false"]
    animations.set_state(states[x])
    x++
    if(x == states.length) {
        x = 0
    }
}, 1500)