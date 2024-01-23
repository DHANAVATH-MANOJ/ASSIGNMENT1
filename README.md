<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .survey {
      position: relative;
      font-size: 70px;
      text-align: center;
    }
    body{
      background-image: url("college.jpg");
      background-size: cover;
      background-repeat: no-repeat;
    }
    #yellow {
      background-color :beige;
    }
    h3 {
      position: relative;
      top: 18px;
      left: 5px;
    }
    .outer {
      width: 50%;
      background-color: rgba(40, 36, 36, 0.508);
      position: relative;
      left: 25%;
      float: left;
    }
    div h1 {
      text-align: center;
      font-size: 2.5rem;
    }
    .form {
      padding: 50px;
      font-size: 1.5rem;
      color: antiquewhite;
    }
  </style>
  <title>Document</title>
</head>
<body>
  <h1 class="survey">Survey Form</h1>
  <div class="outer"> 
    <form class="form">
      <h1>Fill Your Details</h1>
      <h3>Name</h3>
      -<label><input id="yellow" type="text"></label> <br> <br>
      --Last Name: 
      -<input id="yellow" type="text"> <br> <br>
      --Age: <br>
      -<input id="yellow" type="text"> <br> <br>
      --Grade: <br>
      -<input id="yellow" type="text"> <br> <br>
      <label for="username">Username:</label>
      <input id="yellow" type="text" id="username" name="username"> <br> <br>
      --Gender: <br>
      -<select id="yellow">
        <option>Male</option>
        <option>Female</option>
        <option selected>Both</option>
      </select> <br> <br>
      --comments: <br>
      <textarea id="yellow" name="comments" rows="4" cols="50"></textarea>
      <br> <br>
      <input type="date" name="" id=""> <br> <br>
      --Course <br>
      <input type="checkbox">-Maths
      <input type="checkbox">-science
      <input type="checkbox">-History
      <br> <br>
      <input  type="submit"> -
      <br> <br>
      --
    </form>  
  </div>
  </body>
</html>
