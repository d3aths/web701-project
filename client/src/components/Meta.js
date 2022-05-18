import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'HAPPY FAMILY FRIENDS',
  description: 'YOUR FRIENDLY NEIGHBOURHOOD ANTI GOVERNMENT CHARITY GROUP',
  keywords: 'antivaxx, mask mandate, vaccines, mask regulartions, anti government, community, learning skills, charity groups, volunteering',
}

export default Meta
