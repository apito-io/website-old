import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import Feature from '../sections/feature';
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';
import BlogSection from '../sections/blog-section';
import Comparison from '../sections/comparison';
import Subscribe from '../sections/subscribe';
import Footer from '../components/footer/footer';

import { Loader } from 'components/custom';

import { useQuery } from '@apollo/client';
import { GET_HOME_PAGE_DATA } from './api/content/query';

export default function getHomePageData() {
  const { loading, error, data } = useQuery(GET_HOME_PAGE_DATA)
  if (loading) return <Loader pageLoader />
  if (error) {
    return <IndexPage />
  }
  if (data) {
    const homePageData = data?.homepages[0]?.data
    return <IndexPage homePageData={homePageData} />
  }
  return <IndexPage />
}

function IndexPage({ homePageData }) {
  const { website_title, header, sub_title, cover_photo, feature_title, features, feature_slider, benifits, power_title, powers, second_feature_slider } = homePageData || {}

  return (
    <>
      <SEO title={`Apito | ` + website_title || ''} />
      <Banner header={header?.markdown} sub_title={sub_title?.markdown} banner={cover_photo?.url} />
      <KeyFeature feature_title={feature_title} features={features} />
      <ServiceSection feature_slider={feature_slider} />
      <Comparison benifits={benifits} />
      <Feature power_title={power_title} powers={powers} />
      <CoreFeature coreFeatures={second_feature_slider} />
      {/* <WorkFlow /> */}
      <Package />
      {/* <TeamSection />
          <TestimonialCard />
          <BlogSection /> */}
      <Subscribe />
      <Footer />
    </>
  )
}
