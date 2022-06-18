import React, { useState } from "react";

import Dropzone from "react-dropzone";

export default function App() {
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = acceptedFiles =>
    setFileNames(acceptedFiles.map(file => file.name));

  return (
    <div className="App">
      <Dropzone
        onDrop={handleDrop}
        accept="image/*"
        minSize={1024}
        maxSize={3072000}
      >
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragAccept,
          isDragReject
        }) => {

          const additionalClass = isDragAccept
            ? "accept"
            : isDragReject
            ? "reject"
            : "";

          return (
        <div className="sectiondrop">
            <div
              {...getRootProps({
                className: `dropzone ${additionalClass}`
              })}
            >
              <input {...getInputProps()} />
              
              <h3 className="textdrop">ARRASTRA TUS ARCHIVOS AQUI</h3>
            
              <div>{isDragAccept ? "Tu archivo se puede subir" : ""}</div>
              <div>{isDragReject ? "Tu archivo no se puede subir" : ""}</div>
              <br />
                <div className="archivodrop">
                {fileNames.map(fileName => (
                    <p key={fileName}>{fileName}</p>
                ))}
                </div>
            </div>
            <button {...getRootProps({
                className: 'buttondrop'
              })}>
            Subir archivos
            </button>
        </div>
            
          );
        }}
      </Dropzone>
    </div>
  );
}
