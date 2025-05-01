import React from "react"
import ContentLoader from "react-content-loader"

const PostsLoader = (props) => (
  <ContentLoader
    speed={2}
    width={1200}
    height={1000}
    viewBox="0 0 1200 1000"
    backgroundColor="#7d7d7d"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="20" rx="2" ry="2" width="580" height="100" />
    <rect x="0" y="140" rx="2" ry="2" width="580" height="100" />
    <rect x="600" y="20" rx="2" ry="2" width="580" height="100" />
    <rect x="600" y="140" rx="2" ry="2" width="580" height="100" />
    <rect x="0" y="260" rx="2" ry="2" width="580" height="100" />
    <rect x="0" y="380" rx="2" ry="2" width="580" height="100" />
    <rect x="600" y="380" rx="2" ry="2" width="580" height="100" />
    <rect x="600" y="260" rx="2" ry="2" width="580" height="100" />


  </ContentLoader>
)

export default PostsLoader

