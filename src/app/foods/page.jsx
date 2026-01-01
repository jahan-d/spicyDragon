import FoodCard from '@/components/cards/FoodCard';
import React from 'react';

// one of the fetching method in nextjs
const getFoods = async () => {
    const res = await fetch("https://taxi-kitchen-api.vercel.app/api/v1/foods/random");
    const data = await res.json();
    console.log(data);
    return data.foods || [];
}

// foods
// : 
// Array(50)
// 0
// : 
// {id: 52988, title: 'Classic Christmas pudding', catId: 3, foodImg: 'https://www.themealdb.com/images/media/meals/1d85821576790598.jpg', price: 532, …}
// 1
// : 
// {id: 52834, title: 'Beef stroganoff', catId: 1, foodImg: 'https://www.themealdb.com/images/media/meals/svprys1511176755.jpg', price: 557, …}
// 2
// : 
// {id: 52949, title: 'Sweet and Sour Pork', catId: 7, foodImg: 'https://www.themealdb.com/images/media/meals/1529442316.jpg', price: 409, …}
// 3
// : 
// {id: 52902, title: 'Parkin Cake', catId: 3, foodImg: 'https://www.themealdb.com/images/media/meals/qxuqtt1511724269.jpg', price: 325, …}
// 4
// : 
// {id: 52812, title: 'Beef Brisket Pot Roast', catId: 1, foodImg: 'https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg', price: 579, …}
// 5
// : 
// {id: 53060, title: 'Burek', catId: 9, foodImg: 'https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg', price: 389, …}
// 6
// : 
// {id: 52875, title: 'Chicken Ham and Leek Pie', catId: 2, foodImg: 'https://www.themealdb.com/images/media/meals/xrrtss1511555269.jpg', price: 578, …}
// 7
// : 
// {id: 52859, title: 'Key Lime Pie', catId: 3, foodImg: 'https://www.themealdb.com/images/media/meals/qpqtuu1511386216.jpg', price: 707, …}
// 8
// : 
// {id: 52965, title: 'Breakfast Potatoes', catId: 13, foodImg: 'https://www.themealdb.com/images/media/meals/1550441882.jpg', price: 561, …}
// 9
// : 
// {id: 52992, title: 'Soy-Glazed Meatloaves with Wasabi Mashed Potatoes & Roasted Carrots', catId: 1, foodImg: 'https://www.themealdb.com/images/media/meals/o2wb6p1581005243.jpg', price: 518, …}
// 10
// : 
// {id: 52871, title: 'Yaki Udon', catId: 12, foodImg: 'https://www.themealdb.com/images/media/meals/wrustq1511475474.jpg', price: 474, …}
// 11
// : 
// {id: 52802, title: 'Fish pie', catId: 8, foodImg: 'https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg', price: 541, …}
// 12
// : 
// {id: 52769, title: 'Kapsalon', catId: 4, foodImg: 'https://www.themealdb.com/images/media/meals/sxysrt1468240488.jpg', price: 625, …}
// 13
// : 
// {id: 53029, title: 'Mulukhiyah', catId: 1, foodImg: 'https://www.themealdb.com/images/media/meals/x372ug1598733932.jpg', price: 636, …}
// 14
// : 
// {id: 52779, title: 'Cream Cheese Tart', catId: 10, foodImg: 'https://www.themealdb.com/images/media/meals/wurrux1468416624.jpg', price: 608, …}
// 15
// : 
// {id: 52990, title: 'Christmas cake', catId: 3, foodImg: 'https://www.themealdb.com/images/media/meals/ldnrm91576791881.jpg', price: 398, …}
// 16
// : 
// {id: 52924, title: 'Nanaimo Bars', catId: 3, foodImg: 'https://www.themealdb.com/images/media/meals/vwuprt1511813703.jpg', price: 680, …}
// 17
// : 
// {id: 52777, title: 'Mediterranean Pasta Salad', catId: 8, foodImg: 'https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg', price: 308, …}
// 18
// : 
// {id: 52959, title: 'Baked salmon with fennel & tomatoes', catId: 8, foodImg: 'https://www.themealdb.com/images/media/meals/1548772327.jpg', price: 262, …}
// 19
// : 
// {id: 52817, title: 'Stovetop Eggplant With Harissa, Chickpeas, and Cumin Yogurt', catId: 12, foodImg: 'https://www.themealdb.com/images/media/meals/yqwtvu1487426027.jpg', price: 500, …}
// 20
// : 
// {id: 52847, title: 'Pork Cassoulet', catId: 7, foodImg: 'https://www.themealdb.com/images/media/meals/wxuvuv1511299147.jpg', price: 574, …}
// 21
// : 
// {id: 53006, title: 'Moussaka', catId: 1, foodImg: 'https://www.themealdb.com/images/media/meals/ctg8jd1585563097.jpg', price: 606, …}
// 22
// : 
// {id: 52848, title: 'Bean & Sausage Hotpot', catId: 5, foodImg: 'https://www.themealdb.com/images/media/meals/vxuyrx1511302687.jpg', price: 295, …}
// 23
// : 
// {id: 52917, title: 'White chocolate creme brulee', catId: 3, foodImg: 'https://www.themealdb.com/images/media/meals/uryqru1511798039.jpg', price: 285, …}
// 24
// : 
// {id: 53000, title: 'Vegetable Shepherds Pie', catId: 1, foodImg: 'https://www.themealdb.com/images/media/meals/w8umt11583268117.jpg', price: 669, …}
// 25
// : 
// {id: 52893, title: 'Apple & Blackberry Crumble', catId: 3, foodImg: 'https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg', price: 597, …}
// 26
// : 
// {id: 52910, title: 'Chinon Apple Tarts', catId: 3, foodImg: 'https://www.themealdb.com/images/media/meals/qtqwwu1511792650.jpg', price: 624, …}
// 27
// : 
// {id: 53054, title: 'Seri muka kuih', catId: 3, foodImg: 'https://www.themealdb.com/images/media/meals/6ut2og1619790195.jpg', price: 676, …}
// 28
// : 
// {id: 53059, title: 'Mushroom soup with buckwheat', catId: 9, foodImg: 'https://www.themealdb.com/images/media/meals/1ngcbf1628770793.jpg', price: 525, …}
// 29
// : 
// {id: 53025, title: 'Ful Medames', catId: 12, foodImg: 'https://www.themealdb.com/images/media/meals/lvn2d51598732465.jpg', price: 374, …}
// 30
// : 
// {id: 53008, title: 'Stuffed Lamb Tomatoes', catId: 4, foodImg: 'https://www.themealdb.com/images/media/meals/u55lbp1585564013.jpg', price: 736, …}
// 31
// : 
// {id: 52803, title: 'Beef Wellington', catId: 1, foodImg: 'https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg', price: 559, …}
// 32
// : 
// {id: 52807, title: 'Baingan Bharta', catId: 12, foodImg: 'https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg', price: 397, …}
// 33
// : 
// {id: 52879, title: 'Chicken Parmentier', catId: 2, foodImg: 'https://www.themealdb.com/images/media/meals/uwvxpv1511557015.jpg', price: 409, …}
// 34
// : 
// {id: 52993, title: 'Honey Balsamic Chicken with Crispy Broccoli & Potatoes', catId: 2, foodImg: 'https://www.themealdb.com/images/media/meals/kvbotn1581012881.jpg', price: 390, …}
// 35
// : 
// {id: 52952, title: 'Beef Lo Mein', catId: 1, foodImg: 'https://www.themealdb.com/images/media/meals/1529444830.jpg', price: 276, …}
// 36
// : 
// {id: 53081, title: 'Potato Salad (Olivier Salad)', catId: 12, foodImg: 'https://www.themealdb.com/images/media/meals/ebvuir1699013665.jpg', price: 357, …}
// 37
// : 
// {id: 53063, title: 'Chivito uruguayo', catId: 1, foodImg: 'https://www.themealdb.com/images/media/meals/n7qnkb1630444129.jpg', price: 624, …}
// 38
// : 
// {id: 52829, title: 'Grilled Mac and Cheese Sandwich', catId: 6, foodImg: 'https://www.themealdb.com/images/media/meals/xutquv1505330523.jpg', price: 724, …}
// 39
// : 
// {id: 52863, title: 'Vegetarian Casserole', catId: 12, foodImg: 'https://www.themealdb.com/images/media/meals/vptwyt1511450962.jpg', price: 514, …}
// 40
// : 
// {id: 53051, title: 'Nasi lemak', catId: 8, foodImg: 'https://www.themealdb.com/images/media/meals/wai9bw1619788844.jpg', price: 574, …}
// 41
// : 
// {id: 52976, title: 'Cashew Ghoriba Biscuits', catId: 3, foodImg: 'https://www.themealdb.com/images/media/meals/t3r3ka1560461972.jpg', price: 649, …}
// 42
// : 
// {id: 53043, title: 'Fish fofos', catId: 8, foodImg: 'https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg', price: 322, …}
// 43
// : 
// {id: 52806, title: 'Tandoori chicken', catId: 2, foodImg: 'https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg', price: 672, …}
// 44
// : 
// {id: 53082, title: 'Strawberries Romanoff', catId: 3, foodImg: 'https://www.themealdb.com/images/media/meals/oe8rg51699014028.jpg', price: 394, …}
// 45
// : 
// {id: 52839, title: 'Chilli prawn linguine', catId: 6, foodImg: 'https://www.themealdb.com/images/media/meals/usywpp1511189717.jpg', price: 682, …}
// 46
// : 
// {id: 53073, title: 'Eggplant Adobo', catId: 12, foodImg: 'https://www.themealdb.com/images/media/meals/y7h0lq1683208991.jpg', price: 291, …}
// 47
// : 
// {id: 53047, title: 'Moroccan Carrot Soup', catId: 12, foodImg: 'https://www.themealdb.com/images/media/meals/jcr46d1614763831.jpg', price: 518, …}
// 48
// : 
// {id: 53065, title: 'Sushi', catId: 8, foodImg: 'https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg', price: 285, …}
// 49
// : 
// {id: 52895, title: 'English Breakfast', catId: 13, foodImg: 'https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg', price: 307, …}
// length
// : 
// 50
// [[Prototype]]
// : 
// Array(0)
// length
// : 
// 304
// message
// : 
// "Data Served successfully"
// send_at
// : 
// "2025-12-29T10:36:17.225Z"
// status
// : 
// 200

const FoodsPage = async () => {
    const foods = await getFoods();
    return (
        <div>
            <h1 className="text-3xl font-bold mb-5">Foods Page</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {foods.map((food) => (
                    <FoodCard key={food.id} food={food} />
                ))}
            </div>
        </div >
    );
};

export default FoodsPage;