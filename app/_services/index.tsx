import request, { gql } from "graphql-request";

const MASTER_URL = `https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clz8ltiwd01gu07us2mqtzmbl/master`;

export const getWorkLists = async () => {
  const query = gql`
    query WorkList {
      workLists {
        id
        name
        description
        content
        image {
          url
        }
        url
        createdAt
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

export const getWorkById = async (id: string) => {
  const query =
    gql`
  query course {
    workList(where: {id: "` +
    id +
    `"}) {
      id
      name
      description
      content
      image {
        url
      }
      createdAt
    }
  }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};
