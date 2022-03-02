export const GET_GALLERY_LIST = `
query {
  allGallery {
    _id
    title
    slug {
      current
    }
  }
}
`;

export const GET_GALLERY_IMAGES = `
query ($slug: String!) {
  allGallery(where: {slug: {current: {eq: $slug}}}) {
    images {
      _key
      asset {
        url
        metadata {
          dimensions {
            aspectRatio
            width
            height
          }
        }
      }
    }
  }
}
`;
