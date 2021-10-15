import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
// import { onets } from '../data/onetsmapped';
import VideoGroupListStyles from './styles/VideoGroupListStyles';
// import ImageBlockStyles from './styles/ImageBlockStyles';
import DisplayError from './ErrorMessage';
import sortThis from '../util/sortThis';

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

  if (error) return <DisplayError error />;
  if (loading) {
    // console.log('getting cluster videos');
    return null;
  }
  const { title, occupations } = data.cluster;
  const sorted = sortThis(occupations);
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
              ? sorted.map((occ, i) => {
                  if (occ.videocode === '') {
                    console.log(
                      `${occ.code} - ${occ.title} has no videocode. Cluster: [${clusterCode}]`
                    );
                  } else {
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
