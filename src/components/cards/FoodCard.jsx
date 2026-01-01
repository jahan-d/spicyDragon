import Link from "next/link";

const FoodCard = ({ food }) => {
    const { title, foodImg, price, category, id } = food;

    return (
        <div className="group rounded-2xl border border-gray-200 bg-gray-950 shadow-sm transition hover:shadow-lg">

            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
                <img
                    src={foodImg}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <span className="absolute top-3 left-3 rounded-full bg-green-600 px-3 py-1 text-xs font-medium text-white">
                    {category}
                </span>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
                <h3 className="text-lg font-semibold text-gray-200 line-clamp-1">
                    {title}
                </h3>

                <p className="text-xl font-bold text-orange-600">
                    ৳ {price}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                    <button
                        className="flex-1 rounded-xl bg-orange-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-700"
                    >
                        Add to Cart
                    </button>

                    <Link href={`/foods/${id}`}
                        className="flex-1 rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-100 transition hover:bg-gray-800"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
