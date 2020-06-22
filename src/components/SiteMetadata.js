import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            headerimage
            details {
              datetime
              state
              city
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
