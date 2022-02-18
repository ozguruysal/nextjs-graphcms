import { gql } from "graphql-request";

export const CREATORS = gql`
  query Creators {
    creators {
      id
      username
      fullName
      bio
      avatar {
        url
      }
    }
  }
`;
