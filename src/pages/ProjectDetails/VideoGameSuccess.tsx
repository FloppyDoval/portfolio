import React from "react";
import "../../styles/ProjectDetails.css";
import PosterImage from "../../assets/images/video_game_success_poster.png"; // replace with your actual file

const VideoGameSuccess: React.FC = () => {
  return (
    <div className="project-details-container">
      <header className="project-header">
        <h1>Video Game Success Predictor</h1>
        <div className="project-tags">
          <span className="tag4">Florencia Doval</span>
          <span className="tag2">Serena West</span>
          <span className="tag3">Brian Delgado</span>
        </div>
      </header>

      <section className="project-overview">
        <h2>Overview 🎮</h2>
        <p>
          The goal of this project was to analyze and predict what makes a video game successful using machine learning models.
          By studying user ratings and metadata from multiple sources, we aimed to uncover trends in consumer behavior and the socio-economic factors
          that shape the gaming industry.
        </p>
      </section>

      <section className="project-details">
        <h2>Data Collection 🧩</h2>
        <p>
          We collected data from IGDB, MobyGames, and GiantBomb, creating a unified dataset of over 1000 video games. Using the game name as the
          primary key, we merged data on scores, genres, developer info, release dates, and reviews. Our features captured both game-specific and
          user behavior characteristics.
        </p>
        <p>
          We used three regression models — <b>Linear, Ridge, and Random Forest</b> — to predict game success (measured by review scores). Random Forest
          performed best with an R² of 0.302, meaning it explained 30.2% of the variance in game ratings.
        </p>
      </section>

      <section className="project-details">
        <h2>Hypothesis Testing 🔍</h2>
        <ul>
          <li>
            <b>Hypothesis 1:</b> Multiplayer vs. Single Player ratings — No significant difference found (p = 0.460).
          </li>
          <li>
            <b>Hypothesis 2:</b> Shooter games vs. Other genres — Also no significant difference (p = 0.764).
          </li>
          <li>
            <b>Hypothesis 3:</b> High vs. low review count games — Strong significant difference found (p ≈ 1.12e-10).
          </li>
        </ul>
        <p>
          Results indicate that while game type or genre may not influence score, games with more reviews tend to have higher ratings, likely due to positive feedback bias.
        </p>
      </section>

      <section className="project-details">
        <h2>Model Results 🧠</h2>
        <p>We compared Linear Regression, Ridge Regression, and Random Forest models:</p>
        <ul>
          <li><b>Random Forest</b> had the best performance:</li>
          <ul>
            <li>MAE: 0.115</li>
            <li>RMSE: 0.150</li>
            <li>R² Score: 0.302</li>
          </ul>
          <li>
            Linear models struggled with our non-linear dataset, while Random Forest captured more complexity and interaction between features.
          </li>
        </ul>
      </section>

      <section className="project-details">
        <h2>Limitations & Next Steps ⚠️</h2>
        <p>
          While our models achieved moderate accuracy, they struggle to generalize to unfamiliar datasets. Incorporating additional features such as
          revenue, user engagement, or social media activity could improve performance. Hyperparameter tuning and more advanced models (like gradient boosting or transformers) may also yield better results.
        </p>
      </section>

      <section className="project-details">
        <h2>Reflection 🎯</h2>
        <p>
          This project taught us how to collect, clean, and merge data from multiple real-world APIs. It also emphasized the importance of exploratory
          data analysis, model selection, and proper validation in machine learning. While our initial hypotheses about genre and game mode were
          disproven, we uncovered valuable insights about the impact of user engagement on perceived success.
        </p>
      </section>

      <section className="project-details">
        <h2>Project Poster 📌</h2>
        <img src={PosterImage} alt="Video Game Success Poster"/>
      </section>
    </div>
  );
};

export default VideoGameSuccess;
