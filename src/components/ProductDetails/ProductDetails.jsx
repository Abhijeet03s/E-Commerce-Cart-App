export default function ProductDetails({ prodDetails, addToCart }) {
    // console.log(prodDetails)

    return (
        <>
            {prodDetails ? (
                <section>
                    <div className="container flex justify-center items-center space-x-64 my-10">
                        <div className="">
                            <img src={prodDetails.image} className="w-72" alt="product" />
                        </div>
                        <div className="w-[500px] details flex flex-col justify-center items-start space-y-5">
                            <div className="title">
                                <h1 className="text-4xl">{prodDetails.title}</h1>
                                <h3 className="mt-3 capitalize text-lg">{prodDetails.category}</h3>
                            </div>
                            <p className="text-xl w-[550px]">{prodDetails.description}</p>
                            <div className="">
                                <p className="text-3xl">Price: ${prodDetails.price}</p>
                            </div>
                            <div className="">
                                <button onClick={() => addToCart()} className="px-2 py-1 text-xl font-semibold text-gray-900 capitalize bg-green-500 rounded">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </section>)
                : <p>Click on the product image to check the details</p>
            }
        </>
    )
}
