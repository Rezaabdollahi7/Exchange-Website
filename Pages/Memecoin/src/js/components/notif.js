function notifAlert(){
    function showNotification() {
        const notification = document.getElementById("notification");

        notification.classList.add("show"); 
        setTimeout(() => {
            notification.classList.remove("show"); 
        }, 3000);
    }

    setInterval(showNotification,4000);
}
export {notifAlert}