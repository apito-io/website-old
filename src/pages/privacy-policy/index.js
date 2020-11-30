import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRIVACY_PAGE_DATA } from 'pages/api/content/query';

import PrivacyPolicy from 'sections/privacyPolicy';
import Footer from 'components/footer/footer';
import Subscribe from 'sections/subscribe';
import { Loader } from 'components/custom';

export default function getPrivacyContent() {
    const { loading, error, data } = useQuery(GET_PRIVACY_PAGE_DATA)
    if (loading) return <Loader pageLoader />
    if (error) {
        return <PrivacyPolicyPage />
    }
    if (data) {
        const privacyData = data?.privacypolicies?.[2]?.data ?? {}
        return <PrivacyPolicyPage privacyData={privacyData} />
    }
    return <PrivacyPolicyPage />
}

const PrivacyPolicyPage = ({ privacyData }) => {

    return (
        <>
            <PrivacyPolicy privacyData={privacyData} />
            <Subscribe />
            <Footer />
        </>
    )
}
