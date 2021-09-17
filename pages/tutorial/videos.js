import { useState } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import PageHeadingStyles from '../../components/styles/PageHeadingStyles';
import VideoGroupListStyles from '../../components/styles/VideoGroupListStyles';

const ALL_VIDEOS = gql`
  query ALL_VIDEOS {
    videos {
      _id
      title
      videocode
      videotype
    }
  }
`;

export default function TutorialVideosPage() {
  const [active, setActive] = useState(true);
  const { data, error, loading } = useQuery(ALL_VIDEOS);
  if (loading) return <p>Loading data...</p>;
  if (error) return <p> Error: {error.message}</p>;

  const accordionToggleText = active ? 'Close' : 'Open';
  return (
    <div>
      <PageHeadingStyles>Learn about job search topics.</PageHeadingStyles>
      <p>Click the option to learn more.</p>
      <VideoGroupListStyles>
        <div
          className="title"
          role="button"
          tabIndex={0}
          onClick={() => setActive(!active)}
          onKeyUp={() => setActive(!active)}
        >
          <div className="accordion-name">Tutorial Videos</div>
          <div className="accordion-action">{accordionToggleText}</div>
        </div>
        <div className="list-items">
          {active
            ? data.videos.map((video, i) => {
                if (video.videotype === 'tutorials-and-overviews') {
                  return (
                    <p key={i} data-title={video.title}>
                      <a href={`/tutorial/video/${video.videocode}`}>
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
