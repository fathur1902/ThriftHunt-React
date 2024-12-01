import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import products from "../../data/product"; // Pastikan path ini benar
import "./ProductDetail.css";
import { useEffect, useState } from "react";

export function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === Number(id)); // Konversi id ke number
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Produk tidak ditemukan</div>;
  }

  return (
    <div className="container-main">
      <div className="row">
        {/* Thumbnail Images */}
        <div className="col-md-3 mb-3">
          <div className="d-flex flex-column gap-2 thumbnail-scroll">
            <img
              src={product.img}
              alt={`Thumbnail of ${product.name}`}
              className="img-fluid"
            />
          </div>
        </div>

        {/* Main Product Image */}
        <div className="col-md-6 mb-3">
          <img
            src={product.img}
            alt={`Main view of ${product.name}`}
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
            <p>{product.description}</p>
            <ul className="list-unstyled">
              <li>
                <strong>Kategori:</strong> {product.category}
              </li>
              <li>
                <strong>Ukuran:</strong> {product.size}
              </li>
            </ul>
            <Link to={"/checkout"} className="btn btn-primary w-100">Beli Sekarang</Link>
            <Link to={"/keranjang"} className="btn btn-outline-secondary w-100">
              Masukan Keranjang
            </Link>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="related-products mt-5">
        <h2>Produk Serupa</h2>
        <div className="row">
          {products
            .filter((relatedProduct) => relatedProduct.id !== product.id) // Filter produk lain
            .map((relatedProduct) => (
              <div key={relatedProduct.id} className="col-md-3">
                <div className="product-item">
                  <img
                    src={relatedProduct.img}
                    alt={relatedProduct.name}
                    className="img-fluid"
                  />
                  <p className="product-name">{relatedProduct.name}</p>
                  <p className="product-price">
                    Rp. {relatedProduct.price.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
