import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../redux/actions/products_actions";
import "./catalog.css";
import { useDispatch, useSelector } from "react-redux";
import FilterBar from "../FilterBar/filterBar.jsx";


function Catalogo() {
  let productsArray = useSelector((state) => state.productsReducer.allProducts);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
 

  useEffect(() => {
    dispatch(getAllProducts(page));
  }, [page]);
 
  
  const next = () => {
    setPage(page + 1);
  };
  const prev = () => {
    setPage(page - 1);
  };
  console.log("ESTE ES EL ARRAY DE CATALOGO", productsArray)
  return (
    <div class="flex pt-24 bg-gray-200">
      <div class="flex-initial">
        <FilterBar />
        <div className="mt-32">
        {/*   <CategoryBar /> */}
       
        </div>
      </div>
      <div class="flex-auto">
        <div class="grid sm:grid-cols-3  sm:grid-rows-5  grid-cols-1 justify-center justify-items-center content-center items-center">
          {productsArray?.products ? (
            productsArray.products.map((producto) => {
              return (
                <Link
                  style={{ textDecoration: "none", outline: "none" }}
                  to={`/product/${producto._id}`}
                >
                  <div className="card bg-white mb-3">
                    <img
                      src={`http://localhost:3001/products/image/${producto.img}`}
                      alt="https://i.stack.imgur.com/y9DpT.jpg"
                      style={{ height: "400px", width: "420px" }}
                    />
                    <div
                      className="bg-gray-200"
                      style={{ height: "1px" }}
                    ></div>
                    <div className="p-4">
                      <p className="text-black">{producto.name}</p>
                      {producto.stock === 0 &&  <h4 className="text-red-500">No Stock</h4>}
                      <p className="text-blue-300">${producto.price}</p>
                      <p className="text-blue-300">{producto.brand}</p>
                      <p className="text-blue-300">{producto.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <div>No products</div>
          )}
        </div>
        <div>
          <div class="flex justify-center">
            <button
              onClick={prev}
              disabled={page === 1}
              className="border border-teal-500 bg-teal-500 text-black block rounded-sm font-bold py-4 px-6 ml-2 flex items-center"
            >
              <svg
                class="h-5 w-5 mr-2 fill-current"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="-49 141 512 512"
                style={{ enableBackground: "new -49 141 512 512" }}
                xmlSpace="preserve"
              >
                <path
                  id="XMLID_10_"
                  d="M438,372H36.355l72.822-72.822c9.763-9.763,9.763-25.592,0-35.355c-9.763-9.764-25.593-9.762-35.355,0 l-115.5,115.5C-46.366,384.01-49,390.369-49,397s2.634,12.989,7.322,17.678l115.5,115.5c9.763,9.762,25.593,9.763,35.355,0 c9.763-9.763,9.763-25.592,0-35.355L36.355,422H438c13.808,0,25-11.193,25-25S451.808,372,438,372z"
                ></path>
              </svg>
              Previous page
            </button>
            <button
              onClick={next}
              disabled={
                productsArray.products && productsArray.products.length < 15
              }
              className="border border-teal-500 bg-teal-500 text-black block rounded-sm font-bold py-4 px-6 ml-2 flex items-center"
            >
              Next page
              <svg
                className="h-5 w-5 ml-2 fill-current"
                clasversion="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="-49 141 512 512"
                style={{ enableBackground: "new -49 141 512 512" }}
                xmlSpace="preserve"
              >
                <path
                  id="XMLID_11_"
                  d="M-24,422h401.645l-72.822,72.822c-9.763,9.763-9.763,25.592,0,35.355c9.763,9.764,25.593,9.762,35.355,0
            l115.5-115.5C460.366,409.989,463,403.63,463,397s-2.634-12.989-7.322-17.678l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355,0
            c-9.763,9.763-9.763,25.592,0,35.355l72.822,72.822H-24c-13.808,0-25,11.193-25,25S-37.808,422-24,422z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalogo;
