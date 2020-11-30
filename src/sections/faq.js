/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
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

import { useQuery } from '@apollo/client';
import { GET_FAQ_PAGE_DATA, } from 'pages/api/content/query';

import { Loader } from 'components/custom';

export default function getFaqPageData() {
    const { loading, error, data } = useQuery(GET_FAQ_PAGE_DATA)
    if (loading) return <Loader />
    if (error) {
        return <Faq />
    }
    if (data) {
        const FaqData = data?.faqs?.[0]?.data ?? {}
        return <Faq FaqData={FaqData} />
    }
    return <Faq />
}

const Faq = ({ FaqData }) => {
    const { questionanswers } = FaqData || {}

    const renderFaqList = (questionanswers) => {
        if (questionanswers?.length) {
            return <Accordion defaultIndex={[0]} allowToggle>
                {
                    questionanswers.map((item, i) =>
                        <AccordionItem key={i}>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    <strong>{item?.question ?? ''}</strong>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <ReactMarkdown>
                                    {item?.answers?.markdown ?? ''}
                                </ReactMarkdown>
                            </AccordionPanel>
                        </AccordionItem>
                    )
                }
            </Accordion>
        }
    }

    return (
        <section sx={{ variant: 'section.faq' }} id="feature">
            <Container>
                <SectionHeader
                    title="Freequently Asked Questions"
                />
                {renderFaqList(questionanswers)}
            </Container>
        </section>
    )
}
