function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

const animations = {
    is_mobile: _ => window.innerWidth < 767,
    sources: {
        "desktop": {
            idle: 'https://assets4.lottiefiles.com/private_files/lf30_2v019dqo.json',
            true: 'https://assets10.lottiefiles.com/private_files/lf30_ifuzb78m.json',
            false: 'https://assets8.lottiefiles.com/private_files/lf30_o3zxp3ys.json',
        },
        "mobile": {
            idle: 'https://assets8.lottiefiles.com/private_files/lf30_zsfwaun0.json',
            true: 'https://assets2.lottiefiles.com/private_files/lf30_vqxxev4d.json',
            false: 'https://assets8.lottiefiles.com/private_files/lf30_bmfyyyl0.json',
        }
    },
    player: document.querySelector(".lottie-player.idle"),
    playerTrue: document.querySelector(".lottie-player.true"),
    playerFalse: document.querySelector(".lottie-player.false"),
    playerAnimations: {
        idle: '',
        true: '',
        false: ''
    },
    set_state: s => {
        const { playerAnimations, player, playerFalse, playerTrue } = animations;

        switch(s) {
            case "idle":
                player.classList.add('active')
                playerTrue.classList.remove('active')
                playerFalse.classList.remove('active')
                break;
            case "true":
                playerTrue.classList.add('active')
                player.classList.remove('active')
                playerFalse.classList.remove('active')
                playerAnimations['true'].playSegments([
                    120, 364
                ], true)
                break;
            case "false":
                playerFalse.classList.add('active')
                player.classList.remove('active')
                playerTrue.classList.remove('active')
                console.log(playerAnimations['false']);
                playerAnimations['false'].playSegments([
                    0, 289
                ], true)
                break;
            default:
                player.classList.add('active')
                playerTrue.classList.remove('active')
                playerFalse.classList.remove('active')
                break;
        }
    },
    reset_state: _ => {
        animations.set_state("idle")
    },
    setup: () => {
        const { desktop, mobile } = animations.sources;
        const { player, playerTrue, playerFalse, playerAnimations } = animations;

        if (animations.is_mobile() === 'mobile') {
            playerAnimations['idle'] = bodymovin.loadAnimation({
                container: player,
                path: mobile.idle,
                renderer: 'svg',
                loop: true,
                autoplay: true,
            });

            playerAnimations['true'] = bodymovin.loadAnimation({
                container: playerTrue,
                path: mobile.true,
                renderer: 'svg',
                loop: true,
                autoplay: false,
            });

            playerAnimations['false'] = bodymovin.loadAnimation({
                container: playerFalse,
                path: mobile.false,
                renderer: 'svg',
                loop: true,
                autoplay: false,
            });
        } else {
            playerAnimations['idle'] = bodymovin.loadAnimation({
                container: player,
                path: desktop.idle,
                renderer: 'svg',
                loop: true,
                autoplay: true,
            });

            playerAnimations['true'] = bodymovin.loadAnimation({
                container: playerTrue,
                path: desktop.true,
                renderer: 'svg',
                loop: true,
                autoplay: false,
            });

            playerAnimations['false'] = bodymovin.loadAnimation({
                container: playerFalse,
                path: desktop.false,
                renderer: 'svg',
                loop: true,
                autoplay: false,
            });
        }
    }
}

const cards = {
    transition_timing: _ => {
        let current = cards.get_current_page()
        if(!!current.getAttribute('question')) {
            return 1600
        } else if(!!current.getAttribute('answer')) {
            return 0
        } else {
            return 0
        }
    },
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
        if(!!current) {
            cards.deactivate(current)
        }
    },
    reset_pages: _ => {
        document.body.classList.add("resetting")
        document.querySelectorAll('[name^="question-"], [name^="answer-"]').forEach(el => el.checked = false)
        cards.go_to(cards.start_page)
        document.body.classList.remove("resetting")
    },
    go_to: sel => {
        let el = typeof sel === "string" ? document.querySelector(sel) : sel
        if (!!el.getAttribute('answer')) {
            document.querySelector('.answers').classList.add('active')
        } else {
            document.querySelector('.answers').classList.remove('active')
        }

        if (!!el.classList.contains('results')) {
            if (history.pushState) {
                var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?results=viewed';
                window.history.pushState({path:newurl},'',newurl);
            }
            results.set_hero()
        }

        cards.hide_current()
        cards.activate(el)
    },
    next_card: _ => {
        let current = cards.get_current_page()
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

const results = {
    is_mobile: _ => window.innerWidth < 767,
    correct: 0,
    ranges: {
        "low": [0,3],
        "mid": [4,7],
        "high": [8,10]
    },
    get_range: r => {
        let range = "low"
        if (r >= 8 && r <= 10) {
            range = "high"
        } else if (r >= 4 && r <= 7) {
            range = "mid"
        }
        return range 
        
    },
    set_hero: _ => {
        let range = results.get_range(results.correct)
        document.querySelector('.results .hero img').setAttribute("src", `https://fs.hubspotusercontent00.net/hubfs/2661559/Teneo/Work%20from%20Anywhere%20-%20Lie%20Detector/${range}-teneo-machine.svg`)
        document.querySelector('.hero__machine-image').classList.add(range)
        let resultNum = document.querySelector('.results .hero .resultNum')
        if(!!resultNum) {
            resultNum.textContent = results.correct
        }
    }
}

let q_inputs = document.querySelectorAll('[name^="question-"]')
q_inputs.forEach(q => {
    q.addEventListener('change', e => {
        if(!document.body.classList.contains("resetting")) {
            let answer = q.getAttribute('animation').toLowerCase()

            animations.set_state(answer)
            if(q.classList.contains('correct-answer')) {
                results.correct++
            }
            
            window.setTimeout(cards.next_card, cards.transition_timing())
        }
    })
})

let a_inputs = document.querySelectorAll('[name^="answer-"]')
a_inputs.forEach(a => {
    a.addEventListener('change', _ => {
        if(!document.body.classList.contains("resetting")) {
            animations.reset_state()
            window.setTimeout(cards.next_card, cards.transition_timing())
        }
    })
})

window.addEventListener('resize', debounce(_ => {
    animations.reset_state()
}, 250))

let reset_cta = document.querySelector('[href="#reset-quiz"]')
if(!!reset_cta) {
    reset_cta.addEventListener('click', e => {
        e.preventDefault();
        cards.reset_pages()
        results.correct = 0
    })
}

let dropdown_parents = document.querySelectorAll('.dropdown-parent[href]')
dropdown_parents.forEach(dropdown_parent => {
    dropdown_parent.addEventListener('click', e => {
        e.preventDefault();
        dropdown_parent.closest(".dropdown-container").classList.toggle('active')
        document.body.classList.toggle(`${dropdown_parent.getAttribute('href').replace("#","active_")}`)
    })
})

let toggle_forms = document.querySelectorAll('.toggle_form')
toggle_forms.forEach(toggle_form => {
    toggle_form.addEventListener('click', e => {
        e.preventDefault();
        document.body.classList.toggle('show_form')
    })
})
animations.setup()
cards.reset_pages()