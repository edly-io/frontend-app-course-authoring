import React from 'react';
import PropTypes from 'prop-types';

export const fileInput = ({
  onAddFile,
  setSelectedRows,
  setAddOpen,
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ref = React.useRef();
  const click = () => ref.current.click();
  const addFile = (e) => {
    const { files } = e.target;
    setSelectedRows(files);
    Object.values(files).forEach(file => {
      onAddFile(file);
      setAddOpen();
    });
  };
  return {
    click,
    addFile,
    ref,
  };
};

const FileInput = ({ fileInput: hook }) => (
  <input
    aria-label="file-input"
    className="upload d-none"
    onChange={hook.addFile}
    ref={hook.ref}
    type="file"
    multiple
  />
);

FileInput.propTypes = {
  fileInput: PropTypes.shape({
    addFile: PropTypes.func,
    ref: PropTypes.oneOfType([
      // Either a function
      PropTypes.func,
      // Or the instance of a DOM native element (see the note about SSR)
      PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    ]),
  }).isRequired,
};

export default FileInput;
