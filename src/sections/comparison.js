/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Text } from 'theme-ui';
import TextFeature from 'components/text-feature';
import SectionHeader from '../components/section-header';
import ReactMarkdown from 'react-markdown'
import sucessImg from 'assets/comparison/success.svg';

export default function Comparison({ benifits }) {

    const renderTableDataRow = (benifits) => {
        return benifits?.length ? benifits.map((item,i) => (
            <tr key={i}>
                <td sx={styles.tbodyText} style={{paddingRight:'10%'}}>
                    {item?.old?.markdown}
                </td>
                <td sx={styles.tbodyText} style={{padding:5,color:'#49A32B'}}>
                    <div style={{display:'flex', justifyContent:'flex-start',alignItems:'flex-start'}}>
                        <img src={sucessImg} style={{display:'inline',marginRight:'8px', marginTop:'7px'}} /> <span>{item?.new?.markdown}</span>
                    </div>
                </td>
            </tr>
        )) : []
    }

    return (
        <section sx={{ variant: 'section.keyFeature' }} id="why">
            <Container>
                <SectionHeader
                    slogan="THE OLD WAY VS THE NEW WAY"
                    title={'Why use Apito? How does it Benefit me?'}
                />

                <Container sx={styles.containerBox}>
                    
                <table style={{width:'100%'}}>
                    <thead>
                    <tr>
                        <th>
                            <Text
                                as="p"
                                sx={{
                                    variant: 'sectionHeader.subTitle',
                                    color: 'primary',
                                    opacity: 1,
                                    textAlign: 'left'
                                }}
                            >
                                THE OLD WAY
                            </Text>
                    </th>
                        <th>
                            <Text
                                as="p"
                                sx={{
                                    variant: 'sectionHeader.subTitle',
                                    color: 'primary',
                                    opacity: 1,
                                    textAlign: 'left'
                                }}
                            >
                                THE APITO WAY
                            </Text>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        {renderTableDataRow(benifits)}
                    </tbody>
                </table>

                </Container>
                

            </Container>
        </section>
    );
}

const styles = {
    coreFeature: {
        py: [0, null, null, 2, null, 7],
        position: 'relative',
    },
    containerBox: {
        display: 'flex',
        alignItems: ['flex-start', null, null, 'flex-start'],
        justifyContent: ['flex-start', null, null, 'space-between'],
        flexDirection: ['column', null, null, 'row'],
        pb: [0, null, null, null, null, 7],
    },
    thumbnail: {
        mr: ['auto', null, null, 6, 60, 85],
        order: [2, null, null, 0],
        ml: ['auto', null, null, 0],
        display: 'inline-flex',
        position: 'relative',
        '> img': {
            position: 'relative',
            zIndex: 1,
            height: [310, 'auto'],
        },
    },
    shapeBox: {
        position: 'absolute',
        // bottom: -68,
        // left: -120,
        left: -100,
        zIndex: -1,
        display: ['none', null, null, null, null, 'inline-block'],
    },
    contentBox: {
        width: ['100%', null, null, 315, 390, 450, null, 600],
        flexShrink: 0,
        mb: [7, null, 60, 0],
        textAlign: ['left', null, null, 'left'],
    },
    grid: {
        pr: [2, 0, null, null, 6, '70px'],
        pl: [2, 0],
        pt: [2, null, null, null, 3],
        mx: 'auto',
        width: ['100%', 370, 420, '100%'],
        gridGap: ['35px 0', null, null, null, '50px 0'],
        gridTemplateColumns: ['repeat(1,1fr)'],
    },
    card: {
        display: 'flex',
        alignItems: 'flex-start',
        transition: 'all 0.3s',
    },

    icon: {
        width: ['45px', null, null, null, '55px'],
        height: 'auto',
        flexShrink: 0,
        mr: [3, null, null, null, 4],
    },
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        mt: '-5px',
        title: {
            fontSize: 3,
            color: 'heading_secondary',
            lineHeight: 1.4,
            fontWeight: 700,
            mb: [2, null, 3, 2, 3],
        },

        subTitle: {
            fontSize: [1, null, null, '14px', 1],
            fontWeight: 400,
            lineHeight: 1.9,
        },
    },
    tbodyText:{
        fontSize: ['15px', 2, null, null, null, '17px', null, 3],
        fontWeight: 400,
        lineHeight: [1.7, null, null, 2, null, '1.7'],
        color: 'text_secondary',
        mb: '30px',
    }

};
