import { useContext, useState } from "react";
import { Context } from "../../utils/context";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";

const handleIconClick = (socialMedia) => {
    // Perform actions based on the clicked social media icon
    switch (socialMedia) {
        case 'facebook':
            window.open('https://www.facebook.com/profile.php?id=100048499261254', '_blank');
            break;
        case 'twitter':
            window.open('https://twitter.com/Ashish_Kumar07_', '_blank');
            break;
        case 'instagram':
            window.open('https://www.instagram.com/who_ashish__', '_blank');
            break;
        case 'linkedin':
            window.open('https://www.linkedin.com/in/ashish-kumar-124983267', '_blank');
            break;
        case 'pinterest':
            window.open('https://in.pinterest.com/ashishkumararmy121', '_blank');
            break;
        default:
            break;
    }
};



const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const { handleAddToCart } = useContext(Context);
    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

    const decrement = () => {
        setQuantity((prevState) => {
            if (prevState === 1) return 1;
            return prevState - 1;
        });
    };
    const increment = () => {
        setQuantity((prevState) => prevState + 1);
    };

    if (!data) return;
    const product = data?.data?.[0]?.attributes;

    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
<img src={process.env.REACT_APP_DEV_URL + product.img.data[0].attributes.url} alt=""/>
                    </div>
                    <div className="right">
                        <span className="name">{product.title}</span>
                        <span className="price">&#8377;{product.price}</span>
                        <span className="desc">{product.desc}</span>

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span>
                            </div>
                            <button
                                className="add-to-cart-button"
                                onClick={() => {
                                    handleAddToCart(data?.data?.[0], quantity);
                                    setQuantity(1);
                                }}
                            >
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div>

                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">
                                Category:{ " "}
                                <span>
                                    {
                                        product.categories.data[0].attributes
                                            .title
                                    }
                                </span>
                            </span>
                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                <div onClick={() => handleIconClick('facebook')}>
                        <FaFacebookF/>
                    </div>
                    <div onClick={() => handleIconClick('twitter')}>
                        <FaTwitter />
                    </div>
                    <div onClick={() => handleIconClick('instagram')}>
                        <FaInstagram />
                    </div>
                    <div onClick={() => handleIconClick('linkedin')}>
                        <FaLinkedinIn />
                    </div>
                            
                       <div onClick={() => handleIconClick('pinterest')}>
                        <FaPinterest/>
                    </div>                
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts
                    productId={id}
                    categoryId={product.categories.data[0].id}
                />
            </div>
        </div>
    );
};

export default SingleProduct;