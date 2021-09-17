import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
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

export default function SkillAbilityVideosPage() {
  const [active, setActive] = useState(true);
  const { data, error, loading } = useQuery(ALL_VIDEOS);
  if (loading) return <p>Loading data...</p>;
  if (error) return <p> Error: {error.message}</p>;

  const accordionToggleText = active ? 'Close' : 'Open';
  return (
    <div>
      <PageHeadingStyles>
        Learn about the skills and abilities employers are looking for in job
        candidates.
      </PageHeadingStyles>
      <p>
        Each video also includes examples of careers that require the skills or
        abilities discussed.
      </p>
      <VideoGroupListStyles>
        <div
          className="title"
          role="button"
          tabIndex={0}
          onClick={() => setActive(!active)}
          onKeyUp={() => setActive(!active)}
        >
          <div className="accordion-name">Skill and Ability Videos</div>
          <div className="accordion-action">{accordionToggleText}</div>
        </div>
        <div
          className="list-items"
          style={!active ? { display: 'none' } : { display: 'block' }}
        >
          {active
            ? data.videos.map((video, i) => {
                if (video.videotype === 'skill-and-ability') {
                  return (
                    <p key={i} data-title={video.title}>
                      <a href={`/skill-and-ability/video/${video.videocode}`}>
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
