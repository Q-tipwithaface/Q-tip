<!DOCTYPE html>
<html lang="en">
<html lang="en">
<head>
    <style>
        .food-image {
            position: absolute;
            height: 150px;
            width: 150px;
        }
    </style>
</head>

<body>
    <p id="timer"></p>
    <p id="score"></p>
    <img class="food-image" id="test1" src="" points="" onclick="scoreboard_sp(1)" />
    <img class="food-image" id="test2" src="" points="" onclick="scoreboard_sp(2)" />
    <img class="food-image" id="test3" src="" points="" onclick="scoreboard_sp(3)" />
    <img class="food-image" id="test4" src="" points="" onclick="scoreboard_sp(4)" />
    <img class="food-image" id="test5" src="" points="" onclick="scoreboard_sp(5)" />
    <script>
        const foodimages = [
            {
                "id": 1,
                "image": "https://png.pngtree.com/png-vector/20190130/ourlarge/pngtree-cute-minimalist-creative-cartoon-hamburger-png-image_611163.jpg",
                "name": "Burger",
                "points": "10"
            },
            {
                "id": 2,
                "image": "https://thumbs.dreamstime.com/b/french-fries-cartoon-clipart-red-paper-box-carton-121897301.jpg",
                "name": "Fries",
                "points": "20"
            },
            {
                "id": 3,
                "image": "https://clipartix.com/wp-content/uploads/2016/04/Popcorn-kernel-clipart-free-clipart-images.png",
                "name": "Popcorn",
                "points": "30"
            },
            {
                "id": 4,
                "image": "http://clipart-library.com/images/rTjGjMqec.png",
                "name": "Hotdog",
                "points": "40"
            },
            {
                "id": 5,
                "image": "http://clipart-library.com/img/1144032.png",
                "name": "icecream",
                "points": "50"
            }
        ];
        function get_images() {
            const foodImageElements = document.getElementsByClassName("food-image");
            for (let i = 0; i < foodImageElements.length; i++) {
                const imageElement = foodImageElements[i];
                const food = foodimages[i];
                imageElement.src = food.image;
                imageElement.points = parseInt(food.points);
            }
        }
        let score = 0;
        document.getElementById("score").innerHTML = "Score: " + score + " points";
        function scoreboard_sp(idid) {
            const pointsElement = document.getElementById("test" + idid);
            const points = pointsElement.points || 0;
            score += points;
            console.log(score);
            document.getElementById("score").innerHTML = "Score: " + score + " points";
        }
        function moveimage(element) {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            const imageWidth = element.offsetWidth;
            const imageHeight = element.offsetHeight;
            const maxYPosition = screenHeight - imageHeight;
            element.style.top = Math.floor(Math.random() * maxYPosition) + "px";
            element.style.left = screenWidth + "px";
            element.style.visibility = "visible";
            const animationDuration = 10; // Adjust the animation duration as needed
            // Animate the image to slide across the screen
            element.style.transition = "left " + animationDuration + "s linear";
            element.style.left = -imageWidth + "px"; // Move the image beyond the left side of the screen
        }
        function resetImagePosition(element) {
            const screenWidth = window.innerWidth;
            const imageWidth = element.offsetWidth;
            const maxYPosition = window.innerHeight - element.offsetHeight;
            element.style.top = Math.floor(Math.random() * maxYPosition) + "px";
            element.style.left = screenWidth + "px";
        }
        function startImageAnimation() {
            const foodImageElements = document.getElementsByClassName("food-image");
            for (let i = 0; i < foodImageElements.length; i++) {
                const imageElement = foodImageElements[i];
                moveimage(imageElement);
            }
        }
        function clearimages() {
            const foodImageElements = document.getElementsByClassName("food-image");
            for (let i = 0; i < foodImageElements.length; i++) {
                const imageElement = foodImageElements[i];
                imageElement.style.visibility = "hidden";
                resetImagePosition(imageElement);
            }
        }
        let timer = 30;
        document.getElementById("timer").innerHTML = "Time left: " + timer + " seconds";
        function onscreen() {
            clearimages();
            const something = Math.ceil(Math.random() * 5);
            timer--;
            document.getElementById("timer").innerHTML = "Time left: " + timer + " seconds";
            if (something >= 1) {
                moveimage(document.getElementById("test1"));
            }
            if (something >= 2) {
                moveimage(document.getElementById("test2"));
            }
            if (something >= 3) {
                moveimage(document.getElementById("test3"));
            }
            if (something >= 4) {
                moveimage(document.getElementById("test4"));
            }
            if (something >= 5) {
                moveimage(document.getElementById("test5"));
            }
        }
        get_images();
        startImageAnimation();
        setInterval(onscreen, 1000);
    </script>
</body>
</html>