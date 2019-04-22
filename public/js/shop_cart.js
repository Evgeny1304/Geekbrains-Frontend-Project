Vue.component('bigcart', {
    props: ['bigcart'],
    data(){
       return {
           bigCart:[],
       }
    },
    methods: {
        handleDeleteClick(item) {
            this.$emit('ondelete', item);
        },
    },
    computed: {
        total() {
            return this.bigCart.reduce((acc, item) => acc + item.quantity * item.price, 0);
        }
    },
    mounted() {
        fetch(`${API_URL}/cart`)
            .then(response => response.json())
            .then((items) => {
                this.bigCart = items;
            });
    },
    template: `
           <div class="shop-cart">
                          <div class="line">
                <div class="column-wide">
                    <h3 class="content-heading">
                        Product Details
                    </h3>
                </div>
                <div class="column-short">
                    <h3 class="content-heading">
                        Unit Price
                    </h3>
                </div>
                <div class="column-short">
                    <h3 class="content-heading">
                        Quantity
                    </h3>
                </div>
                <div class="column-short">
                    <h3 class="content-heading">
                        Shipping
                    </h3>
                </div>
                <div class="column-short">
                    <h3 class="content-heading">
                        Subtotal
                    </h3>
                </div>
                <div class="column-short">
                    <h3 class="content-heading">
                        ACTION
                    </h3>
                </div>
            </div>
            <div class="line">
                <div class="column-wide">
                    <figure class="cart-item d-flex">
                        <a href="single_page.html">
                            <img :src="item.image" width="100" height="115" alt="Product picture" class="cart-item__img">
                        </a>
                        <figcaption>
                            <h3 class="cart-item__title">
                                {{item.name}}
                            </h3>
                            <p class="cart-item__text">
                                Color:
                                <span>
                                Red
                            </span>
                            </p>
                            <p class="cart-item__text">
                                Size:
                                <span>
                                Xll
                            </span>
                            </p>
                        </figcaption>
                    </figure>
                </div>
                <div class="column-short">
                    <p class="cart-text">
                        {{item.price}}
                    </p>
                </div>
                <div class="column-short">
                    <label>
                        <input type="number" class="cart-quantity" v-model="item.quantity">
                    </label>
                </div>
                <div class="column-short">
                    <p class="cart-text">
                        FREE
                    </p>
                </div>
                <div class="column-short">
                    <p class="cart-text">
                        {{item.price}}
                    </p>
                </div>
                <div class="column-short">
                    <button type="button" class="cart-icon" @click="handleDeleteClick(item)">
                        <i class="far fa-times-circle"></i>
                    </button>
                </div>
            </div>
            </div>
  `,
});



// const app = new Vue({
//     el: "#app",
//     data: {
//         items: [],
//         cart: [],
//         filterValue: '',
//         menuItems: [],
//         searchQuery: '',
//         isVisibleCart: false,
//     },
//     mounted() {
//         fetch(`${API_URL}/cart`)
//             .then(response => response.json())
//             .then((items) => {
//                 this.cart = items;
//             });
//     },
//     methods: {
//         handleSearchClick(query) {
//             this.filterValue = query;
//         },
//         handleBuyClick(item) {
//             const cartItem = this.cart.find((entry) => entry.id === item.id);
//             if (cartItem) {
//                 // товар в корзине уже есть, нужно увеличить количество
//                 fetch(`${API_URL}/cart/${item.id}`, {
//                     method: 'PATCH',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({quantity: cartItem.quantity + 1}),
//                 })
//                     .then((response) => response.json())
//                     .then((item) => {
//                         const itemIdx = this.cart.findIndex((entry) => entry.id === item.id);
//                         Vue.set(this.cart, itemIdx, item);
//                     });
//             } else {
//                 // товара в корзине еще нет, нужно добавить
//                 fetch(`${API_URL}/cart`, {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({...item, quantity: 1})
//                 })
//                     .then((response) => response.json())
//                     .then((item) => {
//                         this.cart.push(item);
//                     });
//             }
//         },
//         handleDeleteClick(item) {
//             if (item.quantity > 1) {
//                 fetch(`${API_URL}/cart/${item.id}`, {
//                     method: 'PATCH',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({quantity: item.quantity - 1}),
//                 })
//                     .then((response) => response.json())
//                     .then((item) => {
//                         const itemIdx = this.cart.findIndex((entry) => entry.id === item.id);
//                         Vue.set(this.cart, itemIdx, item);
//                     });
//             } else {
//                 fetch(`${API_URL}/cart/${item.id}`, {
//                     method: 'DELETE',
//                 })
//                     .then(() => {
//                         this.cart = this.cart.filter((cartItem) => cartItem.id !== item.id);
//                     });
//             }
//         }
//     }
// });