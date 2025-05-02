import React from "react";
import "../../styles/ProjectDetails.css";
import HeatmapImage from "../../assets/images/heatmap.jpg";
import LossCurve from "../../assets/images/loss-curve.jpg";
import PosterImage from "../../assets/images/poster.svg";

const Transformer: React.FC = () => {
  return (
    <div className="project-details-container">
      <header className="project-header">
        <h1>DeepL German to English Translator</h1>
      </header>
      <section className="project-overview">
        <h2>Team 👩🏻‍💻</h2>
        <div className="project-tags">
          <span className="tag4">Florencia Doval</span>
          <span className="tag2">Nina Py</span>
          <span className="tag3">Fabio Villatoro</span>
        </div>
      </section>

      <section className="project-overview">
        <h2>Overview 🧠</h2>
        <p>
          A reimplementation of the <i>Attention Is All You Need</i> paper using PyTorch and the Multi30k dataset. Our project replicates and simplifies the Transformer architecture and integrates Whisper AI for end-to-end German → English speech translation.
        </p>
        <h2>Project Poster</h2>
        <img src={PosterImage} alt="Project Poster" />
        <p>
          Final BLEU Score: <b>33.30</b> 🎯 <br />
          Training Time: ~45 minutes (A100 GPU on Colab)
        </p>
      </section>

      <section className="project-overview">
        <h2>Running the Project 🚀</h2>
        <ul>
          <li><code>pip install -r requirements.txt</code></li>
          <li><code>python app.py</code> – for the demo UI</li>
          <li><b>Note:</b> Download the <a href="https://drive.google.com/drive/folders/1NlJ4XYmepTn1YKZCwr_-7Dg_suPsQ1Hl?usp=sharing" target="_blank">model files</a> and place them in a folder called <code>model/</code> in the root directory.</li>
        </ul>
        <p>
          To run <b>speech-to-text translation</b>: <code>python speech_translate.py</code>
        </p>
        <p>
          Try it out on Colab 👉{" "}
          <a href="https://colab.research.google.com/drive/1jkWL-MpFuMrmhAlenytciUatqugA5Oah?usp=sharing" target="_blank">
            Google Colab Notebook
          </a>
        </p>
      </section>

      <section className="project-details">
        <h2>Introduction 📚</h2>
        <p>
          We implemented a scaled-down version of the Transformer model described in the original 2017 paper using the Multi30k dataset. The dataset contains image captions in English and German. Our model is trained for sequence-to-sequence translation and augmented with Whisper for speech input and TTS for audio output.
        </p>
      </section>

      <section className="project-details-text">
        <h2>Methodology 🔧</h2>
        <p>
          We built the Transformer architecture using PyTorch from scratch, adjusting hyperparameters and model size to suit the small Multi30k dataset. Our pipeline includes:
        </p>
        <ul>
          <li>Custom positional encodings and attention modules</li>
          <li>Scaled-down encoder-decoder stacks</li>
          <li>Training on Google Colab with A100 GPU</li>
          <li>Integration with Whisper for audio input</li>
        </ul>
        <p>
          We also transitioned from script-based development to Google Colab notebooks to streamline experimentation with GPUs and avoid repeated reuploads.
        </p>
      </section>

      <section className="project-details-text">
        <h2>Results 📈</h2>
        <p>
          After adapting the architecture to our dataset size, we saw a dramatic improvement in training dynamics. Our final model achieved:
        </p>
        <ul>
          <li><b>Training Loss:</b> 1.8495</li>
          <li><b>Validation Loss:</b> 2.2612</li>
          <li><b>BLEU Score:</b> 33.30</li>
        </ul>
        <img src={LossCurve} alt="Loss Curve" className="project-image" />
        <img src={HeatmapImage} alt="Attention Heatmap" className="project-image" />
      </section>

      <section className="project-details-text">
        <h2>Challenges 🧩</h2>
        <ul>
          <li>Implementing multi-head attention correctly and efficiently</li>
          <li>Choosing appropriate tokenization + hyperparameters for a small dataset</li>
          <li>Slow debugging cycle due to ~45 min training time on Colab</li>
          <li>Switching from Python files to notebook cells for better GPU access</li>
        </ul>
      </section>

      <section className="project-details-text">
        <h2>Reflection 💭</h2>
        <p>
          We successfully exceeded our stretch goal by achieving a BLEU score above 30 and building an audio-to-audio translation demo. This project helped us understand the implementation and engineering tradeoffs behind Transformers, and highlighted the importance of model scaling and thoughtful experimentation.
        </p>
        <p>
          If we did it again, we would choose a more general dataset, design a smaller model from the start, and save intermediate checkpoints more often.
        </p>
      </section>
    </div>
  );
};

export default Transformer;
