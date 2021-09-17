import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import VideoComponent from '../../../components/VideoComponent';
import Transcript from '../../../components/videoplayer/transcript-REST';
import PageHeadingStyles from '../../../components/styles/PageHeadingStyles';
import { server } from '../../../config';

export default function SingleVideoPage({ query }) {
  const { videocode } = query;
  const [occupation, setOccupation] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const getOccupationData = () => {
      fetch(`${server}/api/occupations/${videocode}`, {
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
            setOccupation(data);
            setIsLoaded(true);
          },
          (err) => {
            setErr(err);
            setIsLoaded(true);
          }
        );
    };
    getOccupationData();
  }, [videocode]);

  if (err) {
    return <p>occupation data error -- {err.message}</p>;
  }
  if (!isLoaded) {
    return <p>occupation data is LOADING...</p>;
  }

  return (
    <>
      <PageHeadingStyles>{occupation.title} Career Video</PageHeadingStyles>
      <p>
        <strong>Description:</strong> {occupation.description}
      </p>
      <VideoComponent videocode={occupation.videocode} />
      <Transcript videocode={occupation.videocode} />
    </>
  );
}

SingleVideoPage.propTypes = {
  query: PropTypes.any,
  videocode: PropTypes.any,
};
