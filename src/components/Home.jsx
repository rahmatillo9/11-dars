import React, { useState, useEffect } from "react";
import ProductCard from "./product-card";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addProduct = () => {
    const newProduct = {
      id: Date.now(),
      title: `Yangi Mahsulot ${products.length + 1}`,
      price: Math.floor(Math.random() * 100) + 1,
      description: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum magnam quibusdam voluptatum iste voluptates quo illo neque voluptate, odit corporis ad dolore nam possimus, enim nesciunt ex, officiis perferendis tenetur!</p>,
      image: "https://via.placeholder.com/150",
    };
    setProducts([newProduct, ...products]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="bg-gray-900 min-h-screen p-4">
      <h1 className="text-4xl sm:text-5xl text-center my-8 text-white font-bold">
        Mahsulotlar
      </h1>


      <div className="text-center mb-6">
        <button
          onClick={addProduct}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Mahsulot Qo‘shish
        </button>
      </div>


      {loading ? (
        <p className="text-center text-white text-xl animate-pulse">
          Yuklanmoqda...
        </p>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onDelete={deleteProduct}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-white text-xl">
          Mahsulotlar topilmadi!
        </p>
      )}
    </div>
  );
};

export default Home;
