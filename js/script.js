function add_new_ingredient(id){
    const new_number = document.getElementById("new_number"),
            new_unit = document.getElementById("new_unit"),
            new_ingredient = document.getElementById("new_ingredient");

    if(id != undefined){
        console.log('edit')
        const item = document.getElementsByClassName("item_list");

        Array.from(item).forEach(element => {
                if(id == element.getAttribute('data-id')){
                    console.log(element.childNodes);
                    let number = element.childNodes[1];
                    let unit = element.childNodes[2];
                    let ingredient = element.childNodes[3];
                    if(element.childNodes.length == 11){
                        number = element.childNodes[3];
                        unit = element.childNodes[5];
                        ingredient = element.childNodes[7];
                   }

                    number.textContent = new_number.value;
                    unit.textContent = new_unit.value;
                    ingredient.textContent = new_ingredient.value;
                    ajaxSendRequest(id, new_number.value,new_ingredient.value,new_unit.value, 'edit');

                }
        });
    const add_new_ingredient = document.getElementById("add_new_ingredient");

    add_new_ingredient.setAttribute('onClick', 'add_new_ingredient()')
    add_new_ingredient.textContent = "Додати новий інгредієнт";

    }else{
        console.log('add');
        const new_elements = document.getElementById("new_elements"),
        id = document.querySelector('[data-id]:last-child');
        
        let new_id = Number(id.getAttribute("data-id")) + 1;
        
        
        const new_element = document.createElement('tr');
        
        new_element.setAttribute('data-id', new_id);
        new_element.setAttribute('class', 'item_list');


        const new_element_number = document.createElement('td'),
                new_element_unit = document.createElement('td'),
                new_element_checkbox = document.createElement('td'),
                new_element_checkboxInput = document.createElement('input'),
                new_element_ingredient = document.createElement('td'),
                new_element_action = document.createElement('td');

        const buttonEdit = document.createElement('button'),
                buttonDelete = document.createElement('button');

        new_element_checkbox.append(new_element_checkboxInput);
        new_element_checkboxInput.setAttribute('type', 'checkbox');

        new_element_checkboxInput.setAttribute('onClick', `done(${new_id})`);

        buttonEdit.append('Редагувати');
        buttonDelete.append('Видалити');

        buttonEdit.setAttribute('class', 'editItem');
        buttonEdit.setAttribute('onClick', `editItem(${new_id})`);

        buttonDelete.setAttribute('id', 'delete');
        buttonDelete.setAttribute('onClick', `deleteItem(${new_id})`);

        buttonEdit.setAttribute('class', 'btn');
        buttonDelete.setAttribute('class', 'btn');

        new_element_action.append(buttonEdit,buttonDelete);

        new_element_number.append(new_number.value);
        new_element_unit.append(new_unit.value);
        new_element_ingredient.append(new_ingredient.value);

        new_element.append(new_element_checkbox,new_element_number,new_element_unit,new_element_ingredient,new_element_action);
        
        new_elements.append(new_element);
        ajaxSendRequest(undefined, new_number.value,new_ingredient.value,new_unit.value, 'add');
    }
    new_number.value = '';
    new_ingredient.value = '';
    new_unit.value = '';
}

function done(id){
    const item = document.getElementsByClassName("item_list");
    let status = 0;
    Array.from(item).forEach(element => {
            if(id == element.getAttribute('data-id')){
                if(element.childNodes.length == 11){
                    status = element.childNodes[1].childNodes[0].checked;
                }else{
                    status = element.childNodes[0].childNodes[0].checked;
                }
            }
    });
    // console.log(status);
    ajaxSendRequest(id, '' , '' , '' , '' ,status);
}

function deleteItem(id){
    console.log('dfgdfgdfgdfgd');
    const item = document.getElementsByClassName("item_list");

    Array.from(item).forEach(element => {
            if(id == element.getAttribute('data-id')){
                element.remove();
            }
    });
    ajaxSendRequest(id);
}

function editItem(id){
    const item = document.getElementsByClassName("item_list");

    Array.from(item).forEach(element => {
            if(id == element.getAttribute('data-id')){
                console.log(element.childNodes);
                if(element.childNodes.length == 11){
                    let number = element.childNodes[3].textContent;
                    let unit = element.childNodes[5].textContent;
                    let ingredient = element.childNodes[7].textContent;
                    setNewParams(id,number,unit,ingredient);
                }else{
                    let number = element.childNodes[1].textContent;
                    let unit = element.childNodes[2].textContent;
                    let ingredient = element.childNodes[3].textContent;
                    setNewParams(id,number,unit,ingredient);
                }

            }
    });
}
function setNewParams(id,number,unit,ingredient){
    const new_number = document.getElementById("new_number"),
          new_unit = document.getElementById("new_unit"),
          add_new_ingredient = document.getElementById("add_new_ingredient"),
          new_ingredient = document.getElementById("new_ingredient");
    
    add_new_ingredient.setAttribute('onClick', `add_new_ingredient(${id})`);
    add_new_ingredient.textContent = "Зберегти";

    new_number.value = number;
    new_unit.value = unit;
    new_ingredient.value = ingredient;

    // console.log(new_number, new_unit, new_ingredient);
}


function ajaxSendRequest(id, new_number,new_ingredient,new_unit,edit, status){
    if(window.XMLHttpRequest){
        a = new XMLHttpRequest();
    }else{
        a = new ActiveXObject('Microsoft.XMLHTTP');
    }
    a.onreadestatechange = function() {
        if(a.readyState == 4 && a.status == 200){
            alert(a.responseText);
        }
    }
    let url = "ajax/addEdit.php";
    let val = "number=" + new_number + "&unit=" + new_unit + "&ingredient=" + new_ingredient + "&status=" + status;

    if(id != undefined){
        val = "id=" + id + "&number=" + new_number + "&unit=" + new_unit + "&ingredient=" + new_ingredient + "&edit=" + edit + "&status=" + status;
    }
    a.open("POST", url, true);
    a.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    a.setRequestHeader("content-type", val.length);
    a.setRequestHeader("connection", "close");
    
    a.send(val);

}