import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss';

const Index = () => (
  <div className={styles.cb}>
    Hello! Welcome to the React World!
  </div>
);

ReactDOM.render(<Index />, document.getElementById('index'));
