/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import FaqItem from 'components/cards/faq-item';

const data = [
  {
    id: 1,
    ques: 'Who is this best suited for?',
    ans: `This is best suited for educational/explainer type content the best. In short, if you are a content creator, Dubverse hits home!`,
  },
  {
    id: 2,
    ques: 'How do I get access?',
    ans: `Visit our demo at preview.dubverse.ai; test it out, if you like it, fill in the waitlist form.`,
  },
  {
    id: 3,
    ques: 'How long does it take to get access?',
    ans: `We are a small team, but we assure you we will get back to everybody`,
  },
  {
    id: 4,
    ques: 'What are the pricing plans?',
    ans: `No pricing plans. Dubverse is free. No strings attached.`,
  },
  {
    id: 5,
    ques: 'Can I get custom voices made, I want to clone my voice?',
    ans: `Please submit a request throught the contact us page with your use case. We will get back to you.`,
  },
  {
    id: 6,
    ques: 'How safe are my private YouTube videos?',
    ans: `100% safe. We do not log the data unless you raise an issue ticket.`,
  },
];

const masonryOptions = { originTop: true };

const Faq = () => {
  return (
    <section id="faq" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={{ mb: [8, null, null, 15] }}
          description="Frequently asked questions"
          title="We are here to help you"
        />
        <Masonry options={masonryOptions} sx={styles.grid}>
          {data.map((item) => {
            return <FaqItem key={item.id} faq={item} className="faq-item" />;
          })}
        </Masonry>
        <Box sx={styles.loadMore}>
          <Button variant="text">Contact Us!</Button>
        </Box>
      </Container>
    </section>
  );
};

export default Faq;

const styles = {
  section: {
    pt: [6, null, null, null, 10, 14],
    pb: [10, null, null, 7, null, 14, 17],
  },
  grid: {
    mx: [null, null, null, -6, -8, 'unset'],
  },
  loadMore: {
    paddingTop: [null, null, null, 3],
    textAlign: 'center',
    button: {
      backgroundColor: '#ECF2F7',
      color: '#738295',
      minHeight: 50,
      px: '22px',
      ':hover': {
        backgroundColor: 'primary',
        color: 'white',
      },
    },
  },
};
