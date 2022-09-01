const inputTag = document.querySelector('.form-control');
const shoppingListTag = document.querySelector('.shoppingListContainer');

let productId = 1;
const handleChange = (event) => {
    const inputValue = event.target.value;
    const spanTag = document.createElement('span');
    const productContainer = document.createElement('div');
    const parentDiv = document.createElement('div');
    const trashIcon = document.createElement('i');

    parentDiv.addEventListener('click', () => {
        const classExist = parentDiv.classList.contains('purchased');
        if(classExist){
            parentDiv.classList.remove('purchased');
        }else{
            parentDiv.classList.add('purchased');
        }
        
    });

    trashIcon.addEventListener('click', () => {
        productContainer.remove();
    })

    spanTag.id = productId;
    productContainer.classList.add('productContainer');
    parentDiv.classList.add('productName');
    trashIcon.classList.add('far', 'fa-trash-alt');

    const product = productId.toString() + '. ' + inputValue;

    spanTag.append(product);
    parentDiv.append(spanTag);
    productContainer.append(parentDiv, trashIcon)
    shoppingListTag.append(productContainer);

    inputTag.value = "";

    productId += 1;
}

inputTag.addEventListener('change' , handleChange);