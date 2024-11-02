function notifAlert() {
    const messages = [
        "0.053 Maga claim at Exthiu995h8bu...",
        "0.078 Maga claim at Retyu894g7h2...",
        "0.065 Maga claim at Uiore655h9q...",
        "0.091 Maga claim at Zxcvb982t6p..."
    ];

    function showNotification() {
        const notification = document.getElementById("notification");
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        notification.querySelector(".notification-text").textContent = randomMessage;
        notification.classList.add("show"); 
        setTimeout(() => {
            notification.classList.remove("show"); 
        }, 3000);
    }


    setInterval(showNotification, 4000);
}

export { notifAlert };
