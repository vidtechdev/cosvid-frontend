import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import { onets } from '../data/onetsmapped';
import VideoGroupListStyles from './styles/VideoGroupListStyles';
// import ImageBlockStyles from './styles/ImageBlockStyles';
import DisplayError from './ErrorMessage';

// GraphQL Querys
const CLUSTER_DATA = gql`
  query CLUSTER_DATA($clusterCode: String!) {
    cluster(clusterCode: $clusterCode) {
      title
      occupations {
        title
        code
        videocode
      }
    }
  }
`;

export default function ClusterVideoGroupListGQL({ clusterCode }) {
  const [active, setActive] = useState(false);
  const { data, error, loading } = useQuery(CLUSTER_DATA, {
    variables: {
      clusterCode,
    },
  });

  if (loading) return <p>Getting cluster data.</p>;
  if (error) return <DisplayError error />;

  const { title, occupations } = data.cluster;

  const accordionToggleText = active ? 'Close' : 'Open';
  // const faCaret = active
  //   ? '{font-size: 48px; color: #16a085; transform: translateY(-25%);}'
  //   : '{font-size: 48px; color: #16a085;}';

  return (
    <>
      <VideoGroupListStyles>
        <div
          className="title"
          role="button"
          tabIndex={0}
          onClick={() => setActive(!active)}
          onKeyUp={() => setActive(!active)}
        >
          <div className="accordion-name">{title}</div>
          <div className="accordion-action">{accordionToggleText}</div>
        </div>
        <div
          className="list-group"
          style={!active ? { display: 'none' } : { display: 'grid' }}
        >
          <div className="list-items">
            {active
              ? occupations.map((occ, i) => {
                  if (!onets.includes(occ.code)) {
                    console.log(
                      'skipped: ',
                      occ,
                      'from Cluster: ',
                      clusterCode
                    );
                  } else {
                    // console.log(occ);
                    return (
                      <p key={i} id={`${i}-${occ.code}`}>
                        <a href={`/career/video/${occ.code}`}>{occ.title}</a>
                      </p>
                    );
                  }
                })
              : ''}
          </div>
        </div>
      </VideoGroupListStyles>
    </>
  );
}

ClusterVideoGroupListGQL.propTypes = {
  clusterCode: PropTypes.string,
};
