import { gql } from "graphql-request";

export const BlogGraphQL = gql`
query{
  blogs{
    headLine,
    author,
    paragraph{
      raw
    },
    published
  },
}`;