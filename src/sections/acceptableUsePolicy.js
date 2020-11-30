/** @jsx jsx */
import { jsx, Container, Heading } from 'theme-ui';
import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react"
import ReactMarkdown from 'react-markdown'
import SectionHeader from '../components/section-header';


const acceptableUsePolicy = ({ aupData }) => {
    const { title, header, details } = aupData || {}

    return (
        <section sx={{ variant: 'section.privacy' }} id="feature">
            <Container>
                <Heading
                    as="h2"
                    sx={{
                        variant: 'sectionHeader.title',
                        color: 'heading',
                        textAlign: ['left'],
                    }}
                >
                    {title}
                </Heading>
                <br />

                <ReactMarkdown>
                    {header?.markdown ?? ''}
                </ReactMarkdown>
                <br />

                <ReactMarkdown>
                    {details?.markdown ?? ''}
                </ReactMarkdown>
            </Container>
        </section>
    )
}

export default acceptableUsePolicy;

