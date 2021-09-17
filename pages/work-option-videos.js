import { gql, useQuery } from '@apollo/client';
import VideoGroupListStyles from '../components/styles/VideoGroupListStyles';

export async function getStaticProps() {
  const { data, error, loading } = await useQuery(ALL_VIDEOS);
  return {
    props: {
      data,
      error,
      loading
    }
  }
}
const ALL_VIDEOS = gql`
  query ALL_VIDEOS {
    videos {
      title
      videocode
      videotype
    }
  }
`;

export default function WorkOptionVideosPage({data, error, loading}) {
  // const { data, error, loading } = useQuery(ALL_VIDEOS);
  if (loading) return <p>Loading data...</p>;
  if (error) return <p> Error: {error.message}</p>;

  return (
    <div>
      <VideoGroupListStyles>
        <div className="title">
          <div className="accordion-name">Work Options Videos</div>
        </div>
        <div className="list-items">
          {data.videos.map((video, i) => {
            if (video.videotype === 'work-options') {
              return (
                <p key={i}>
                  <a href={`/work-option/video/${video.videocode}`}>
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
