import React, { useState } from "react";
import "../Css/HowToUse.css";

const steps = [
  {
    title: "Step 1: Upload Audios Files",
    content: `Upload your audio files here! 
    Use the "select one" button to add files from your computer or phone. 
    You can also upload directly from Google Drive, Google Photos, or Dropbox. 
    The tool allows you to combine various audio formats seamlessly.`,
  },
  {
    title: "Step 2: Convert Your Files",
    content: `Once your files are uploaded, select the audio file you want to convert. 
  and when you're ready, 
    click the 'Convert' button to Convert them into Text.`,
  },
  {
    title: "Step 3:  Your Converted File",
    content: `After the Converting process is complete, you'll be able to Take and Copy 
    your Text. you can also Convert same audio into many languages !`,
  },
];

const HowToUse = () => {
  const [openStep, setOpenStep] = useState(null);

  const toggleStep = (step) => {
    setOpenStep(openStep === step ? null : step);
  };

  return (
    <div className="how-to-use-container">
      <h2 className="text-center">How to Use Our Audio Transcriber</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <h3 className="step-title" onClick={() => toggleStep(index)}>
              {step.title}
            </h3>
            {openStep === index && (
              <p className="step-content">{step.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToUse;
