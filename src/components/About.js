// About.js or wherever you have your cards
import React from "react";
import "../Css/About.css"; // Import custom CSS for styling

const About = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">About Our Audio Converter</h2>
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="card square-card">
            <div className="card-header header-red">Easy Audio Conversion</div>
            <div className="card-body gray-bg">
              <p>
                Instantly upload any audio file and convert it to text with one
                click.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="card square-card">
            <div className="card-header header-blue">Flexible Options</div>
            <div className="card-body gray-bg">
              <p>
                Choose from multiple languages and formats to customize your
                audio transcription experience!
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="card square-card">
            <div className="card-header header-green">Completely Online</div>
            <div className="card-body gray-bg">
              <p>
                There is no need to download and install any app — use our
                online tools instead.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-container">
        <h2 className="about-title">What is an Audio Transcriber?</h2>
        <p className="about-text">
          The Audio Transcriber is a powerful tool designed to convert audio
          files into text effortlessly. It supports various audio formats and
          ensures accurate transcriptions for all types of recordings.
        </p>
        <p className="about-text">
          Our audio transcription service is completely online, meaning you
          don't need to download or install anything that takes up the memory of
          your device. It works seamlessly across all operating systems
          including macOS, Windows, Android, and iOS.
        </p>
        <p className="about-text">
          The service is free to use for files up to 500 MB. If you need to
          upload larger files or access additional features, consider
          subscribing to our premium plan.
        </p>
      </div>
    </div>
  );
};

export default About;
