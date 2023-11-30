function analyzeText() {
    var inputElement = document.getElementById("analyse-input");
    if (!inputElement) {
        console.error("Input element not found!");
        return;
    }
    var text = inputElement.value;
    var sentimentResult = performSentimentAnalysis(text);
    displayResultImage(sentimentResult);
}


function performSentimentAnalysis(text) {
    const sentimentMap = {
        "positive": "happy_image",
        "negative": "negative_image",
    };
    const lowerCaseText = text.toLowerCase();
    for (const [keyword, result] of Object.entries(sentimentMap)) {
        if (lowerCaseText.includes(keyword)) {
            return result;
        }
    }
    return "neutral_image";
}


function displayResultImage(sentimentResult) {
    var imageContainer = document.getElementById("imageContainer");
    var resultImage = document.getElementById("resultImage");
    resultImage.src = "assets/img/" + sentimentResult + ".png";
    imageContainer.classList.remove("hidden");
}
