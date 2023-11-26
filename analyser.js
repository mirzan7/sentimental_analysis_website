function analyzeText() 
{
    var text = document.getElementById("analyse-input").value;
    var sentimentResult = performSentimentAnalysis(text);
    displayResultImage(sentimentResult);
}

function performSentimentAnalysis(text) 
{
    if (text.toLowerCase().includes("positive")) {
        return "happy_image";
    } else if (text.toLowerCase().includes("negative")) {
        return "negative_image";
    } else {
        return "neutral_image";
    }
}

function displayResultImage(sentimentResult) {
    var imageContainer = document.getElementById("imageContainer");
    var resultImage = document.getElementById("resultImage");
    resultImage.src = "assets/img/" + sentimentResult + ".png";
    imageContainer.classList.remove("hidden");
}
