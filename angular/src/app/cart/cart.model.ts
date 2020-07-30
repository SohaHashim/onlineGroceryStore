export class CartModel{
    constructor(
        public imageUrl: string,
        public title: string,
        public quantity: number,
        public price: number,
        public subtotal: number){}
}