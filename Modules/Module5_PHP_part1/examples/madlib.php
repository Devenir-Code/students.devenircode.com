<!-- 
    In this example we are going to create a simple madlib form.
    The user will enter some words and we will use those words to create a madlib story.

    We will use the GET method to send the form data to the server.

    After you submit the form, you will see the values that were submitted in the URL.
    Like: madlib.php?name=John&color=blue&food=pizza&animal=dog&adjective1=funny&adjective2=smelly

    Anything after the ? is called a query string, and you can access the values using the $_GET superglobal.

    We'll use GET to set the values of the form fields if they are set.
    We'll also use GET to show the madlib story after the form is submitted.
 -->




<?php
// Set variables to null if they are not set


// this ?? is a null coalescing operator, its a shorthand way of writing the ternary operator:
// isset($_GET['name'])? $_GET['name'] : null;

$name = $_GET['name'] ?? null;
$color = $_GET['color'] ?? null;
$food = $_GET['food'] ?? null;
$animal = $_GET['animal'] ?? null;
$adjective1 = $_GET['adjective1'] ?? null;
$adjective2 = $_GET['adjective2'] ?? null;


//only show the form if the user has not submitted it
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
        <form method="get">
            <p>Enter your name:</p>
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


        <div id="madlib" <?php if (!$showMadlib) : ?> style="display:none" <?php endif; ?>>
            Once upon a time, there was a
            <b><? echo $adjective1 ?></b>
            person named
            <b><? echo $name ?></b> .
            <b><? echo $name ?></b>
            loved to eat
            <b> <? echo $adjective2 ?> <? echo $food ?></b>, especially when it was
            <b><? echo $color ?></b>
            . One day,
            <b><? echo $name ?></b>
            met a
            <b><? echo $adjective1 ?> <? echo $color ?> <? echo $animal ?></b>
            in the park. The
            <b><? echo $animal ?></b>
            looked hungry, so
            <b><? echo $name ?> </b> gave it some
            <b><? echo $food ?></b> .
            The
            <b><? echo $animal ?></b>
            ate the
            <b><? echo $food ?></b>
            and thanked
            <b><? echo $name ?></b>
            with a big smile.
        </div>
    </div>

</body>

</html>