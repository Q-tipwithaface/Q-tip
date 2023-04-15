<head>
   <style> 
      input[type='Image'] { position: absolute; } /* positioning the images and formatting them as inputs */
   </style>   
</head>

<body>

   <p id="timer"></p> <!-- display time -->
   <p id="score"></p> <!-- display score -->
<!--  set to an image  id         image  size                     points    call scoreboard_sp to update user's score  -->
   <input type="Image" id="test1" src="" height="150" width="150" points="" onclick="scoreboard_sp(1)" />
   <input type="Image" id="test2" src="" height="150" width="150" points="" onclick="scoreboard_sp(2)" />
   <input type="Image" id="test3" src="" height="150" width="150" points="" onclick="scoreboard_sp(3)" />
   <input type="Image" id="test4" src="" height="150" width="150" points="" onclick="scoreboard_sp(4)" />
   <input type="Image" id="test5" src="" height="150" width="150" points="" onclick="scoreboard_sp(5)" />

   <script>
      // array with the food items
      const foodimages = [
      {//image 1
         "id": 1, 
         "image": "https://png.pngtree.com/png-vector/20190130/ourlarge/pngtree-cute-minimalist-creative-cartoon-hamburger-png-image_611163.jpg", // image from pngtree.com
         "name": "Burger", 
         "points": "10"
      }, 
      {//image 2
         "id": 2, 
         "image": "https://thumbs.dreamstime.com/b/french-fries-cartoon-clipart-red-paper-box-carton-121897301.jpg", // image from dreamstime.com
         "name": "Fries", 
         "points": "20"
      },
      {//image 3
         "id": 3, 
         "image": "https://clipartix.com/wp-content/uploads/2016/04/Popcorn-kernel-clipart-free-clipart-images.png", // image from clipartix.com
         "name": "Popcorn", 
         "points": "30"
      },
      {//image 4
         "id": 4, 
         "image": "http://clipart-library.com/images/rTjGjMqec.png", // image from clipart-library.com
         "name": "Hotdog", 
         "points": "40"
      },
      {//image 5
         "id": 5, 
         "image": "http://clipart-library.com/img/1144032.png", // image from clipart-library.com
         "name": "icecream", 
         "points": "50"
      }];
      console.log(foodimages); // display foodimages and its objects in the console to check if the data is correct

      function get_images() {
         // set image to a test in order to be moved across the screen in a later part of the program( function onscreen(){} )
         document.getElementById("test1").src = foodimages[0].image;
         document.getElementById("test2").src = foodimages[1].image;
         document.getElementById("test3").src = foodimages[2].image;
         document.getElementById("test4").src = foodimages[3].image;
         document.getElementById("test5").src = foodimages[4].image;
         // set points to a test in order to be pulled to update the score in a later part of the program( function scoreboard_sp(idid){} )
         document.getElementById("test1").points = parseInt(foodimages[0].points);
         document.getElementById("test2").points = parseInt(foodimages[1].points);
         document.getElementById("test3").points = parseInt(foodimages[2].points);
         document.getElementById("test4").points = parseInt(foodimages[3].points);
         document.getElementById("test5").points = parseInt(foodimages[4].points);
      }

      var score = 0; // set the starting score to 0 points
      document.getElementById("score").innerHTML = "Score: " + score + " points" // display that the starting score is 0 points
      function scoreboard_sp(idid) { // updates the score based on what food has been clicked
         if (idid == 1) {
            points = document.getElementById("test1").points; // gets the point value of food1
         } else if (idid == 2) {
            points = document.getElementById("test2").points; // gets the point value of food2
         } else if (idid == 3) {
            points = document.getElementById("test3").points; // gets the point value of food3
         } else if (idid == 4) {
            points = document.getElementById("test4").points; // gets the point value of food4
         } else if (idid == 5) {
            points = document.getElementById("test5").points; // gets the point value of food5
         } else { // what happens when the user doesn't click on a food
            points = 0;
         }
         score = score + points; // updates the score to add the amount of points from the food that was clicked
         console.log(score);
         document.getElementById("score").innerHTML = "Score: " + score + " points" // displays the score after it has been updated
      }

      function moveimage(idid) {
         var test = document.getElementById(idid);
      // let w_screen = window.screen.availWidth - 150;
      // let h_screen = window.screen.availHeight - 150;
      test.style.top = Math.floor((Math.random() * 500) + 1) + "px";
      test.style.left = Math.floor((Math.random() * 300) + 1) + "px";
      test.style.visibility = 'visible';
      }
      
      function clearimage(idid) {
         var clear1 = document.getElementById(idid)
         clear1.style.visibility = 'hidden';
      }

      function clearimages() {
         clearimage("test1");
         clearimage("test2");
         clearimage("test3");
         clearimage("test4");
         clearimage("test5");
      }
      
      function stop_moveimage(moveimage_interval) {
         clearInterval(moveimage_interval);
         clearimages();
      }

      timer = 30
      document.getElementById("timer").innerHTML = "Time left: " + timer + " seconds"

      function onscreen() {
         clearimages();
         something = Math.ceil(Math.random() * 5);
         timer = timer - 1
         document.getElementById("timer").innerHTML = "Time left: " + timer + " seconds"
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

      get_images();
      thing = setInterval(onscreen, 1000);
      image_timeout = setTimeout(stop_moveimage, 30000, thing);

   </script>
</body>