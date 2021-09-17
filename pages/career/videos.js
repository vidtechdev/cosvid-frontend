import { gql, useQuery } from '@apollo/client';
// import gql from 'graphql-tag';
import ClusterVideoGroupListGQL from '../../components/ClusterVideoGroupListGQL';
import DisplayError from '../../components/ErrorMessage';
import PageHeadingStyles from '../../components/styles/PageHeadingStyles';

const ALL_CLUSTERS = gql`
  query ALL_CLUSTERS {
    clusters {
      clusterCode
      title
    }
  }
`;

export default function CareerVideosPage() {
  const { data, loading, error } = useQuery(ALL_CLUSTERS);
  if (loading) return <p>Data is loading...</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <>
      <PageHeadingStyles>
        Explore our collection of videos on hundreds of different careers.
      </PageHeadingStyles>
      <p>
        Career videos are organized into 16 clusters, or related types of work.
        Select a category to view a list of videos related to that cluster.
        Videos include career details such as tasks, work settings, education
        needed, and more.
      </p>
      {data.clusters.map((cluster, i) =>
        cluster.clusterCode === '0000' || cluster.clusterCode === '00' ? (
          console.log(cluster.clusterCode)
        ) : (
          <ClusterVideoGroupListGQL key={i} clusterCode={cluster.clusterCode} />
        )
      )}
      <div className="nav-header">Video Library</div>
    </>
  );
}
