const assets = [
    {
        "type": "person",
        "id": "1",
        "name": "Alice",
        "owns": [
            {
                "type": "computer",
                "id": "101",
                "name": "Alice's Laptop",
                "owns": [
                    {
                        "type": "computer",
                        "id": "101",
                        "name": "Laptop's Keyb"
                    },
                    {
                        "type": "server",
                        "id": "201",
                        "name": "Laptops's Mouse"
                    }
                ]
            },
            {
                "type": "server",
                "id": "201",
                "name": "Alice's Private Server",
                "owns": [
                    {
                        "type": "computer",
                        "id": "101",
                        "name": "Server's Keyb"
                    },
                    {
                        "type": "computer",
                        "id": "101",
                        "name": "Server's Keyb"
                    },
                    {
                        "type": "server",
                        "id": "201",
                        "name": "Server's Mouse"
                    }
                ]
            }
        ]
    }
];

export default assets;