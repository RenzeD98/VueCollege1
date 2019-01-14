const shoppingItems = [
    {
        'name': 'Eggs',
        'quantity': 10,
        'editMode': false,
    },
    {
        'name': 'Bread',
        'quantity': 2,
        'editMode': false,
    },
    {
        'name': 'Milk',
        'quantity': 1,
        'editMode': false,
    },
    {
        'name': 'Cheese',
        'quantity': 2,
        'editMode': false,
    }
];

$( document ).ready(function () {
   appendItem(shoppingItems);
});

function addItem() {
    let newItemName = $('.new-name');
    let newItemQuantity = $('.new-quantity');

    var newItem = {
            'name': newItemName.val(),
            'quantity': newItemQuantity.val(),
            'editMode': false,
        }

    shoppingItems.unshift(newItem);

    appendItem(shoppingItems);
    newItemName.val('');
    newItemQuantity.val('');
}

function togglePurchased(item) {
    var label = $('.card-'+item.className);

    if(label.hasClass('striked')) {
        label.removeClass('striked');
    } else {
        label.addClass('striked');
    }
}

function showSearchResult() {
    var query = $('.search-box').val().toLowerCase();
    appendItem(shoppingItems, query);
}

function toggleEditMode(elm) {
    console.log(elm);
    $(elm).attr('style', 'display: none;');
    $(elm).next().css('display', 'block');
}

function appendItem(array, filter = '') {
    $('.card-item-wrapper').remove();

    var shoppingList = $('.card-group');

    $.each(array, function (index) {
        if (~this.name.toLowerCase().indexOf(filter)) {
            shoppingList.append('<div class="card-item card-item-wrapper">\n' +
                '                   <label onclick="toggleEditMode(this)" class="card-item-name card-'+index+'">'+ this.name +'</label>\n' +
                '                   <input style="display:none" value="'+this.name+'" autofocus type="text" class="card-item-edit">\n' +
                '                   <label class="card-item-quantity">'+ this.quantity +'</label>\n' +
                '                   <span><input onchange="togglePurchased(this)" class="'+index+'" type="checkbox"></span>\n' +
                '                </div>');
        }
    });
}
