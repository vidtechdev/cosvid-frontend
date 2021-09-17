import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import PageHeadingStyles from '../components/styles/PageHeadingStyles';
import VideoGroupListStyles from '../components/styles/VideoGroupListStyles';

const ALL_VIDEOS = gql`
  query ALL_VIDEOS {
    videos {
      title
      videocode
      videotype
    }
  }
`;
export default function TutorialVideosPage() {
  const { data, error, loading } = useQuery(ALL_VIDEOS);
  if (loading) return <p>Loading data...</p>;
  if (error) return <p> Error: {error.message}</p>;

  return (
    <div>
      <PageHeadingStyles>Learn about job search topics.</PageHeadingStyles>
      <p>Click the option to learn more.</p>
      <VideoGroupListStyles>
        <div className="title">
          <div className="accordion-name">Tutorial Videos Accordion</div>
        </div>
        <div className="list-items">
          {data.videos.map((video, i) => {
            if (video.videotype === 'tutorials-and-overviews') {
              return (
                <p key={i}>
                  <a
                    href={`/tutorials-and-overviews-videos/video/${video.videocode}`}
                  >
                    {video.title}
                  </a>
                </p>
              );
            }
          })}
        </div>
      </VideoGroupListStyles>
    </div>
  );
}
