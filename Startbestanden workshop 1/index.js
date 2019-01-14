var shoppingList = new Vue({
    el: '#app',
    data: {
        searchWord: '',
        newItemName: '',
        newItemQuantity: '',
        shoppingItems: [
            {
                'name': 'Eggs',
                'quantity': 10,
                'editMode': false,
                'purchased': 'true',
            },
            {
                'name': 'Bread',
                'quantity': 2,
                'editMode': false,
                'purchased': false,
            },
            {
                'name': 'Milk',
                'quantity': 1,
                'editMode': false,
                'purchased': false,
            },
            {
                'name': 'Cheese',
                'quantity': 2,
                'editMode': false,
                'purchased': false,
            }
        ]
    },
    methods: {
        addItem() {
            this.shoppingItems.push({
               'name': this.newItemName,
               'quantity': this.newItemQuantity,
               'editmode': false,
               'purchased': false
            });
            this.newItemName = '';
            this.newItemQuantity = '';
        },
        togglePurchased(item) {
            item.purchased = !item.purchased;
        },
        toggleEditMode(item) {
            item.editMode = !item.editMode;
        }
    },
    computed: {
        filteredItems() {
            return this.shoppingItems.slice(0).reverse().filter(
                item => {
                    return item.name.toLowerCase().includes(this.searchWord.toLowerCase());
                }
            )
        }
    }
});