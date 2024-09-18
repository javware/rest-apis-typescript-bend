import swaggerJSDoc from "swagger-jsdoc";
import router from "../router";
import { DefaultScope } from "sequelize-typescript";
import { SwaggerUiOptions } from "swagger-ui-express";

const options: swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.2',
        tags: [
            {
                name: 'Products',
                description: 'API operations related to products'
            }
        ],
        info: {
            title: 'REST API Node.js / Express / TypeScript',
            version: "1.0.0",
            description: "API Docs for Products"
        }
    },
    apis: ['./src/router.ts']
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerUiOptions: SwaggerUiOptions={
    customCss:`
    .topbar-wrapper .link {
        content:url('https://ecommerceplatforms.io/wp-content/uploads/2018/11/ecommerce-platforms-logo-final-white-text.png');
        height: 44px;
        max-width: 149px !important;
    }
    .swagger-ui .topbar {
        background-color: #0E123C;
        padding: 18px 0;
    }
    `,
    customSiteTitle:'Documentación REST API Express / TypeScript'
}
export default swaggerSpec
export {
    swaggerUiOptions
}