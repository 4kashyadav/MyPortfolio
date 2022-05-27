import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.jpeg'
import thumbInkdrop from '../public/images/works/khel.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an Indian Software Engineer!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Akash Yadav
          </Heading>
          <p>Dev.ify ( Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/takuya.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Akash Yadav is a CSE student at Chandigarh University currently in his
          5th semester. He is currently working on his startup too named {' '}
          <NextLink href="/works/inkdrop" passHref scroll={false}>
            <Link>खेल-toh</Link>
          </NextLink>
          . He publishes DSA questions for CSE students on his github account &quot;
          <NextLink href="https://github.com/4kashyadav" passHref>
            <Link target="_blank">GitHub</Link>
          </NextLink>
          &quot; 
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Haryana, India.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Completed the 12th class
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Pursued Btech from Chandigarh University
        </BioSection>
        <BioSection>
          <BioYear>2021 to 2022</BioYear>
          Worked as Backend and UI/UX Developed at Dev.ify
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Acting, Playing Basketball,{' '}
          <Link href="https://www.instagram.com/peaceefr/" target="_blank">
            Editing
          </Link>
          , Exploring, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/4kashyadav" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @4kashyadav
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/4kashyadav" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @4kashyadav
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.linkedin.com/in/akash-yadav-98658b207/"
            title="LinkedIn"
            thumbnail={thumbYouTube}
          >
            My LinkedIn Account
          </GridItem>
          <GridItem
            href=""
            title="खेल-Toh"
            thumbnail={thumbInkdrop}
          >
            Our Startup App
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
