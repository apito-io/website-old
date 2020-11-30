import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRIVACY_PAGE_DATA } from 'pages/api/content/query';

import AcceptableUsePolicy from 'sections/acceptableUsePolicy';
import Footer from 'components/footer/footer';
import Subscribe from 'sections/subscribe';
import { Loader } from 'components/custom';

export default function getAUPContent() {
    const { loading, error, data } = useQuery(GET_PRIVACY_PAGE_DATA)
    if (loading) return <Loader pageLoader />
    if (error) {
        return <AcceptableUsePolicyPage />
    }
    if (data) {
        const aupData = data?.privacypolicies?.[0]?.data ?? {}
        return <AcceptableUsePolicyPage  aupData={aupData} />
    }
    return <AcceptableUsePolicyPage />
}

const AcceptableUsePolicyPage = ({ aupData }) => {

    return (
        <>
            <AcceptableUsePolicy aupData={aupData} />
            <Subscribe />
            <Footer />
        </>
    )
}
