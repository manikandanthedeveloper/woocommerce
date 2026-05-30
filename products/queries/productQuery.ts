export const productQuery = `
  query GetProduct($id: ID!) {
    product(id: $id, idType: DATABASE_ID) {
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
`;
