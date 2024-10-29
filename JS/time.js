document.addEventListener('DOMContentLoaded', function() {
    const datetimeElement = document.getElementById('datetime');
    const updateTime = () => {
        const now = new Date();
        datetimeElement.textContent = now.toLocaleString();
    };
    setInterval(updateTime, 1000);
    updateTime();
});
