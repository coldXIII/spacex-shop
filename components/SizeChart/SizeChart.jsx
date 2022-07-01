import React from 'react';
import styles from './sizechart.module.scss';

const SizeChart = ({ sizeChart: { rows } }) => {

  return (
    <div className={styles.SizeChart}>
      {rows.map((item, index) => (
        <div className={styles.row} key={index}>
          {item.cells.map((cell, index) => (
            <span key={index}>{cell}</span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SizeChart;
