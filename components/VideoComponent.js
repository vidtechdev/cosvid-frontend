import React from 'react';
import PropTypes from 'prop-types';
import VideoElement from './videoplayer/video-element';
import Transcript from './videoplayer/TranscriptGQL';

export default function VideoComponent({ videocode, type }) {
  if (type === 'cluster') {
    return (
      <div id={videocode}>
        <VideoElement videocode={videocode} type="cluster" />
        <br />
        <Transcript videocode={videocode} />
      </div>
    );
  }
  if (type === 'tutorials-and-overviews') {
    return (
      <div id={videocode}>
        <VideoElement videocode={videocode} type="tutorial" />
        <br />
        <Transcript videocode={videocode} />
      </div>
    );
  }
  if (type === 'work-option' || type === 'skill-and-ability') {
    return (
      <div id={videocode}>
        <VideoElement videocode={videocode} type={type} />
      </div>
    );
  }
  return (
    <div id={videocode}>
      <VideoElement videocode={videocode} />
      <br />
      <Transcript videocode={videocode} />
    </div>
  );
}

VideoComponent.propTypes = {
  videocode: PropTypes.string,
  type: PropTypes.string,
};
