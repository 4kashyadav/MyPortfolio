import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="खेल-Toh">
    <Container>
      <Title>
      खेल-Toh <Badge>2022-</Badge>
      </Title>
      <P>
        An App who can connect you with other football players in your locality.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link >
            Coming Soon <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Flutter, Firebase</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/1.jpeg" alt="Inkdrop" />
      <WorkImage src="/images/works/2.jpeg" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
