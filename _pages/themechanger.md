---
title: Theme Changer
layout: default
permalink: /themechanger/
type: pbl
---
# <center>Theme Changer</center>

<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="../assets/css/fastpages-styles.css" id="default-theme-link">
    <link rel="stylesheet" href="../assets/css/dark-mode1.css" id="dark-theme-link">
    <link rel="stylesheet" href="../assets/css/other-style.css" id="other-theme-link" disabled>
    <link rel="stylesheet" href="../assets/css/another-style.css" id="another-theme-link" disabled>
    <link rel="stylesheet" href="../assets/css/mort-style.css" id="another-theme-link" disabled>
</head>
<body>
    <center><button id="default-theme-toggle">Default Theme</button></center>
    <center><button id="dark-theme-toggle">Dark Theme</button></center>
    <center><button id="other-theme-toggle">Other Theme </button></center>
    <script>
        const defaultToggleButton = document.querySelector('#default-theme-toggle');
        const darkToggleButton = document.querySelector('#dark-theme-toggle');
        const otherToggleButton = document.querySelector('#other-theme-toggle');
        const anotherToggleButton = document.querySelector('#another-theme-toggle');
        const defaultThemeLink = document.querySelector('#default-theme-link');
        const darkThemeLink = document.querySelector('#dark-theme-link');
        const otherThemeLink = document.querySelector('#other-theme-link');
        const anotherThemeLink = document.querySelector('#another-theme-link');
        defaultToggleButton.addEventListener('click', () => {
            defaultThemeLink.disabled = false;
            darkThemeLink.disabled = true;
            otherThemeLink.disabled = true;
            anotherThemeLink.disabled = true;
        });
        darkToggleButton.addEventListener('click', () => {
            defaultThemeLink.disabled = true;
            darkThemeLink.disabled = false;
            otherThemeLink.disabled = true;
            anotherThemeLink.disabled = true;
        });
        otherToggleButton.addEventListener('click', () => {
            defaultThemeLink.disabled = true;
            darkThemeLink.disabled = true;
            otherThemeLink.disabled = false;
            anotherThemeLink.disabled = true;
        });
        anotherToggleButton.addEventListener('click', () => {
            defaultThemeLink.disabled = true;
            darkThemeLink.disabled = true;
            otherThemeLink.disabled = true;
            anotherThemeLink.disabled = false;
        });
    </script>
</body>
</html>