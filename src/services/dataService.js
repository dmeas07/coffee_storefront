import axios from "axios";
const catalog = [
  {
    _id: "1",
    title: "Dark Roast",
    price: 9.99,
    category: "Regular",
    image: "bean3.jpg",
  },
  {
    _id: "2",
    title: "Medium Roast",
    price: 9.99,
    category: "Regular",
    image: "bean1.jpg",
  },
  {
    _id: "3",
    title: "Blonde Roast",
    price: 9.99,
    category: "Regular",
    image: "bean2.jpg",
  },

  {
    _id: "4",
    title: "French Roast",
    price: 9.99,
    category: "Regular",
    image: "bean4.jpg",
  },
  {
    _id: "5",
    title: "Breakfast Roast",
    price: 9.99,
    category: "Regular",
    image: "bean5.jpg",
  },
  {
    _id: "6",
    title: "Italian Roast",
    price: 9.99,
    category: "Regular",
    image: "bean6.jpg",
  },
];

class Dataservice {
  async getCatalog() {
    // use this line to work without a server
    //  return catalog;

    // use these lines to work with the server
    let res = await axios.get("http://127.0.0.1:5000/api/catalog");
    return res.data;
  }

  async saveProduct(product) {
    let res = await axios.post("http://127.0.0.1:5000/api/catalog", product);
    return res.data;
  }

  saveOrder() {}

  validateCouponCode() {}

  async saveCoupon(coupon) {
    let res = await axios.post("http://127.0.0.1:5000/api/coupons", coupon);
    return res.data;
  }

  async getCoupons() {
    let res = await axios.get("http://127.0.0.1:5000/api/coupons");
    return res.data;
  }
}

export default Dataservice;
