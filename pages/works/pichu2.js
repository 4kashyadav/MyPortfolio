import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Netflix Clone">
    <Container>
      <Title>
        Netflix Clone <Badge>2020</Badge>
      </Title>
      <P>
        A Clone of Netflix made through ReactJS.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, ReactJS</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/images/works/nc1.jpeg" alt="Netflix Clone" />
      <WorkImage src="/images/works/nc2.jpeg" alt="Netflix Clone" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
