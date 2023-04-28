---
title: Number Game
layout: default
permalink: /numbergame/
type: pbl
---

<html>
  <head>
    <title>Guess the Number</title>
    <style>
      /* Define variables for colors */
      :root {
        --primary-color: #800080;
        --secondary-color: #0000FF;
        --aqua-color: #7fffd4;
        --text-color: #800080;
      }
      /* Use variables to style elements */
      body {
        background-color: var(--secondary-color);
        color: var(--text-color);
        font-family: 'Comic Sans MS';
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 90vh; /* Adjust this to your desired height */
      }
      h1 {
        color: var(--primary-color);
        font-size: 6rem;
        text-align: center;
        margin-top: 0rem;
        margin-block-end: 0em;
      }
      p {
        margin: 1rem 0;
        margin-block-start: 0em;
        margin-block-end: 1em;
        font-size: 2rem;
      }
      input[type="text"], button {
        width: 100%;
        max-width: 25rem;
        margin-bottom: .5rem;
      }
      input[type="text"] {
        padding: 1rem;
        border: 1px solid black;
        border-radius: 1rem;
        font-size: 1.2rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 5);
      }
      button {
        background-color: var(--primary-color);
        color: #c0c0c0;
        border: 1px solid black;
        border-radius: 5rem;
        padding: 1rem 1rem;
        font-size: 1.2rem;
        cursor: pointer;
        box-shadow: 0 0 10px rgba(0, 0, 0, 5);
      }
      button:hover {
        background-color: var(--aqua-color);
        box-shadow: 0 0 10px rgba(0, 0, 0, 5);
      }
      #result {
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;
        margin-top: 2rem;
      }
      #home-button {
        position: absolute;
        top: 0;
        left: 0;
        margin: 1rem;
        padding: 0.5rem 1rem;
        background-color: var(--primary-color);
        color: #c0c0c0;
        border: 1px solid black;;
        border-radius: 0.5rem;
        font-size: 1.2rem;
        cursor: pointer;
        box-shadow: 0 0 10px rgba(0, 0, 0, 5);
      }
      #home-button:hover {
        background-color: var(--aqua-color);
        box-shadow: 0 0 10px rgba(0, 0, 0, 5);
      }
    </style>
  </head>
  <body>
    <button id="home-button" onclick="goHome()">Home</button>
    <h1>Guess the Number</h1>
    <p>Try to guess the number between 1 and 100.</p>
    <input type="text" id="guess" placeholder="Enter your guess">
    <button onclick="checkGuess()">Submit</button>
    <p id="result"></p>
    <script>
      // Generate a random number between 1 and 100
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      let attempts = 0;
      function checkGuess() {
        // Get the user's guess
        const guess = parseInt(document.getElementById("guess").value);
        // Increase the number of attempts
        attempts++;
        // Check if the guess is correct
        if (guess === randomNumber) {
          document.getElementById("result").innerHTML = `Congratulations! You guessed the number in ${attempts} attempts.`;
        } else if (guess < randomNumber) {
          document.getElementById("result").innerHTML = "Too low. Guess again.";
        } else {
          document.getElementById("result").innerHTML ="Too high. Guess again.";
        }
      }  
      function goHome() {
    // Redirect to home page
    window.location.href = "https://q-tipwithaface.github.io/Q-tip/";
  }
</script>
