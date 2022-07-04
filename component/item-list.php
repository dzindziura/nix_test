<?php
    require_once 'class/crud.php';
    $crud = new Crud();
    $query = "SELECT * FROM dataItem ORDER BY id";
    $result = $crud->getData($query);
    $result2 = $crud->getData('SHOW TABLE STATUS FROM nix_test');
    ?>
    <tr data-id="<?= $result2[0]['Auto_increment'] ?>"></tr>
    <?php
    foreach ($result as $row) {
        if($row['done'] == 'true'){
            $checkbox = '<td><input type="checkbox" onclick="done('.$row['id'].')" checked/></td>';
        }else{
            $checkbox = '<td><input type="checkbox" onclick="done('.$row['id'].')"/></td>';
        }
        ?>
            <tr data-id="<?= $row['id']; ?>" class="item_list">
            <?php echo $checkbox ?>
            <td><?= $row['numbers']; ?></td>
            <td><?= $row['unit']; ?></td>
            <td><?= $row['ingredient']; ?></td>
            <td>
                <button class="btn" onclick="editItem(<?= $row['id'] ?>)">Редагувати</button>
                <button id="delete" class="btn" onclick="deleteItem(<?=$row['id']?>)">Видалити</button>
            </td>
            </tr>
        <?php
    }
    
    
    ?>