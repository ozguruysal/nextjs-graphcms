import { gql } from "graphql-request";

const FragmentCreatorFields = gql`
  fragment CreatorFields on Creator {
    id
    username
    fullName
    bio
    avatar {
      url
    }
  }
`;

export const allCreatorsQuery = gql`
  query Creators {
    creators {
      ...CreatorFields
    }
  }
  ${FragmentCreatorFields}
`;

export const allCreatorSlugsQuery = gql`
  query AllCreatorSlugsQuery {
    creators {
      username
    }
  }
`;

export const creatorByUsernameQuery = gql`
  query CreatorByUsernameQuery($username: String!) {
    creator(where: { username: $username }) {
      ...CreatorFields
      blocks {
        __typename
        ... on LinkBlock {
          id
          label
          url
        }
        ... on VideoBlock {
          id
          url
        }
      }
    }
  }
  ${FragmentCreatorFields}
`;
