module.exports = {
    components: {
        schemas: {
            Task: {
                type: "object",
                properties: {
                    _id: {
                        type: "string",
                        description: "Task auto-generated id",
                        example: "605c31761d402e1c9443c683",
                    },
                    title: {
                        type: "string",
                        description: "Task title",
                        example: "Hacer la maleta",
                    },
                    completed: {
                        type: "boolean",
                        description: "Task completion status",
                        example: false,
                    },
                },
            },
            TaskInput: {
                type: "object",
                properties: {
                    title: {
                        type: "string",
                        description: "Task title",
                        example: "Hacer la maleta",
                    },
                },
            },
        },
    },
};