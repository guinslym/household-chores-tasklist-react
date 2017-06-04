// @flow

import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";
import "./Schedule.css";

const repeatElement = function(
  el: string,
  times: number,
  content: string,
  classes: ?Array<string>
) {
  let arr = [];
  for (times > 0; times--; ) {
    arr.push(
      React.createElement(
        el,
        {
          key: times,
          className: classes && classes.join(" ")
        },
        content
      )
      // <span key={times} className={classes && classes.join(" ")}>
      //   {content}
      // </span>
    );
  }
  return arr;
};

let tasks = repeatElement("dd", 3, "Hello world", ["something", "another"]);
console.log("tasks", tasks);

class Schedule extends PureComponent {
  render() {
    return (
      <div className="Schedule">
        <div className="Schedule__header">
          <h2>Weekly Schedule</h2>
        </div>
        <p className="Schedule__intro">
          To get started, edit <code>src/Schedule.js</code> and save to reload.
        </p>
        <dl className="Schedule__list">
          <dt>Brush kids teeth (morning)</dt>
          {tasks}
        </dl>
      </div>
    );
  }
}

export default Schedule;
