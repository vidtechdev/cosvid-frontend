import PageHeadingStyles from '../components/styles/PageHeadingStyles';
import ClusterVideoGroupListREST from '../components/ClusterVideoGroupListREST';

export default function CareerVideosPage() {
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
      <ClusterVideoGroupListREST clusterCode="01.0000" />
      <ClusterVideoGroupListREST clusterCode="02.0000" />
      <ClusterVideoGroupListREST clusterCode="03.0000" />
      <ClusterVideoGroupListREST clusterCode="04.0000" />
      <ClusterVideoGroupListREST clusterCode="05.0000" />
      <ClusterVideoGroupListREST clusterCode="06.0000" />
      <ClusterVideoGroupListREST clusterCode="07.0000" />
      <ClusterVideoGroupListREST clusterCode="08.0000" />
      <ClusterVideoGroupListREST clusterCode="09.0000" />
      <ClusterVideoGroupListREST clusterCode="10.0000" />
      <ClusterVideoGroupListREST clusterCode="11.0000" />
      <ClusterVideoGroupListREST clusterCode="12.0000" />
      <ClusterVideoGroupListREST clusterCode="13.0000" />
      <ClusterVideoGroupListREST clusterCode="14.0000" />
      <ClusterVideoGroupListREST clusterCode="15.0000" />
      <ClusterVideoGroupListREST clusterCode="16.0000" />
      <div className="nav-header">Video Library</div>
    </>
  );
}
