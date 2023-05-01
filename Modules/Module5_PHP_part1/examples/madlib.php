<!-- 
    Instructions:

    In this example we are going to create a simple madlib form.
    The user will enter some words and we will use those words to create a madlib story.

    We will use the GET method to send the form data to the server.

    After you submit the form, you will see the values that were submitted in the URL.
    Like: madlib.php?name=John&color=blue&food=pizza&animal=dog&adjective1=funny&adjective2=smelly

    Anything after the ? is called a query string, and you can access the values using
    the $_GET superglobal.

    example: $_GET['name'] will return the value from the url: madlib.php?name=John
    
    We'll also use $_GET to show the madlib story after the form is submitted.
 -->




<?php
// Set variables to null if they are not set


/* 
Notice:
this ?? is a null coalescing operator, its a shorthand way of writing the ternary operator:
isset($_GET['name'])? $_GET['name'] : null;
*/

$name = $_GET['name'] ?? null;
$color = $_GET['color'] ?? null;
$food = $_GET['food'] ?? null;
$animal = $_GET['animal'] ?? null;
$adjective1 = $_GET['adjective1'] ?? null;
$adjective2 = $_GET['adjective2'] ?? null;


//only show the The madlib if the user has not submitted it
$showMadlib = false;
if (
    isset($name) &&
    isset($color) &&
    isset($food) &&
    isset($animal) &&
    isset($adjective1) &&
    isset($adjective2)
) {
    $showMadlib = true;
}

?>

<html>

<head>
    <title>Madlib Example</title>
    <style>
        .container {
            display: flex;
        }

        form {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }

        input {
            padding: 5px;
        }

        input[type="submit"] {
            padding: 5px 10px;
            background-color: #000;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        input[type="submit"]:hover {
            background-color: #B2D49B;
            color: #333333;
        }

        #madlib {
            font-family: serif;
            font-size: 1.8em;
            line-height: 1.5em;
            max-width: 600px;
            margin: 0 auto;
        }

        #madlib b {
            font-weight: bold;
            font-style: italic;
            color: #C00000
        }
    </style>
</head>

<body>
    <h1> Madlib Example:</h1>

    <div class="container">
        <!-- 
            Notice: the method="get" attribute on the form tag
            without the action attribute, the form will submit to the current page
         -->
        <form method="get">
            <p>Enter your funny name:</p>
            <input type="text" name="name" value="<?php echo $name ?>">
            <p>Enter an adjective:</p>
            <input type="text" name="adjective1" value="<?php echo $adjective1 ?>">
            <p>Enter your favorite color:</p>
            <input type="text" name="color" value="<?php echo $color ?>">
            <p>Enter your favorite food:</p>
            <input type="text" name="food" value="<?php echo $food ?>">
            <p>Enter an animal:</p>
            <input type="text" name="animal" value="<?php echo $animal ?>">
            <p>Enter another adjective:</p>
            <input type="text" name="adjective2" value="<?php echo $adjective2 ?>">
            <br>
            <input type="submit" value="Submit">
        </form>

        <!-- 
            Instructions:
            With in each b tag, make it so that the value of the $_GET variable is displayed

            Because we set the vars above we can use them here.
            For example, the first b tag should look like this:
            <b><?php echo $name ?></b>
         -->
        <div id="madlib" <?php if (!$showMadlib) : ?> style="display:none" <?php endif; ?>>
            <p>
                Once upon a time, there was a <b>ADJECTIVE1</b> person named
                <b>NAME</b>. <b>NAME</b> loved to eat <b>ADJECTIVE2 FOOD</b>,
                especially when it was <b>COLOR</b>.
            </p>

            <p>
                One day, <b>NAME</b> met a <b>ADJECTIVE1 COLOR ANIMAL</b> in the park.
                The <b>ANIMAL</b> looked hungry, so <b>NAME</b>
                gave it some <b>FOOD</b>. The <b>ANIMAL</b> ate the <b>FOOD</b>
                and thanked <b>NAME</b> with a big smile.
            </p>
        </div>
    </div>

    <div>
        <!-- 
        Instructions:    
        Try using var_dump and print_r to see what is in the $_GET superglobal,
        within the pre tags 
    -->

        <pre>

    </pre>
    </div>



</body>

</html>