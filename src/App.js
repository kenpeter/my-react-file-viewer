import React from 'react';
import FileViewer from 'react-file-viewer';
import {CustomErrorComponent} from 'custom-error';

function App () {
  // docx, format loss
  // https://github.com/plangrid/react-file-viewer/issues/90
  //const file = 'http://localhost:3000/demo_formate_loss_in_web.docx';
  //const type = 'docx';

  // docx, again format lossing
  // https://github.com/plangrid/react-file-viewer/issues/90
  //const file = 'http://localhost:3000/example.docx';
  //const type = 'docx';

  //
  const file = '5000_rows.xlsx';
  const type = 'xlsx';

  const onError = e => {
    console.error (e);
  };

  return (
    <div className="App">
      <FileViewer
        fileType={type}
        filePath={file}
        errorComponent={CustomErrorComponent}
        onError={onError}
      />
      );

    </div>
  );
}

export default App;
