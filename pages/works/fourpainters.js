import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  AspectRatio,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="iVote">
    <Container>
      <Title>
        iVote <Badge>2022</Badge>
      </Title>
      <P>
        A Voting dApp using Flutter and Ethereum
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Flutter, Solidity, Firebase</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>
      <WorkImage src="/images/works/v1.png" alt="walknote" />
      <WorkImage src="/images/works/v2.png" alt="walknote" />
      <WorkImage src="/images/works/v3.png" alt="walknote" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="/images/Video.mp4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
