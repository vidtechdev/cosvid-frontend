import PageHeadingStyles from '../components/styles/PageHeadingStyles';
import VideoComponent from '../components/VideoComponent';

export default function IndexPage() {
  return (
    <>
      <PageHeadingStyles>
        Browse CareerOneStop's video collection to learn about careers,
        industries, skills and abilities, or work options and education levels.
      </PageHeadingStyles>
      <p>Get started by selecting a link on the left.</p>
      <VideoComponent
        videocode="WhatCanCareerOneStopDoForYou"
        type="tutorials-and-overviews"
      />
    </>
  );
}
