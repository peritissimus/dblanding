/** @jsxRuntime classic */
/** @jsx jsx */
import { useState } from 'react';
import { rgba } from 'polished';
import { jsx, Flex, Container, Heading, Text, Button, Link, Box, Embed } from 'theme-ui';
import Image from 'components/image';
import Play from 'components/icons/play';
import dynamic from 'next/dynamic';
//import ReactPlayer from 'react-player/youtube';
// import ModalVideo from 'react-modal-video';
const ModalVideo = dynamic(
  () => {
    return import('react-modal-video');
  },
  { ssr: false }
);
import banner from 'assets/images/banner.png';

const Banner = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <section id="home" sx={styles.section}>
      <Container sx={styles.container}>
        <div sx={styles.content}>
      
        <Link path="https://www.producthunt.com/posts/dubverse?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-dubverse">  
          <a href="https://www.producthunt.com/posts/dubverse?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-dubverse"><Image sx={styles.logo} src={"https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=327348&theme=light"} alt="Product Hunt" /></a>
        </Link>
        <Text as="p">hello</Text>
          <Heading as="h1">
            Dub your videos in any language. Instantly. 
          </Heading>
          <Flex sx={styles.buttonGroup}>
            <Button variant="primary" sx={styles.btnPrimary}>
              <Link href="https://preview.dubverse.ai/" sx={{ textDecoration:'none', color:'white' }}> Try Demo </Link>
            </Button>
            <Button
              variant="outlined"
              sx={styles.btnOutlined}
              onClick={handleClick}
            >
              Launch Video<Play fill="white" />
            </Button>
            <ModalVideo
              channel="youtube"
              isOpen={videoOpen}
              videoId="Tn3y66C_ePM"
              onClose={() => setVideoOpen(false)}
            />
          </Flex>
        </div>
      <Embed sx={{ marginTop:'50px' }} src="https://www.youtube.com/embed/zpGjbycDUxE"/>
      </Container>
    </section>
  );
};

export default Banner;

const styles = {
  section: {
    background: '#2d1d60',
    // pt: [8, null, null, null, 10, 14],
    // pb: [8, null, null, null, 10, 14],
    position: 'relative',
    zIndex: 0,
    '::before': {
      backgroundColor: 'white',
      content: `''`,
      position: 'absolute',
      height: [30, null, null, 70, 85, 120],
      bottom: 0,
      width: '100%',
      zIndex: -1,
    },
  },
  container: {
    minHeight: [null, null, null, null, null, '100vh'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    color: '2D1D60',
  },
  content: {
    maxWidth: [null, null, null, 570, 690],
    textAlign: 'center',
    marginTop: [18, null, null, 22, 180],
    h1: {
      color: 'white',
      fontSize: [7, null, null, 12, 14],
      lineHeight: 1.35,
    },
    p: {
      color: rgba(45, 29, 96, 1),
      fontSize: [1, null, null, 2],
      marginTop: [3, null, null, 6],
    },
  },
  buttonGroup: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: [6, null, null, 8],
    position: 'relative',
    zIndex: 2,
    button: {
      px: ['12px', null, null, '18px'],
    },
  },
  btnPrimary: {},
  btnOutlined: {
    borderColor: rgba('white', 0.25),
    color: 'white',
    ml: 3,
    svg: {
      ml: 2,
    },
  },
  logo: {
    width: '250px', 
    height: '54px',
    //display: 'block',
    //borderRadius: '50%',
    mx: 'auto',
    boxShadow: '0px 15px 35px rgba(65, 104, 139, 0.12)',
  },
  illustration: {
    transform: ['scale(1.20)', null, null, 'none'],
    alignItems: 'center',
    display: 'flex',
    marginTop: [2, null, null, -4, -5],
  },
};
