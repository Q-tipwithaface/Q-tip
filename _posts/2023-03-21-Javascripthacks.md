<head>
    <style>
        input[type='Image'] {
            position: absolute;
            transition: transform 1s linear; /* Add CSS transition for smooth sliding animation */
        }
    </style>
</head>

<body>
    <p id="timer"></p>
    <p id="score"></p>
    <!--  -->
    <input type="Image" id="test1" src="" height="150" width="150" points="" onclick="scoreboard_sp(1)" />
    <input type="Image" id="test2" src="" height="150" width="150" points="" onclick="scoreboard_sp(2)" />
    <input type="Image" id="test3" src="" height="150" width="150" points="" onclick="scoreboard_sp(3)" />
    <input type="Image" id="test4" src="" height="150" width="150" points="" onclick="scoreboard_sp(4)" />
    <input type="Image" id="test5" src="" height="150" width="150" points="" onclick="scoreboard_sp(5)" />
<!--  -->
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
               //
        function get_images() { 
            document.getElementById("test1").src = foodimages[0].image;
            document.getElementById("test2").src = foodimages[1].image;
            document.getElementById("test3").src = foodimages[2].image;
            document.getElementById("test4").src = foodimages[3].image;
            document.getElementById("test5").src = foodimages[4].image;
                  //
            document.getElementById("test1").points = parseInt(foodimages[0].points);
            document.getElementById("test2").points = parseInt(foodimages[1].points);
            document.getElementById("test3").points = parseInt(foodimages[2].points);
            document.getElementById("test4").points = parseInt(foodimages[3].points);
            document.getElementById("test5").points = parseInt(foodimages[4].points);
        }
//
        var score = 0;
        document.getElementById("score").innerHTML = "Score: " + score + " points";
//
        function scoreboard_sp(idid) {
            if (idid == 1) {
                points = document.getElementById("test1").points;
            } else if (idid == 2) {
                points = document.getElementById("test2").points;
            } else if (idid == 3) {
                points = document.getElementById("test3").points;
            } else if (idid == 4) {
                points = document.getElementById("test4").points;
            } else if (idid == 5) {
                points = document.getElementById("test5").points;
            } else {
                points = 0;
            }
            score = score + points;
            console.log(score);
            document.getElementById("score").innerHTML = "Score: " + score + " points";
        }
//
        function moveimage(idid) {
            var test = document.getElementById(idid);
            test.style.top = Math.floor((Math.random() * 500) + 1) + "px";
            test.style.left = "100%"; // Start from the right side of the screen
            test.style.visibility = 'visible';
//
            // Animate the image to slide across the screen
            requestAnimationFrame(function () {
                test.style.transform = "translateX(-100%)";
            });
        }
//
        function clearimage(idid) {
            var clear1 = document.getElementById(idid);
            clear1.style.visibility = 'hidden';
        }
//
        function clearimages() {
            clearimage("test1");
            clearimage("test2");
            clearimage("test3");
            clearimage("test4");
            clearimage("test5");
        }
//
        function stop_moveimage(moveimage_interval) {
            clearInterval(moveimage_interval);
            clearimages();
        }
//
        var timer = 30;
        document.getElementById("timer").innerHTML = "Time left: " + timer + " seconds";
//
        function onscreen() {
            clearimages();
            var something = Math.ceil(Math.random() * 5);
            timer = timer - 1;
            document.getElementById("timer").innerHTML = "Time left: " + timer + " seconds";
//
            if (something >= 1) {
                moveimage("test1");
            }
            if (something >= 2) {
                moveimage("test2");
            }
            if (something >= 3) {
                moveimage("test3");
            }
            if (something >= 4) {
                moveimage("test4");
            }
            if (something >= 5) {
                moveimage("test5");
            }
        }
//
        get_images();
        var thing = setInterval(onscreen, 1000);
        var image_timeout = setTimeout(stop_moveimage, 30000, thing);
    </script>
</body>
</html>
