import React from 'react';

function VideoUpload() {
  return (
    <div className="p-4 bg-gray-100 rounded">
      <input type="file" className="mb-2" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Upload</button>
    </div>
  );
}

VideoUpload.propTypes = {};

export default VideoUpload;