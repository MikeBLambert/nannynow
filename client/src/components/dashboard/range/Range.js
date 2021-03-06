import React, { PureComponent } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';
import globalStyles from '../../../main.css';
import styles from './Range.css';

export default class Range extends PureComponent {
  static propTypes = {
    onStartChange: PropTypes.func.isRequired,
    onEndChange: PropTypes.func.isRequired,
    start: PropTypes.object,
    end: PropTypes.object
  };

  render() {
    const { start, end, onStartChange, onEndChange } = this.props;
    return (
      <div id={styles.container}>
        <div id={styles.selectLine}>
          <label id={globalStyles.inputLabel}>Start Time & Date:</label>
          <DatePicker
            selected={start}
            onChange={onStartChange}
            showTimeSelect
            selectsStart
            minDate={new Date()}
            timeFormat='HH:mm'
            timeIntervals={15}
            dateFormat='MMMM d, yyyy h:mm aa'
            timeCaption='time'
            id={globalStyles.input}
            className={styles.dateInput}
            placeholderText={new Date().toDateString()}
          />
        </div>
        <div id={styles.selectLine}>
          <label id={globalStyles.inputLabel}>End Time & Date:</label>
          <DatePicker
            selected={end}
            onChange={onEndChange}
            showTimeSelect
            selectsEnd
            timeFormat='HH:mm'
            timeIntervals={15}
            dateFormat='MMMM d, yyyy h:mm aa'
            timeCaption='time'
            id={globalStyles.input}
            className={styles.dateInput}
            placeholderText={new Date().toDateString()}
          />
        </div>
      </div>
    );
  }
}
