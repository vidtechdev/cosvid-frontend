import { gql, useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import DisplayError from '../../../components/ErrorMessage';
import PageHeadingStyles from '../../../components/styles/PageHeadingStyles';
import VideoComponent from '../../../components/VideoComponent';

const SINGLE_OCCUPATION = gql`
  query SINGLE_OCCUPATION($code: String!) {
    occupation(code: $code) {
      title
      description
      videocode
    }
  }
`;

export default function OccupationVideo({ query }) {
  const { code } = query;

  const { data, error, loading } = useQuery(SINGLE_OCCUPATION, {
    variables: {
      code,
    },
  });
  if (loading) return <p>Getting career video title...</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <>
      <PageHeadingStyles>{data.occupation.title}</PageHeadingStyles>
      <p>
        <strong>Description:</strong> {data.occupation.description}
      </p>
      <VideoComponent videocode={data.occupation.videocode} />
    </>
  );
}

OccupationVideo.propTypes = {
  query: PropTypes.object,
  code: PropTypes.string,
};
