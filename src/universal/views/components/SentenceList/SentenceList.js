import React, { Component, PropTypes } from 'react';

export default class SentenceList extends Component {
  static propTypes = {
    sentences: PropTypes.array,
  };

  render() {
    const { sentences } = this.props;
    const styles = require('./SentenceList.scss');
    return (
      <div className={styles.sentences}>
        <div className="content">
          {sentences && sentences.map((sentence, index) => {
            return (
              <div key={index}>
                {sentence.languages && Object.keys(sentence.languages).map((key, langIndex) => {
                  return (
                    <p key={langIndex}><sup>{index}</sup> {sentence.languages[key]}</p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
