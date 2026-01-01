import Link from "next/link";
import React from "react";

const getSingleFood = async (id) => {
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`);
    const data = await res.json();
    const details = data.details;
    return details || {};
};


const page = async ({ params }) => {
    const { id } = await params;
    // console.log("Fetching details for food ID:", id);
    const food = await getSingleFood(id);

    if (!food.id) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <h1 className="text-3xl font-bold text-gray-300">Food Not Found</h1>
            </div>
        );
    }
    // {
    //     "id": 52794,
    //     "title": "Vegan Chocolate Cake",
    //     "catId": 11,
    //     "foodImg": "https://www.themealdb.com/images/media/meals/qxutws1486978099.jpg",
    //     "price": 695,
    //     "video": "https://www.youtube.com/watch?v=C3pAgB7pync",
    //     "category": "Vegan",
    //     "area": "American",
    // }


    const { title, foodImg, price, category, video, area } = food;

    return (

        <div className="min-h-screen bg-gray-900 text-white p-8">
            <Link href="/foods" className="text-blue-400 hover:text-blue-300 mb-6 inline-block">
                ← Back to Foods
            </Link>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <img
                        src={foodImg}
                        alt={title}
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>

                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-4xl font-bold mb-4">{title}</h1>
                        <div className="space-y-3 text-lg mb-6">
                            <p><span className="font-semibold">Category:</span> {category}</p>
                            <p><span className="font-semibold">Area:</span> {area}</p>
                            <p className="text-2xl font-bold text-green-400">Price: ${price}</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {video && (
                            <a
                                href={video}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-center"
                            >
                                Watch Recipe Video
                            </a>
                        )}
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
