export const productsQuery = `
  query GetProducts {
    products(
      first: 20,
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
