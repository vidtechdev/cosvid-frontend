import React from 'react';
import { En, Es } from './caption-params';
import { server } from '../../config';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      default: this.props.default,
    };
  }

  render() {
    const { english } = this.props;
    const { spanish } = this.props;
    const { onet } = this.props;

    let { id, kind, src, srcLang, label } = '';

    if (english) {
      id = En.id;
      kind = En.kind;
      src = En.src;
      // vtt = En.vtt;
      srcLang = En.srcLang;
      label = En.label;
    }

    if (spanish) {
      id = Es.id;
      kind = Es.kind;
      src = Es.src;
      // vtt = Es.vtt;
      srcLang = Es.srcLang;
      label = Es.label;
    }

    return (
      <track
        id={id}
        kind={kind}
        src={`${server}${src}${onet}`}
        srcLang={srcLang}
        label={label}
        default={this.state.default}
      />
    );
  }
}

export default Track;
