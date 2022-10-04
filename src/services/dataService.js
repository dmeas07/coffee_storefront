const catalog = [
  {
    _id: "1",
    title: "Dark Roast",
    price: 9.99,
    category: "Regular",
    image: "bean1.jpg",
  },
  {
    _id: "2",
    title: "Medium Roast",
    price: 9.99,
    category: "Regular",
    image: "bean2.jpg",
  },
  {
    _id: "3",
    title: "Blonde Roast",
    price: 9.99,
    category: "Regular",
    image: "bean3.jpg",
  },
];

class Dataservice {
  getCatalog() {
    return catalog;
  }

  saveOrder() {}

  validateCouponCode() {}
}

export default Dataservice;
