export default {
    mounted(el, binding) {
        const animationName = binding.value?.name || 'fade-in'
        const delay = binding.value?.delay || 0

        // Սկզբում ավելացնում ենք միայն նախնական class
        el.classList.add(animationName)

        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        el.classList.remove(animationName)
                        el.classList.add('animated')
                    }, delay)
                    observer.unobserve(el) // ❗️ Միայն մեկ անգամ ցույց տալու համար
                }
            })
        }

        const observer = new IntersectionObserver(callback, {
            threshold: 0.1,
        })

        observer.observe(el)
    }
}
