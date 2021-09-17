import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { onets } from '../data/onetsmapped';
import RESTOccupationTITLE from '../util/getOccupationTITLE-rest';
import VideoGroupListStyles from './styles/VideoGroupListStyles';
import { server } from '../config';
// import ImageBlockStyles from './styles/ImageBlockStyles';

export default function ClusterVideoGroupListREST({ clusterCode }) {
  const [clusterData, setClusterData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [err, setErr] = useState(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const getClusterData = () => {
      fetch(`${server}/api/clusters/${clusterCode}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      })
        .then((res) => {
          if (res.status >= 400) {
            throw new Error('Server responded with error');
          }
          return res.json();
        })
        .then(
          (data) => {
            setClusterData(data);
            setIsLoaded(true);
          },
          (err) => {
            setErr(err);
            setIsLoaded(true);
          }
        );
    };
    getClusterData();
  }, [clusterCode]);

  if (err) {
    return <p>REST Cluster Data error -- {err.message}</p>;
  }
  if (!isLoaded) {
    return <p>REST Cluster Data is loading...</p>;
  }

  // console.log('clusterData: ', clusterData);
  const { title, occupations } = clusterData;
  // console.log('title: ', title);
  // console.log('occupations: ', occupations);

  const accordionText = active ? 'Close' : 'Open';
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
          <div className="accordion-action">{accordionText}</div>
          {/* <div className="accordion-action">
            <div className="fa fa-caret-down" style={faCaret}>
              &#xf0d7
            </div>
          </div> */}
        </div>
        <div
          className="list-group"
          style={!active ? { display: 'none' } : { display: 'grid' }}
        >
          {/* <ImageBlockStyles>
              {/* get random set of onets from this cluster *\/}
              <img
                alt={`${imgGroup[0][1]} job occupation`}
                src={`https://cdn.careeronestop.org/OccVids/Thumbnails/${imgGroup[0][0]}`}
              />
              <img alt="" src="" />
              <img alt="" src="" />
            </ImageBlockStyles> */}

          <div className="list-items">
            {active
              ? occupations.map((occ, i) => {
                  if (!onets.includes(occ)) {
                    console.log(
                      'skipped: ',
                      occ,
                      'from Cluster: ',
                      clusterCode
                    );
                  } else {
                    // console.log(occ);
                    return (
                      <RESTOccupationTITLE code={occ} key={`${i}-${occ}`} />
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

ClusterVideoGroupListREST.propTypes = {
  clusterCode: PropTypes.string,
};
