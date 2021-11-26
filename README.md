# Evaluate-News-NLP App/WebTool

Evaluate News NLP is a Natural Language Processing JS App/WebTool, that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

This project is provided by Egypt-FWD / Udacity | NLP is provided by MeaningCloud Sentiment Analysis API.

## Installation

```
$ git clone https://github.com/Mohammed-Mounir/Evaluate-News-NLP.git
$ cd Evaluate-News-NLP
$ npm install
```

## Usage/Run

Create account on [MeaningCloud](https://www.meaningcloud.com/developer/sentiment-analysis), you will be given a license key to start using the API.

Add .env file in the root folder, insert your key as follows:

```
API_KEY=WRITE YOUR KEY HERE
```

Open two terminals:

On the first Terminal

```
$ npm start
```

On the second Terminal

```
$ npm run build-prod
```

## Tech

- Webpack
- NodeJS
- ExpressJS
- Service Worker
- Jest (JavaScript testing framework)
- MeaningCloud API
