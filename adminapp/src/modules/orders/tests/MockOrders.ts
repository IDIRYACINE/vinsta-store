const mockOrders  = [
    {
        "header": {
            "id": "something44",
            "status": "confirmed",
            "createdAt": "2019-10-10T10:10:10.000Z",
            "total": 100
        },
        "shipping": {
            "city": "bba",
            "customer": "bbtest",
            "phone" : "0555555"
        },
        "items": [
            {
                "productId": "something",
                "quantity": 3,
                "price": 200,
                "color": {"color":"red" , "id":1},
                "size": {"size":"M","id":1},
                "categoryId": "something",
                "name" : "idir",
                "images" : ["https://images.freeimages.com/images/large-previews/bb0/cat-in-window-1218032.jpg"]
            }
        ]
    }
]


export default mockOrders 