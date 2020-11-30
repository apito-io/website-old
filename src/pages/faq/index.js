import React from 'react';
import FAQ from 'sections/faq';
import { useQuery } from '@apollo/client';
import { GET_HOME_PAGE_DATA } from 'pages/api/content/query';

import Banner from 'sections/banner';
import Footer from 'components/footer/footer';
import Subscribe from 'sections/subscribe';

import { Loader } from 'components/custom';

export default function getFaqPageData() {
    const { loading, error, data } = useQuery(GET_HOME_PAGE_DATA)
    if (loading) return <Loader pageLoader />
    if (error) {
        return <FaqPage />
    }
    if (data) {
        const headerData = data?.homepages[0]?.data ?? {}
        return <FaqPage headerData={headerData} />
    }
    return <FaqPage />
}

const FaqPage = ({ headerData }) => {
    const { header, sub_title } = headerData

    return (
        <>
            <Banner header={header?.markdown} sub_title={sub_title?.markdown} />
            <FAQ />
            <Subscribe />
            <Footer />
        </>
    )
}
