from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from textblob import TextBlob

# Create your views here.
def index(request):
    return render(request, 'index.html')

def sentimental_analysis(request):
    if request.method == "POST":
        text_input = request.POST.get('q', '')
        analysis = TextBlob(text_input)
        sentiment = analysis.sentiment.polarity
        
        if sentiment>0:
            sentiment_result = 'positive'
        elif sentiment<0:
            sentiment_result = 'negative'
        else:
            sentiment_result = 'neutral'
        content = {
            'input_text':text_input,
            'sentiment_result': sentiment_result,
        }
        return render(request, 'result.html', content)
    return render(request, 'index.html')
        