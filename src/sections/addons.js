/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import addons from 'assets/images/addons.png';

const Addons = () => {
  return (
    <section sx={styles.section}>
      <Container>
        <Box sx={styles.grid}>
          <SectionHeading
            sx={styles.heading}
            title="30+ languages and accents to choose from"
            description="We support a variety of international and Indian regional languages. Our voices go into the detail of breathing and emotions. Use this on your explainer videos, training videos etc."
      
          />
          <Flex sx={styles.illustration}>
            <Image src={addons} alt="addons" />
          </Flex>
        </Box>
      </Container>
    </section>
  );
};

export default Addons;

const styles = {
  section: {
    pt: [6, null, null, 8, 10, 11],
    pb: [8, null, null, 12, null, 14],
  },
  grid: {
    display: 'grid',
    alignItems: 'center',
    gap: 6,
    gridTemplateColumns: ['1fr', null, null, 'repeat(2, 1fr)', '500px 1fr'],
  },
  heading: {
    textAlign: ['center', null, null, 'left'],
    h3: {
      fontSize: [3, null, null, 6, 11],
      lineHeight: 1.53,
    },
  },
  illustration: {
    alignItems: 'center',
  },
};
