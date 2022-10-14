export default function Card({ title, price, image, addToCart }) {
    return (
        <div className="p-5 ">
            <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="px-4 py-2">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{title}</h1>
                    {/* <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p> */}
                </div>
                <img className="object-cover w-full h-48 mt-2" src={image} alt="NIKE AIR" />

                <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <h1 className="text-lg font-bold text-white">$ {price}</h1>
                    <button onClick={() => addToCart(product.id)} className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
                </div>
            </div>
        </div>
    )
}


