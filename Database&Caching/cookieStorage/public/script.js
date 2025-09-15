function setRecommendation() {
    var preference = document.getElementById("recommendation").value;
    setCookie('userPreferences', preference, 1);

    displayRecomendations(preference);

    document.getElementById('preference-container').style.display = 'none';
    document.getElementById('recommendation-container').style.display = 'block';
}

function displayRecomendations(preference) {
    var recommendation = getRecommendation(preference);
    document.getElementById('recommendation-message').innerText = recommendation;
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // settime in milli seconds
        expires = "; expires=" + date.toUTCString();
    }

    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getRecommendation(preference) {
    switch (preference) {
        case "movies":
            return "Check out latest Movies on theater!!";
        case "books":
            return "Explore this week's bestseller books!!";
        case "music":
            return "Listen to this week's top 10 songs!!";
        default:
            return "No recommendations available!!";
    }
}

function eraseCookie(name) {
    document.cookie = name + "=; Max-Age=-99999999;"
}

function logOut() {
    eraseCookie("userPreferences");

    // hide recommendation container and show preference container
    document.getElementById('recommendation-container').style.display = 'none';
    document.getElementById('preference-container').style.display = 'block';
}

function displayRecomendationsOnLoad() {
    var preference = getCookie('userPreferences');

    if (preference) {
        displayRecomendations(preference);

        document.getElementById('preference-container').style.display = 'none';
        document.getElementById('recommendation-container').style.display = 'block';
    }
    return null;
}

// function to read the value of a cookie with given name
function getCookie(preference) {
    var nameEQ = preference + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length)
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

// Display recommendations on page Load
window.onload = displayRecomendationsOnLoad();