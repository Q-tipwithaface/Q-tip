{% include Submenu.html %}
<html lang="en-US">
<head>
   <style> 
      input[type='Image'] { position: absolute; }
   </style>   
</head>

<body>

   <p id="timer"></p>
   <p id="score"></p>

   <input type="Image" id="test1" src="" height="150" width="150" points="" onclick="scoreboard_sp(1)" />
   <input type="Image" id="test2" src="" height="150" width="150" points="" onclick="scoreboard_sp(2)" />
   <input type="Image" id="test3" src="" height="150" width="150" points="" onclick="scoreboard_sp(3)" />
   <input type="Image" id="test4" src="" height="150" width="150" points="" onclick="scoreboard_sp(4)" />
   <input type="Image" id="test5" src="" height="150" width="150" points="" onclick="scoreboard_sp(5)" />


   <script>
            
      const food_api_url = 'https://fruitteam.duckdns.org/api/foods/';
      const scores_api_url = 'https://fruitteam.duckdns.org/api/topscores/';

      var foodstuff;
      var data;
      async function getFoodstorage() {
         const response = await fetch(food_api_url)
         const data = await response.json();
         console.log(data.foodstorage)
         const foodstuff = await data.foodstorage;
         console.log(foodstuff)
         return foodstuff
      }
      
      var getData;
      fetch(food_api_url)
         .then(response => response.json())
         // .then(data => console.log(data))
         .then(data => {
            getData = data;
            })
         .then(() => {
            console.log(getData);
         });

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
      }
      ];

      console.log(foodimages);

      // var getScores;
      // fetch(scores_api_url)
      //    .then(response => response.json())
      //    // .then(data => console.log(data))
      //    .then(data => {
      //       getScores = data;
      //       })
      //    .then(() => {
      //       console.log(getScores);
      //    });


      function get_images() {

         foodstuff = getFoodstorage();
         console.log(foodstuff);
         console.log(data);
         console.log(getData);

         // set image
         document.getElementById("test1").src = foodimages[0].image;
         document.getElementById("test2").src = foodimages[1].image;
         document.getElementById("test3").src = foodimages[1].image;
         document.getElementById("test4").src = foodimages[1].image;
         document.getElementById("test5").src = foodimages[1].image;
   
         // set points
         document.getElementById("test1").points = parseInt(foodimages[0].points);
         document.getElementById("test2").points = parseInt(foodimages[1].points);
         document.getElementById("test3").points = parseInt(foodimages[1].points);
         document.getElementById("test4").points = parseInt(foodimages[1].points);
         document.getElementById("test5").points = parseInt(foodimages[1].points);
      }

      var score = 0;
      document.getElementById("score").innerHTML = "Score: " + score + " points"
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
         document.getElementById("score").innerHTML = "Score: " + score + " points"
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
         update_topscores();
      }
   
      function update_topscores() {
         // get name of player by input
         
         // append new record to topscores with name input and new score
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
         //moveimage_interval = setInterval(moveimage, 1000, "test1");
         } 
         if (something >= 2) {
         moveimage("test2");
         //moveimage_interval2 = setInterval(moveimage, 1000, "test2");
         }
         if (something >= 3) {
         moveimage("test3");
         //moveimage_interval3 = setInterval(moveimage, 1000, "test3");
         }
         if (something >= 4) {
         moveimage("test4");
         //moveimage_interval4 = setInterval(moveimage, 1000, "test4");
         }
         if (something >= 5) {
         moveimage("test5");
         //moveimage_interval5 = setInterval(moveimage, 1000, "test5");
         }

         // document.write("Score: " + score + " points");
      }

      get_images();
      thing = setInterval(onscreen, 1000);
      image_timeout = setTimeout(stop_moveimage, 30000, thing);

         

   </script>
</body>
      <div class="wrapper">

<!-- <section> -->
        <!-- nighthawk coding society has altered arrangement and inserted navigation that is updated in independent file -->
<!-- <div id="title">
  <table>
    <tr>
      <td><a href="/">Home</a></td>
      <td><a href="/housing">Housing</a></td>
      <td><a href="/food">Food</a></td>
      <td><a href="/activities">Activities</a></td>
      <td><a href="/family-night">Family-Night</a></td>
      <td><a href="/gallery">Gallery</a></td>
    </tr>
  </table>
</div> -->