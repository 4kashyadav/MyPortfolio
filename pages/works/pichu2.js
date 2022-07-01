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
        Watch me Travel<Badge>2022</Badge>
      </Title>
      <P>
        A Social media App for travellers.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/ iOS/ Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Flutter, Firebase</span>
        </ListItem>
      </List>
      <Link href="https://github.com/4kashyadav/WatchMeTravel">
            Code{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/images/works/a1.png" alt="Netflix Clone" />
      <WorkImage src="/images/works/a2.png" alt="Netflix Clone" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
