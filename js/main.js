// navbar
window.addEventListener("scroll", function () {
    var scrollvalue = window.scrollY;
    var navbar = document.querySelector(".navbar");
    if (scrollvalue > 50) {
        navbar.setAttribute("class", "navbar md:navbar-expand bg-primary")
    } else {
        navbar.setAttribute("class", "navbar md:navbar-expand bg-danger")
    }
})

// ========================================
// setTimeout() - Welcome Message
// ========================================

const startTimeoutBtn = document.getElementById("startTimeout");
const resetTimeoutBtn = document.getElementById("resetTimeout");

const welcomeTitle = document.getElementById("welcomeTitle");
const welcomeText = document.getElementById("welcomeText");
const timeoutStatus = document.getElementById("timeoutStatus");
const timeoutProgress = document.getElementById("timeoutProgress");

let timeoutId = null;
let countdownId = null;

function resetTimeoutDemo() {
    // Cancel pending timers
    clearTimeout(timeoutId);
    clearInterval(countdownId);

    timeoutId = null;
    countdownId = null;

    startTimeoutBtn.disabled = false;

    welcomeTitle.textContent = "Hello there!";
    welcomeText.textContent =
        "This message appears after 3 seconds.";

    timeoutStatus.textContent = "Ready to start";
    timeoutProgress.style.width = "0%";
}

startTimeoutBtn.addEventListener("click", function () {
    // Prevent multiple timers from running together
    if (timeoutId !== null) return;

    let secondsLeft = 3;

    startTimeoutBtn.disabled = true;

    welcomeTitle.textContent = "⏳ Please wait...";
    welcomeText.textContent =
        "Your welcome message is on the way.";

    timeoutStatus.textContent =
        `Message will show in: ${secondsLeft}s`;

    timeoutProgress.style.width = "0%";

    // Update the countdown every second
    countdownId = setInterval(function () {
        secondsLeft--;

        timeoutProgress.style.width =
            ((3 - secondsLeft) / 3) * 100 + "%";

        if (secondsLeft > 0) {
            timeoutStatus.textContent =
                `Message will show in: ${secondsLeft}s`;
        }
    }, 1000);

    // Display the final message once after 3 seconds
    timeoutId = setTimeout(function () {
        clearInterval(countdownId);

        countdownId = null;
        timeoutId = null;

        welcomeTitle.textContent = "Hello there! 👋";

        welcomeText.textContent =
            "This message appeared after 3 seconds.";

        timeoutStatus.textContent = "Message displayed ✓";

        timeoutProgress.style.width = "100%";

        startTimeoutBtn.disabled = false;
    }, 3000);
});

resetTimeoutBtn.addEventListener("click", resetTimeoutDemo);


// ========================================
// 2. setInterval() - Digital Clock
// ========================================

const clock = document.getElementById("clock");
const clockStatus = document.getElementById("clockStatus");

const startClockBtn = document.getElementById("startClock");
const stopClockBtn = document.getElementById("stopClock");

let intervalId = null;

// Function to display the current local time
function updateClock() {
    clock.textContent = new Date().toLocaleTimeString();
}

// Start the clock
startClockBtn.addEventListener("click", function () {
    // Avoid starting more than one interval
    if (intervalId !== null) return;

    updateClock();

    intervalId = setInterval(updateClock, 1000);

    clockStatus.textContent = "Clock is running.";

    startClockBtn.disabled = true;
});

// Stop the clock
stopClockBtn.addEventListener("click", function () {
    clearInterval(intervalId);

    intervalId = null;

    clockStatus.textContent = "Clock is stopped.";

    startClockBtn.disabled = false;
});

// Display the current time when the page loads
updateClock();

// to-do-list
document.querySelector("#myform").addEventListener("submit", function (event) {
    event.preventDefault();
    var works = document.querySelector("#works");
    var result = document.querySelector("#result");
    if (works.value.trim() === "") {
        alert("Enter Value");
    } else {
        var myLi = document.createElement("li");
        myLi.innerHTML = works.value;
        result.append(myLi);
        works.value = "";
    }
});
