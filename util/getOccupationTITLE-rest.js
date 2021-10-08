import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { server } from '../config';

export default function RESTOccupationTITLE({ code, key }) {
  const [occupationData, setOccupationData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const getOccupationData = () => {
      fetch(`${server}/api/occupations/${code}`, {
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
            setOccupationData(data);
            setIsLoaded(true);
          },
          (err) => {
            setErr(err);
            setIsLoaded(true);
          }
        );
    };
    getOccupationData();
  }, [code]);

  if (err) {
    return <p>REST Occupation Data error -- {err.message}</p>;
  }
  if (!isLoaded) {
    return <p>REST Occupation Data is loading...</p>;
  }

  // const {
  //   _id,
  //   title,
  //   desctiption,
  //   videocode,
  //   clusters,
  //   pathways,
  //   lmi,
  // } = occupationData;

  return (
    <p id={key}>
      <a href={`career-videos/video/${code}`}>{occupationData.title}</a>
    </p>
  );
}

RESTOccupationTITLE.propTypes = {
  code: PropTypes.string,
  key: PropTypes.number,
};
