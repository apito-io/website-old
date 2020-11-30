import gql from 'graphql-tag'

export const GET_HOME_PAGE_DATA = gql`
query getHomeContent{
  homepages {
    id
    data {
      website_title
      header {
        markdown
      }
      sub_title {
        markdown
      }
      cover_photo {
        url
      }
      feature_title
      features {
        title
        description {
          markdown
        }
        icon {
          url
        }
      }
      feature_slider {
        description {
          markdown
        }
        image {
          url
        }
        title
        tag
      }
      benifits {
        new {
          markdown
        }
        old {
          markdown
        }
      }
      power_title
      powers {
        title
        icon {
          url
        }
        description {
          markdown
        }
      }
      second_feature_slider {
        title
        tag
        image {
          url
        }
        description {
          markdown
        }
      }
    }
  }  
}
`

export const GET_PRIVACY_PAGE_DATA = gql`
query getPrivacyContent{
  privacypolicies{
    data {
      title
      header {
        markdown
        html
      }
      details {
        markdown
        html
      }
    }
  }  
}
`

export const GET_FAQ_PAGE_DATA = gql`
query getFaqContent{
  faqs {
    data {
      questionanswers {
        question
        answers {
          markdown
        }
      }
    }
  }  
}
`

export const GET_FOOTER_DATA = gql`
query getFooterData{
  footers {
    data {
      description
      before_footer {
        title
        description {
          markdown
        }
      }
    }
  }  
}
`