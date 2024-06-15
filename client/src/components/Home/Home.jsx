import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
    const { categories, setCategories, products, setProducts } = useContext(Context);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsRes = await fetchDataFromApi("/api/products?populate=*");
                setProducts(productsRes);
                const categoriesRes = await fetchDataFromApi("/api/categories?populate=*");
                setCategories(categoriesRes);
            } catch (error) {
                console.error("Error fetching data:", error);
               
            }
        };

        fetchData();
    }, [setCategories, setProducts]);

    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories} />
                    <Products products={products} headingText="Popular Products"/>
                </div>
            </div>
        </div>
    );
};

export default Home;
