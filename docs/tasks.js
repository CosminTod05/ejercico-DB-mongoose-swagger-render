module.exports = {
    paths: {
        "/": {
            get: {
                tags: ["Tasks"],
                summary: "Get all tasks",
                responses: {
                    200: {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/components/schemas/Task",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        "/create": {
            post: {
                tags: ["Tasks"],
                summary: "Create a task",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/TaskInput",
                            },
                        },
                    },
                },
                responses: {
                    201: { description: "Task successfully created" },
                    500: { description: "Server Error" },
                },
            },
        },
        "/id/{_id}": {
            put: {
                tags: ["Tasks"],
                summary: "Update a task title",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        schema: {
                            type: "string",
                        },
                        required: true,
                        description: "Task id",
                    },
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/TaskInput",
                            },
                        },
                    },
                },
                responses: {
                    200: { description: "Task successfully updated" },
                    500: { description: "Server Error" },
                },
            },
            delete: {
                tags: ["Tasks"],
                summary: "Delete a task",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        schema: {
                            type: "string",
                        },
                        required: true,
                        description: "Task id",
                    },
                ],
                responses: {
                    200: { description: "Task deleted" },
                    500: { description: "Server Error" },
                },
            },
        },
    },
};