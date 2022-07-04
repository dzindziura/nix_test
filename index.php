<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/style.css">
</head>
  <body>
    <div class="container">
        <div class="add_new">
            <div><input placeholder="Введіть кількість" name="new_number" type="text" class="text-field__input" id="new_number"/></div>
            <div><input placeholder="Введіть юніт" type="text" class="text-field__input" id="new_unit"/></div>
            <div><input placeholder="Введіть інгредієнт" type="text" class="text-field__input" id="new_ingredient"/></div>
            <div><button type="button" name="button" placeholder="Введіть інгредієнт" class="btn" id="add_new_ingredient" onclick="add_new_ingredient()">Додати новий інгредієнт</button></div>  
          </div>
    <table>
      <tbody id="new_elements">

        <tr data-id="">
          <th></th>
          <th>Кількість</th>
          <th>Юніт</th>
          <th>Інгредієнт</th>
          <th>Дія</th>
        </tr>
        <?php
          require 'component/item-list.php';
        ?>
      </tbody>
    </table>
    </div>

  </body>
  <!-- <script type="text/javascript">

  </script> -->
  <script src="js/script.js" type="text/javascript"></script>

</html>