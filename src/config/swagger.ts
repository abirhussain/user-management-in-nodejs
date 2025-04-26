export const swaggerOptions = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "User Mangement API",
        version: "1.0.0",
      },
      servers: [
        {
          url: "http://localhost:8000/api",
        },
      ],
    },
    apis: ["./src/routes/*.ts"],
  };
  