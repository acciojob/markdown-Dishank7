// import React, { useState, useEffect } from 'react';
// const MarkdownEditor = () => {
//   const [markdown, setMarkdown] = useState('');
//   const handleMarkdownChange = (event) => {
//     setMarkdown(event.target.value);
//   };
//   return (
//     <div>
//       <textarea
//         className="textarea"
//         value={markdown}
//         onChange={handleMarkdownChange}
//       />
//     </div>
//   );
// };
// export default MarkdownEditor;

import React, { useState, useEffect } from 'react';
// import ReactMarkdown from 'react-markdown';


function App() {
  const [markdownInput, setMarkdownInput] = useState('# Write your Markdown here');
  const [markdownOutput, setMarkdownOutput] = useState('');

  useEffect(() => {
    // Update the output whenever the markdownInput changes
    setMarkdownOutput(markdownInput);
  }, [markdownInput]);

  const handleInputChange = (e) => {
    setMarkdownInput(e.target.value);
  };

  return (
    <div className="App">
      <div className="half">
        <h2>Write Markdown</h2>
        <textarea
          rows="10"
          cols="50"
          value={markdownInput}
          onChange={handleInputChange}
        />
      </div>
      <div className="half">
        <h2>Preview</h2>
       <div>{markdownOutput}</div>
      </div>
    </div>
  );
}

export default App;
