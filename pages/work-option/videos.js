import { gql, useQuery } from '@apollo/client';
// import gql from 'graphql-tag';
import { useState } from 'react';
import PageHeadingStyles from '../../components/styles/PageHeadingStyles';
import VideoGroupListStyles from '../../components/styles/VideoGroupListStyles';

const ALL_VIDEOS = gql`
  query ALL_VIDEOS {
    videos {
      title
      videocode
      videotype
    }
  }
`;

export default function WorkOptionVideosPage() {
  const [active, setActive] = useState(true);
  const { data, error, loading } = useQuery(ALL_VIDEOS);
  if (loading) return <p>Loading data...</p>;
  if (error) return <p> Error: {error.message}</p>;

  const accordionToggleText = active ? 'Close' : 'Open';
  return (
    <div>
      <PageHeadingStyles>
        Learn about non-traditional careers and other work options.
      </PageHeadingStyles>
      <p>Click the option to learn more.</p>
      <VideoGroupListStyles>
        <div
          className="title"
          role="button"
          tabIndex={0}
          onClick={() => setActive(!active)}
          onKeyUp={() => setActive(!active)}
        >
          <div className="accordion-name">Work Option Videos</div>
          <div className="accordion-action">{accordionToggleText}</div>
        </div>
        <div
          className="list-items"
          style={!active ? { display: 'none' } : { display: 'block' }}
        >
          {active
            ? data.videos.map((video, i) => {
                if (video.videotype === 'work-option') {
                  return (
                    <p key={i} data-title={video.title}>
                      <a href={`/work-option/video/${video.videocode}`}>
                        {video.title}
                      </a>
                    </p>
                  );
                }
              })
            : null}
        </div>
      </VideoGroupListStyles>
    </div>
  );
}
