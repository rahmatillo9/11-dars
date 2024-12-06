import React from "react";

const ProductCard = ({ product, onDelete }) => {

  const truncateText = (text, limit) => {
    return text.length > limit ? `${text.substring(0, limit)}...` : text;
  };

  return (
    <div className="card bg-base-100 shadow-xl p-4">
      <figure className="w-full h-64">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain w-full h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{product.title}</h2>

        <p className="text-gray-600">{truncateText(product.description, 100)}</p>
        <p className="text-lg font-semibold text-green-600">${product.price}</p>
        <div className="card-actions justify-end">

          <button
            onClick={() => {
              const confirmDelete = window.confirm(
                `Rostdan ham "${product.title}" mahsulotini o‘chirmoqchimisiz?`
              );
              if (confirmDelete) onDelete(product.id);
            }}
            className="btn btn-error text-white"
          >
            O‘chirish
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
