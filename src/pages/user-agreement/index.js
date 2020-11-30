import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRIVACY_PAGE_DATA } from 'pages/api/content/query';

import UserAgreement from 'sections/userAgreement';
import Footer from 'components/footer/footer';
import Subscribe from 'sections/subscribe';
import { Loader } from 'components/custom';

export default function getUserAgreementContent() {
    const { loading, error, data } = useQuery(GET_PRIVACY_PAGE_DATA)
    if (loading) return <Loader pageLoader />
    if (error) {
        return <UserAgreementPage />
    }
    if (data) {
        const userAgreementData = data?.privacypolicies?.[1]?.data ?? {}
        return <UserAgreementPage userAgreementData={userAgreementData} />
    }
    return <UserAgreementPage />
}

const UserAgreementPage = ({ userAgreementData }) => {

    return (
        <>
            <UserAgreement userAgreementData={userAgreementData} />
            <Subscribe />
            <Footer />
        </>
    )
}
