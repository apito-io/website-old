/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import Carousel from 'react-multi-carousel';
import ButtonGroup from 'components/button-group';

import FeatureThumb from 'assets/core-feature.png';
import shapePattern from 'assets/shape-pattern2.png';

const data = {
  subTitle: 'Core features',
  title: 'Smart Jackpots that you may love this anytime & anywhere',
  description:
    'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.',
  btnName: 'Get Started',
  btnURL: '#',
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 1,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

export default function CoreFeature({ coreFeatures }) {
  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlay: true,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 1,
    containerWidth: 780,
    containerClass: 'carousel-container',
    customButtonGroup: <ButtonGroup />,
    dotListClass: '',
    focusOnSelect: false,
    infinite: true,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: '',
  };

  return (
    <section sx={{ variant: 'section.coreFeature' }}>
      <Carousel {...sliderParams}>
        {coreFeatures?.map((item, i) =>
          <Container sx={styles.containerBox} key={i}>
            <Box sx={styles.contentBox}>
              <TextFeature
                subTitle={item?.tag || ''}
                title={item?.title || ''}
                description={item?.description?.markdown || ''}
              // btnName={data.btnName}
              // btnURL={data.btnURL}
              />
            </Box>
            <Box sx={styles.thumbnail}>
              <Image src={item?.image?.url || ''} alt={item?.title || 'Thumbnail'} />
              <Box sx={styles.shapeBox}>
                <Image src={shapePattern} alt="Shape" />
              </Box>
            </Box>
          </Container>
        )}
      </Carousel>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    // bottom: -65,
    bottom: 5,
    // right: -165,
    right: -140,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
};
