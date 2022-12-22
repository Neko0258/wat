<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="http://localhost/Lab3-PHP/css/calculate.css">
    <link rel="stylesheet" href="http://localhost/Lab3-PHP/css/index.css">
</head>

<body>
    <div class="calculate-container">
        <?php 
                $result = 1;
                $areaCircle = 10*pi();
                $volumeSphere = (4*pi()*(10**3))/3;
                for($i=1; $i<=10; $i++) {
                    $result = $result * $i;
                } 
            ?>

        <p>Giai thừa của 10 = <?php echo $result?>
        </p>
        <p>Diện tích hình tròn bán kính 10 = <?php echo $areaCircle?>
        </p>
        <p>Thể tích hình khối cầu bán kính 10 = <?php echo $volumeSphere?>
        </p>
        <p class="text-hello">Hello</p>
    </div>
</body>

</html>