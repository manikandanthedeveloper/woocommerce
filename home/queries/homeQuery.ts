export const homeQuery = `
    query HomePageProducts {
        latestProducts: products(
            first: 4
            where: {
                orderby: {
                    field: DATE
                    order: DESC
                }
            }
        ) {
            nodes {
                id
                databaseId
                name
                slug
                description(format: RAW)

                ... on SimpleProduct {
                    price
                    regularPrice
                    salePrice
                }

                ... on VariableProduct {
                    price
                    regularPrice
                    salePrice
                }

                averageRating
                onSale

                image {
                    sourceUrl
                    altText
                }
            }
        }

        featuredProducts: products(
            first: 4
            where: {
                featured: true
            }
        ) {
            nodes {
                id
                databaseId
                name
                slug
                description(format: RAW)

                ... on SimpleProduct {
                    price
                    regularPrice
                    salePrice
                }

                ... on VariableProduct {
                    price
                    regularPrice
                    salePrice
                }

                averageRating
                onSale

                image {
                    sourceUrl
                    altText
                }
            }
        }
    }
`;
