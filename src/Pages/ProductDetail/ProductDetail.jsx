import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import products from "../../data/product";
import "./ProductDetail.css";
import { useEffect, useState } from "react";

export function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    // const products = product();
    const foundProduct = products.find((p) => p.id === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Produk tidak ditemukan</div>;
  }

  return (
    <div className="container-main">
      <div className="row">
        <div className="col-md-3 mb-3">
          <div className="d-flex flex-column gap-2 thumbnail-scroll">
            <img src={product.img} alt="Thumbnail 1" className="img-fluid" />
            <img src={product.img} alt="Thumbnail 2" className="img-fluid" />
            <img src={product.img} alt="Thumbnail 3" className="img-fluid" />
          </div>
        </div>

        {/* Main Product Image */}
        <div className="col-md-6 mb-3">
          <img
            src={product.img}
            alt="Main Product Image"
            className="product-image img-fluid"
          />
        </div>

        {/* Product Details */}
        <div className="col-md-3">
          <div className="product-details">
            <h1>{product.name}</h1>
            <p className="text-danger fw-bold">
              Rp. {product.price.toLocaleString()}
            </p>
            <p>
              <i className="bi bi-star text-warning"></i>
              <i className="bi bi-star text-warning"></i>
              <i className="bi bi-star text-warning"></i>
              <i className="bi bi-star text-warning"></i>
              <i className="bi bi-star-half text-warning"></i>
              <span>(32 reviews)</span>
            </p>
            <p>{product.description}</p>
            <ul className="list-unstyled">
              <li>
                <strong>Kondisi Barang:</strong> {product.condition}
              </li>
              <li>
                <strong>Bahan:</strong> {product.material}
              </li>
              <li>
                <strong>Ukuran:</strong> {product.sizes.join(", ")}
              </li>
              <li>
                <strong>Warna:</strong> {product.colors.join(", ")}
              </li>
            </ul>
            <Link className="btn btn-primary w-100">Beli Sekarang</Link>
            <Link className="btn btn-outline-secondary w-100">
              Masukan Keranjang
            </Link>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews">
        <h2>{product.name} | Ulasan Pembeli</h2>
        {product.reviews.map((review, index) => (
          <div key={index} className="review-item">
            <p className="reviewer">{review.reviewer}</p>
            <p className="review-text">"{review.text}"</p>
            <p className="rating">
              {[...Array(review.rating)].map((_, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
            </p>
          </div>
        ))}
        <div className="review-form">
          <textarea placeholder="Tulis ulasan Anda..." rows="3"></textarea>
          <div className="d-flex align-items-center mt-2">
            <span>Peringkat Anda:</span>
            <div className="ms-2">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="far fa-star"></i>
              ))}
            </div>
          </div>
          <button className="btn btn-primary mt-2">Kirim Ulasan</button>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="related-products mt-5">
        <h2>Produk Serupa</h2>
        <div className="row">
          <div className="col-md-3">
            <div className="product-item">
              <img src="img/akos depan item.jpg" alt="Kaos Pria" />
              <p className="product-name">Kaos Pria</p>
              <p className="product-price">Rp. 50.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
