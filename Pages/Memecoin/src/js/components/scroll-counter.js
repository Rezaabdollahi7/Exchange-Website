function scrollCounter(){

    function animateCountUp(element, target) {
        let start = 0;
        const duration = 1000; 
        const increment = target / (duration / 10);

        const updateCounter = () => {
            start += increment;
            if (start < target) {
                element.innerText = `$${Math.floor(start).toLocaleString()}`;
                requestAnimationFrame(updateCounter);
            } else {
                element.innerText = `$${target.toLocaleString()}`;
            }
        };

        updateCounter();
    }

    document.addEventListener("DOMContentLoaded", () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const targetElement = entry.target;
                    const targetValue = parseInt(targetElement.getAttribute("data-target"));
                    animateCountUp(targetElement, targetValue);
                    observer.unobserve(targetElement);
                }
            });
        }, { threshold: 0.5 });

        const donationAmount = document.querySelector(".donation-amount");
        observer.observe(donationAmount);
    });
}

export {scrollCounter}