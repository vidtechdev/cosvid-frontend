import styled from 'styled-components';

const VideoGroupListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  margin: 1rem 0px;
  .title {
    display: grid;
    grid-template-columns: auto;
    background: var(--grayblue);
    padding: 1rem;
  }
  .accordion-name {
    display: grid;
    grid-column-start: 0;
    grid-column-end: 1;
    font-weight: 600;
  }
  .accordion-action {
    display: grid;
    grid-column-start: 1;
    grid-column-end: 2;
    text-align: right;
    margin-top: auto;
    margin-bottom: auto;
    font-weight: 400;
  }
  .list-items {
    padding: 0.75rem;
  }
  /* .fa-caret-down {
  font-size: 48px;
  color: #16a085;
} */
`;

export default VideoGroupListStyles;
