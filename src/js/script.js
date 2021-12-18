const animations = {
    is_mobile: _ => window.innerWidth < 767,
    get_els: _ => document.querySelectorAll(`.animations .${animations.is_mobile() ? "mobile" : "desktop"}`),
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
    },
    reset_state: _ => {
        animations.set_state("idle")
    }
}

const cards = {
    transition_timing: 10,
    start_page: document.querySelector('.start'),
    activate: el => el.classList.add('active_page'),
    deactivate: el => el.classList.remove('active_page'),
    get_current_page: _ => {
        let current = document.querySelector('.active_page')
        if(current === null) {
            return cards.start_page
        }
        return current
    },
    hide_current: _ => {
        let current = cards.get_current_page()
        console.log({"function": "hide_current", current})
        if(!!current) {
            cards.deactivate(current)
        }
    },
    reset_pages: _ => {
        cards.go_to(cards.start_page)
    },
    go_to: sel => {
        console.log({"function": "go_to", sel})
        let el = typeof sel === "string" ? document.querySelector(sel) : sel
        cards.hide_current()
        cards.activate(el)
    },
    next_card: _ => {
        let current = cards.get_current_page()
        console.log({"function": "next_card", current})
        let next = `[question="1"]`
        if(!!current.getAttribute('question')) {
            next = `[answer="${current.getAttribute('question')}"]`
        } else if(!!current.getAttribute('answer')) {
            let nextNum = parseInt(current.getAttribute('answer')) + 1
            if(nextNum <= document.querySelectorAll("[answer]").length) {
                next = `[question="${nextNum}"]`
            } else {
                next = `.results`
            }
        }
        cards.go_to(next)
    }
}


let q_inputs = document.querySelectorAll('[name^="question-"]')
q_inputs.forEach(q => {
    q.addEventListener('change', e => {
        if(q.classList.contains('correct-answer')) {
            animations.set_state('true')
        } else {
            animations.set_state('false')
        }
        window.setTimeout(cards.next_card, cards.transition_timing)
    })
})

let a_inputs = document.querySelectorAll('[name^="answer-"]')
a_inputs.forEach(a => {
    a.addEventListener('change', _ => {
        animations.reset_state()
        window.setTimeout(cards.next_card, cards.transition_timing)
    })
})