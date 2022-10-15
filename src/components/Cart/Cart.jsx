
export default function Cart({ cartProducts}) {
   
    return (
        <div tabIndex={0} className="card card-compact dropdown-content w-full bg-base-100 rounded-none">
            <div className="card-body container max-w-full min-h-screen">
                {cartProducts.map((item, ind) => {
                    return (
                        <div key={ind} className="text-black flex justify-evenly items-center px-36 py-10 m-0">
                            <img className="w-20" src={item.image} alt="product-image" />
                            <h1 className="text-black">{item.title}</h1>
                            <div className="flex justify-evenly items-center">
                                <button className="p-2 m-2 rounded-lg bg-gray-200">+</button>
                                <button className="p-2 m-2 rounded-lg bg-gray-200">-</button>
                            </div>
                            <span>Quantity: 1</span>
                            <h1>$ {item.price}</h1>
                            <button>Remove</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

