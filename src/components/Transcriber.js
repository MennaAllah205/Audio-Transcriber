// Transcriber.js
import React, { useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import ClipLoader from "react-spinners/ClipLoader";
import "../Css/Style.css";
const LANGUAGE_CODES = {
  EN: "en",
  AR: "ar",
  ES: "es",
  FR: "fr",
};

const Transcriber = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [transcription, setTranscription] = useState("");
  const [loading, setLoading] = useState(false);
  const [languageCode, setLanguageCode] = useState(LANGUAGE_CODES.EN);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "audio/*",
    onDrop: (acceptedFiles) => {
      setAudioFile(acceptedFiles[0]);
      console.log("Selected file:", acceptedFiles[0]);
    },
  });

  const handleLanguageChange = (e) => {
    setLanguageCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Convert button clicked");

    if (!audioFile) {
      console.error("No audio file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", audioFile);

    setLoading(true);

    try {
      const uploadResponse = await axios.post(
        "https://api.assemblyai.com/v2/upload",
        formData,
        {
          headers: {
            authorization: "7c7fb85ae4d94653b07f75f7758e3dc6",
          },
        }
      );

      const audioUrl = uploadResponse.data.upload_url;
      console.log("Uploaded audio URL:", audioUrl);

      const params = {
        audio_url: audioUrl,
        language_code: languageCode,
        speech_model: "nano",
      };

      if (languageCode !== LANGUAGE_CODES.AR) {
        params.speaker_labels = true;
      }

      // Request transcription
      const transcriptionResponse = await axios.post(
        "https://api.assemblyai.com/v2/transcript",
        params,
        {
          headers: {
            authorization: "7c7fb85ae4d94653b07f75f7758e3dc6",
          },
        }
      );

      const transcriptId = transcriptionResponse.data.id;
      console.log("Transcript ID:", transcriptId);

      let transcriptResult = null;
      while (!transcriptResult || transcriptResult.status !== "completed") {
        const resultResponse = await axios.get(
          `https://api.assemblyai.com/v2/transcript/${transcriptId}`, // Correct template literal usage
          {
            headers: {
              authorization: "7c7fb85ae4d94653b07f75f7758e3dc6",
            },
          }
        );
        transcriptResult = resultResponse.data;
        console.log("Transcription Status:", transcriptResult.status);
      }

      console.log("Final Transcription:", transcriptResult.text);
      setTranscription(transcriptResult.text);
    } catch (error) {
      console.error(
        "Error during transcription:",
        error.response ? error.response.data : error
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-4">
      <h1 className="text-center">Audio to Text Converter</h1>
      <form onSubmit={handleSubmit} className="text-center">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p className="dropzone-text">
            Drag & drop an audio file here, or click to select one
          </p>
        </div>

        <div className="my-3">
          <label htmlFor="language-select">Select Language:</label>
          <select
            id="language-select"
            value={languageCode}
            onChange={handleLanguageChange}
            className="form-select w-50 mx-auto"
          >
            <option value={LANGUAGE_CODES.EN}>English</option>
            <option value={LANGUAGE_CODES.AR}>Arabic</option>
            <option value={LANGUAGE_CODES.ES}>Spanish</option>
            <option value={LANGUAGE_CODES.FR}>French</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Convert
        </button>
      </form>

      {loading && (
        <ClipLoader
          loading={loading}
          size={50}
          className="d-block mx-auto my-4"
        />
      )}
      {transcription && (
        <p className="transcription">Transcription: {transcription}</p>
      )}
    </div>
  );
};

export default Transcriber;
