import React from 'react';
import './Repo.css';

const Repo = ({ description, homepage, html_url: htmlUrl, name, stargazers_count: starCount }) => (
  <div className="repo">
    <dt>
      <span className="repo__name">{name}</span>
      <span className="repo__stars">⭐️ {starCount}</span>
    </dt>
    <dd>
      <span className="repo__description">{description}</span>
      <span className="repo__extraInfo">
        <span className="repo__url">
          <a href={htmlUrl} target="_blank">
            Git url
          </a>
        </span>
        {homepage && (
          <span className="repo__docs">
            <a href={homepage} target="_blank">
              Docs
            </a>
          </span>
        )}
      </span>
    </dd>
  </div>
);

export default Repo;
