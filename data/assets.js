const assets = [
    {
        "type": "person",
        "id": "1",
        "name": "Alice",
        "owns": [
            {
                "type": "computer",
                "id": "101",
                "name": "Alice's Laptop"
            },
            {
                "type": "server",
                "id": "201",
                "name": "Alice's Private Server"
            }
        ]
    },
    {
        "type": "person",
        "id": "2",
        "name": "Bob",
        "owns": [
            {
                "type": "computer",
                "id": "102",
                "name": "Bob's Desktop"
            }
        ]
    },
    {
        "type": "organisation",
        "id": "3",
        "name": "Tech Corp",
        "owns": [
            {
                "type": "server",
                "id": "202",
                "name": "Main Server"
            },
            {
                "type": "computer",
                "id": "103",
                "name": "Office Computer 1"
            },
            {
                "type": "computer",
                "id": "104",
                "name": "Office Computer 2"
            }
        ]
    },
    {
        "type": "computer",
        "id": "105",
        "name": "Shared Workstation"
    },
    {
        "type": "server",
        "id": "203",
        "name": "Development Server"
    }
];

export default assets;