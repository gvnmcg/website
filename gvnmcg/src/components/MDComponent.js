import React, { useEffect, useState } from 'react';
import AppMarkdown from './resume.md';
import ReactMarkdown from 'react-markdown';

const MDComponent = () => {

  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(AppMarkdown)
    .then(res => res.text())
    .then(text => setMarkdown(text));
  }, [])

  return <ReactMarkdown source={markdown} />; 
}

export default MDComponent;