//cite BootstrapMade.com

(function() {
    "use strict";

    let loader = document.getElementById("preloader")
    window.addEventListener("load", function () {
        loader.style.display = "none";
    })

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    /**
     * Easy on scroll event listener
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active')
            } else {
                backtotop.classList.remove('active')
            }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
    }
    // let card1 = select('.card1')
    // if(card1) {
    //     const toggleCard1 = () => {
    //         if (window.scrollY < 100) {
    //             card1.classList.add('active')
    //         } else {
    //             card1.classList.remove('active')
    //         }
    //     }
    //     window.addEventListener('load', toggleCard1)
    //     onscroll(document, toggleCard1)
    // }a



})()