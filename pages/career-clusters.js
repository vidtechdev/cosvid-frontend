import PageHeadingStyles from '../components/styles/PageHeadingStyles';
import ClusterVideoBox from '../components/ClusterVideoBox';

export default function CareerClustersPage() {

  return (
    <>
      <PageHeadingStyles>
        Learn about the major U.S. industries and the types of careers they
        offer.
      </PageHeadingStyles>
      <p>Select one of the career cluster / industry videos below.</p>
      <ClusterVideoBox
        name="Agriculture, Food, and Natural Resources"
        fileName="agriculture-food-and-natural-resources"
      />
      <ClusterVideoBox
        name="Architecture and Construction"
        fileName="construction"
      />
      <ClusterVideoBox
        name="Arts, Audio/Video Technology, and Communications"
        fileName="arts-av-technology-and-communications"
      />
      <ClusterVideoBox
        name="Business Management and Administration"
        fileName="business-management-and-administration"
      />
      <ClusterVideoBox
        name="Education and Training"
        fileName="education-and-training"
      />
      <ClusterVideoBox name="Energy" fileName="energy" />
      <ClusterVideoBox
        name="Finance and Insurance"
        fileName="finance-and-insurance"
      />
      <ClusterVideoBox
        name="Government and Public Administration"
        fileName="government-and-public-administration"
      />
      <ClusterVideoBox name="Heath Science" fileName="healthcare" />
      <ClusterVideoBox
        name="Hospitality and Tourism"
        fileName="hospitality-and-tourism"
      />
      <ClusterVideoBox name="Human Services" fileName="human-services" />
      <ClusterVideoBox
        name="Information Technology"
        fileName="information-technology"
      />
      <ClusterVideoBox
        name="Law, Public Safety, and Corrections"
        fileName="law-public-safety-and-corrections"
      />
      <ClusterVideoBox name="Manufacturing" fileName="manufacturing" />
      <ClusterVideoBox name="Marketing" fileName="marketing" />
      <ClusterVideoBox
        name="Science, Technology, Engineering, and Math"
        fileName="stem"
      />
      <ClusterVideoBox
        name="Telecommunications"
        fileName="telecommunications"
      />
      <ClusterVideoBox
        name="Transportation, Distribution, and Logistics"
        fileName="transportation-distribution-and-logistics"
      />
    </>
  );
}
