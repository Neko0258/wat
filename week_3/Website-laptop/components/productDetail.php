<?php
    if(isset($_GET['productID'])){
        $productIDDetail = $_GET['productID'];
        require_once ('../configs/database.php');
        mysqli_select_db($connection_obj, DATABASE_NAME);
        $queryGetProductDetail = "SELECT * FROM products WHERE ID = $productIDDetail";
        $resultProductDetail = mysqli_query($connection_obj, $queryGetProductDetail) or die(mysqli_error($connection_obj));
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="http://localhost/Website-laptop/css/productDetail.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <div class="product-detail-container">
        <div class="img-laptop-detail">
            <?php
                while ($row = mysqli_fetch_array($resultProductDetail, MYSQLI_BOTH)) {
                    $imageProduct = $row['Image'];
                    echo "<img class='img-laptop' src='$imageProduct' alt=''>";
                }
            ?>
        </div>
        <div class="product-info">
            <?php
            $resultProductDetail = mysqli_query($connection_obj, $queryGetProductDetail) or die(mysqli_error($connection_obj));

                while ($row = mysqli_fetch_array($resultProductDetail, MYSQLI_BOTH)) {
                    $imageProduct = $row['Image'];
                    $ID = $row['ID'];
                    $nameProduct = $row['Name'];
                    $inforProduct = $row['Information'];
                    $priceProduct = $row['Price'];
                    echo $ID;
                    echo $nameProduct;
                    echo $inforProduct;
                    echo "<p>B??? x??? l?? C??ng ngh??? CPU Intel Core i5 Alder Lake - 1240P S??? nh??n 12 S??? lu???ng 16 T???c ????? CPU 1.70 GHz T???c ????? t???i ??a Turbo Boost 4.4 GHz B??? nh??? ?????m 12 MB B??? nh??? RAM, ??? c???ng RAM 16 GB Lo???i RAM DDR5 2 khe (1 khe 8 GB onboard + 1 khe 8 GB) T???c ????? Bus RAM 4800 MHz H??? tr??? RAM t???i ??a 40 GB ??? c???ng 512 GB SSD NVMe PCIe (C?? th??? th??o ra, l???p thanh kh??c t???i ??a 1 TB)H??? tr??? th??m 1 khe c???m SSD M.2 PCIe m??? r???ng (n??ng c???p t???i ??a 1 TB) M??n h??nh M??n h??nh 14 inch ????? ph??n gi???i Full HD (1920 x 1080) T???n s??? qu??t 60 Hz C??ng ngh??? m??n h??nh M??n h??nh Wide View T???m n???n IPS Ch???ng ch??i Anti Glare LED Backlit 100% sRGB 400 nits ????? h???a v?? ??m thanh Card m??n h??nh Card t??ch h???p - Intel Iris Xe Graphics C??ng ngh??? ??m thanh Dolby Atmos C???ng k???t n???i & t??nh n??ng m??? r???ng C???ng giao ti???p 2 x Thunderbolt 4 h??? tr??? display / power delivery 1 x USB 2.0 Jack tai nghe 3.5 mm 1 x USB 3.2 HDMI LAN (RJ45) K???t n???i kh??ng d??y Bluetooth 5.2Wi-Fi 6E (802.11ax) Khe ?????c th??? nh??? Micro SD Webcam Full HD WebcamCamera IR ????n b??n ph??m C?? T??nh n??ng kh??c TPM 2.0 ????? b???n chu???n qu??n ?????i MIL STD 810H B???n l??? m??? 180 ????? B???o m???t v??n tay C??ng t???c kh??a camera Numberpad M??? kh??a khu??n m???t K??ch th?????c & tr???ng l?????ng K??ch th?????c, kh???i l?????ng D??i 323.4 mm - R???ng 223.1 mm - D??y 18 mm - N???ng 1.25 kg Ch???t li???u V??? kim lo???i - chi???u ngh??? tay Nh??m Magie Th??ng tin kh??c Th??ng tin Pin 3-cell Li-ion, 63 Wh H??? ??i???u h??nh Windows 11 Home SL Th???i ??i???m ra m???t 2022</p>";
                    echo " <p style='color:blue;'>Gi??:</p>";
                    echo "<p style='color:red;'>$priceProduct</p>";
                    echo " <p>(???? bao g???m VAT)</p>";
                    echo "<form action='http://localhost/Website-laptop/components/cart.php' method='POST'>";
                        echo "<input type='hidden' name='nameProduct' value='$nameProduct'/>";
                        echo "<input type='hidden' name='priceProduct' value='$priceProduct'/>";
                        echo "<input type='hidden' name='imageProduct' value='$imageProduct'/>";
                        echo "<input class='btn btn-primary' type='submit' name='add-to-cart' value='Th??m v??o gi??? h??ng'/>";
                    echo "</form>";
                }
            ?>

        </div>
    </div>
</body>

</html>