import React from 'react';
import PropTypes from 'prop-types';
import Track from './track-element';
import { server } from '../../config';

export default function VideoElement(props) {
  const { videocode, type } = props;

  let src = `${server}/stream/video/`;
  let poster = `${server}/stream/poster/`;
  if (type === 'cluster') {
    src = `${server}/stream/video/cluster/`;
    poster = `${server}/stream/poster/cluster/`;
  }
  if (type === 'tutorial') {
    src = `${server}/stream/video/tutorial/`;
    poster = `${server}/stream/poster/tutorial/`;
  }

  return (
    <video
      className="video"
      id={videocode}
      src={`${src}${videocode}`}
      poster={`${poster}${videocode}`}
      controls
      controlsList="nodownload"
      crossOrigin="anonymous"
    >
      <Track english onet={videocode} />
      <Track spanish onet={videocode} />
    </video>
  );
}
VideoElement.propTypes = {
  type: PropTypes.string,
  // cluster: PropTypes.bool,
  videocode: PropTypes.string,
};
