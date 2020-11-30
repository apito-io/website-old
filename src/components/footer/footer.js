/** @jsx jsx */
import Link from 'next/link'
import { useRouter } from 'next/router'
import { jsx, Box, Grid, Container, Image, Heading, Text } from 'theme-ui';
// import { Link } from 'components/link';
import { Link as ScrollLink } from 'react-scroll';
import data from './footer.data';
import FooterLogo from 'assets/logo.svg';

export default function Footer() {
  const router = useRouter()

  return (
    <footer sx={styles.footer}>
      <Container>
        <Grid sx={styles.widgets}>
          {data.widgets.map((item) => (
            <Box
              key={`footer-widget--key${item.id}`}
              sx={styles.widgets.widgetItem}
            >
              <center>
                <Image src={item.iconSrc} alt={item.altText} />
              </center>
              <Box sx={styles.widgets.infoWrapper}>
                <Heading as="h3">{item.title}</Heading>
                <Text as="p">{item.description}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
        {/* End of footer widgets area */}
        <Box sx={styles.footer.footerBottomArea}>
          <center>
            <Link href="/">
              <Image src={FooterLogo} alt="Logo" />
            </Link>
          </center>
          <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map(({ scrollPath, path, label }, i) => (
                router.asPath === '/' && scrollPath ?
                  <ScrollLink
                    activeClass="active"
                    to={scrollPath}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    key={i}
                    sx={styles.footer.link}
                  >
                    {label}
                  </ScrollLink>
                  :
                  <Link
                    key={i}
                    href={`/${path}`}
                  >
                    <a sx={styles.footer.link}>{label}</a>
                  </Link>
              ))}
            </nav>
          </Box>

          <Box sx={styles.footer.menus}>
            <nav>
              {/* <Text sx={styles.footer.copyright}>
                Copyright {new Date().getFullYear()} By Apito
              </Text> */}
              <Link 
                href={`/`}
              >
                <a sx={styles.footer.link}>Copyright {new Date().getFullYear()} By Apito</a>
              </Link>

                {data.policyMenuItem.map(({ scrollPath, path, label }, i) => (
                    <Link
                      key={i}
                      href={`/${path}`}
                    >
                      <a sx={styles.footer.link}>{label}</a>
                    </Link>
                ))}
            </nav>
          </Box>
          
        </Box>
      </Container>
    </footer>
  )
}

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column',
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },

    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
    },
  },
  widgets: {
    py: [8, null, 9],
    px: [4, 0, 3, null, 7, 10],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: ['40px 0', null, '45px 30px', null, '60px 30px', '50px 90px'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      'repeat(3,1fr)',
    ],
    widgetItem: {
      textAlign: 'center',
    },
    infoWrapper: {
      mt: [2, 3, null, 2, 4],
      mb: -1,
      h3: {
        fontSize: [3, null, null, 2, 3, 4],
        color: 'heading_secondary',
        lineHeight: 1.4,
        fontWeight: 700,
        mb: [2, null, null, null, '15px'],
      },

      p: {
        fontSize: [1, '15px'],
        fontWeight: 400,
        lineHeight: 2,
      },
    },
  },
};
