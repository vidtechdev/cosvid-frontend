import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import VideoComponent from '../../../components/VideoComponent';
import PageHeadingStyles from '../../../components/styles/PageHeadingStyles';
import { server } from '../../../config';

export default function SingleClusterVideoPage({ query }) {
  const { clustervideo } = query;
  console.log(clustervideo);

  const [videoData, setVideoData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [err, setErr] = useState(null);
  useEffect(() => {
    const getVideoData = () => {
      fetch(`${server}/api/videos/${clustervideo}`, {
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
            setVideoData(data);
            setIsLoaded(true);
          },
          (err) => {
            setErr(err);
            setIsLoaded(true);
          }
        );
    };
    getVideoData();
  }, [clustervideo]);
  if (err) {
    return <p>video data error -- {err.message}</p>;
  }
  if (!isLoaded) {
    return <p>REST video data is LOADING...</p>;
  }

  const { title, transcript } = videoData;
  const endMarker = transcript.indexOf('>');
  const description = transcript.slice(2, endMarker);

  return (
    <>
      <PageHeadingStyles>{title}</PageHeadingStyles>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <VideoComponent videocode={clustervideo} type="cluster" />
    </>
  );
}

SingleClusterVideoPage.propTypes = {
  query: PropTypes.any,
  clustervideo: PropTypes.string,
};
