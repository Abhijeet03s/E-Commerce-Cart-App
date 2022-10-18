export default function Cart({ cartProducts, setCartProducts, handleRemoveToCart, handleAddToCart, removeAllProducts }) {

    const handleRemove = (id) => {
        const arr = cartProducts.filter((item) => item.id !== id);
        setCartProducts(arr);
    };

    const totalPrice = cartProducts.reduce((price, item) => price + item.qty * item.price, 0)

    return (
        <div tabIndex={0} className="card card-compact dropdown-content w-full bg-base-100 rounded-none">
            <div>
                {cartProducts.length >= 1 && (<button className="p-2 absolute top-5 right-10 rounded-[5px] bg-[#2e2e2e] text-white" onClick={removeAllProducts}>Clear Cart</button>)}
            </div>
            <div className="card-body container max-w-full md:min-h-screen">
                {cartProducts.length === 0 && (
                    <img className="absolute top-[20%] left-[35%]" height={1200} width={400} src="./images/empty-cart.png" alt="" />
                )}
                {cartProducts.map((item, ind) => {
                    return (
                        <div key={ind} className="max-w-full text-black flex justify-evenly items-center px-36 py-10 m-0">
                            <img className="w-32" src={item.image} alt="product-image" />
                            <h1 className="md:w-36 md:text-center text-black">{item.title}</h1>
                            <div className="md:w-20 md:flex md:justify-evenly md:items-center btn-group">
                                <button onClick={() => { handleRemoveToCart(item) }} className="btn border-0 bg-[#E21717]">-</button>                               
                                <span className="p-3">{item.qty}</span>
                                <button onClick={() => { handleAddToCart(item) }} className="btn border-0 bg-green-600 ">+</button>
                            </div>
                            <h1 className="md:w-20 md:text-[16px] text-center">${item.price}</h1>
                            <button className="md:w-20 p-2 bg-[#E21717] text-[#f5f5f5f5] rounded-[5px]"
                                onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    )
                })}
                <hr className="pt-4" />
                <div className="flex justify-between items-center px-96 text-2xl text-black">
                    Total Price:
                    <div>
                        $ {totalPrice.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    )
}

