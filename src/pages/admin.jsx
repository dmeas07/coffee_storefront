import "./admin.css";
import { useState } from "react";
import Dataservice from "./../services/dataService";

const Admin = () => {
  const [coupon, setCoupon] = useState({});
  const [allCoupons, setAllCoupons] = useState([]);

  const [product, setProduct] = useState({});
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    loadCoupons();
    loadProducts();
  }, []);

  const loadCoupons = async () => {
    let service = new Dataservice();
    let list = await service.getCoupons();
    setAllCoupons(list);
  };

  const loadProducts = async () => {
    let service = new Dataservice();
    let prods = await service.getCatalog();
    setAllProducts(prods);
  };

  const handleCouponChange = (e) => {
    const text = e.target.value;
    const name = e.target.name;

    let copy = { ...coupon };
    copy[name] = text;
    setCoupon(copy);
  };

  const saveCoupon = async () => {
    // fix discount to be a number
    let copy = { ...coupon };
    copy.discount = parseFloat(copy.discount);

    let service = new Dataservice();
    let c = await service.saveCoupon(copy);
    console.log(c);

    let couponList = [...allCoupons];
    couponList.push(copy);
    setAllCoupons(couponList);
  };

  const handleProductChange = (e) => {
    const text = e.target.value;
    const name = e.target.name;

    let copy = { ...product };
    copy[name] = text;
    setProduct(copy);
  };

  const saveProduct = async () => {
    let copy = { ...product };
    copy.price = parseFloat(copy.price);

    // save on server
    let service = new Dataservice();
    let prod = await service.saveProduct(copy);
    console.log(prod);

    let prodList = [...allProducts];
    prodList.push(copy);
    setAllProducts(prodList);
  };

  return (
    <div className="admin">
      <h1>Admin Page</h1>

      <div className="parent">
        <section className="sec-products">
          <h3>Prodcuts</h3>
          <div className="form">
            <div className="my-control">
              <label>Title</label>
              <input name="title" onChange={handleProductChange} type="text" />
            </div>
            <div>
              <label>Price</label>
              <input
                name="price"
                onChange={handleProductChange}
                type="number"
              />
            </div>
            <div>
              <label>Image</label>
              <input name="image" onChange={handleProductChange} type="text" />
            </div>
            <div>
              <label>Category</label>
              <input
                name="category"
                onChange={handleProductChange}
                type="text"
              />
            </div>
            <div className="my-control">
              <button onClick={saveProduct} className="btn btn-dark">
                Save
              </button>
            </div>
          </div>
          <ul>
            {allProducts.map((p) => (
              <li key={p.title}>
                {p.title} - {p.category} - ${p.price}
              </li>
            ))}
          </ul>
        </section>
        <section className="sec-discount">
          <h3>Coupon Code</h3>
          <div className="form">
            <div className="my-control">
              <label>Code</label>
              <input name="code" onChange={handleCouponChange} type="text" />
            </div>
            <div className="my-control">
              <label>Discount</label>
              <input
                name="discount"
                onChange={handleCouponChange}
                type="number"
              />
            </div>
            <div className="my-control">
              <button onClick={saveCoupon} className="btn btn-dark">
                Save
              </button>
            </div>
          </div>
          <ul>
            {allCoupons.map((c) => (
              <li>
                {c.code} - {c.discount}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Admin;
