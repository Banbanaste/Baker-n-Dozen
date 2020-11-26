export const initQuery = `
query{
  projectCollection(order:id_DESC){
    items{
      id
      name
    }
  }
}
`;

export const whereQuery = (name) => `
query{
  projectCollection(where: {name_contains: "${name}"}){
    items{
      id
      name
      meta
      website
      description{
        json
      }
      imagesCollection{
        items{
          title
          url
          height
          width
        }
      }
    }
  }
}

`;

export async function fetchContentfulGQL(query) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query,
      }),
    }
  ).then((res) => res.json());
}
