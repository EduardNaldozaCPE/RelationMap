const assets = [
    {
        "type": "organisation",
        "id": "1",
        "name": "Global Tech Solutions",
        "owns": [
            {
                "type": "organisation",
                "id": "2",
                "name": "North America Division",
                "owns": [
                    {
                        "type": "person",
                        "id": "101",
                        "name": "Sarah Johnson",
                        "owns": [
                            {
                                "type": "computer",
                                "id": "1001",
                                "name": "Sarah's Laptop",
                                "connectedTo": [
                                    {
                                        "type": "server",
                                        "id": "3001",
                                        "name": "Project Server 1"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "person",
                        "id": "102",
                        "name": "Michael Lee",
                        "owns": [
                            {
                                "type": "computer",
                                "id": "1002",
                                "name": "Michael's Workstation"
                            },
                            {
                                "type": "computer",
                                "id": "1002",
                                "name": "Ooga's Workstation"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "organisation",
                "id": "3",
                "name": "Europe Division",
                "owns": [
                    {
                        "type": "person",
                        "id": "103",
                        "name": "Emma Garcia",
                        "owns": [
                            {
                                "type": "computer",
                                "id": "1003",
                                "name": "Emma's Laptop",
                                "connectedTo": [
                                    {
                                        "type": "server",
                                        "id": "3002",
                                        "name": "Project Server 2",
                                        "connectedTo": [
                                            {
                                                "type": "server",
                                                "id": "3003",
                                                "name": "Backup Server"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
    // {
    //     "type": "person",
    //     "id": "1",
    //     "name": "Alice",
    //     "owns": [
    //         {
    //             "type": "computer",
    //             "id": "101",
    //             "name": "Alice's Laptop",
    //             "owns": [
    //                 {
    //                     "type": "computer",
    //                     "id": "101",
    //                     "name": "Laptop's Keyb"
    //                 },
    //                 {
    //                     "type": "server",
    //                     "id": "201",
    //                     "name": "Laptops's Mouse"
    //                 }
    //             ]
    //         },
    //         {
    //             "type": "server",
    //             "id": "201",
    //             "name": "Alice's Private Server",
    //             "owns": [
    //                 {
    //                     "type": "computer",
    //                     "id": "101",
    //                     "name": "Server's Keyb"
    //                 },
    //                 {
    //                     "type": "computer",
    //                     "id": "101",
    //                     "name": "Server's Keyb"
    //                 },
    //                 {
    //                     "type": "server",
    //                     "id": "201",
    //                     "name": "Server's Mouse"
    //                 }
    //             ]
    //         }
    //     ]
    // }
];

export default assets;