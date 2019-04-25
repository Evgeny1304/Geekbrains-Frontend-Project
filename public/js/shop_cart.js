Vue.component('bigcart', {
    props: ['cart'],
    methods: {
        handleDeleteClick(item) {
            this.$emit('ondelete', item);
        },
        handleDeleteCart(){
            this.$emit('deleteall', this.cart);
        }
    },
    computed: {
        total() {
            return this.cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
        }
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
            <div v-for="item in cart" class="line">
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
                        \${{item.price}}
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
                        \${{item.price * item.quantity}}
                    </p>
                </div>
                <div class="column-short">
                    <button type="button" class="cart-icon" @click="handleDeleteClick(item)">
                        <i class="far fa-times-circle"></i>
                    </button>
                </div>
            </div>
            <div class="cart-buttons d-flex space-btw">
                <button class="cart-btn button" type="button" @click="handleDeleteCart()">
                    CLEAR SHOPPING CART
                </button>
                <button class="cart-btn button ml-auto" type="button">
                    CONTINUE SHOPPING
                </button>
            </div>
            </div>
  `,
});


