var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This app was created with the following technologies:</p>
      <ul>
        <li><a href="https://facebook.github.io/react/">React</a></li>
        <li><a href="http://foundation.zurb.com/">Foundation</a></li>
        <li><a href="https://darksky.net/forecast/">Dark Sky</a></li>
      </ul>
      <a href="https://github.com/BenHagan/ReactWeather">GitHub</a>
    </div>

  );
}

module.exports = About;
