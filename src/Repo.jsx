import React, { Component, Fragment } from 'react';
import './Repo.css';

class Repo extends Component {
  state = { data: null };

  componentDidMount = async () => {
    const { url } = this.props;

    const response = await fetch(`https://api.github.com/search/repositories?q=${url}`);
    const data = await response.json();
    const repoData = data.items.find(({ full_name: fullName }) => fullName === url);

    this.setState({ data: repoData });
  };

  render = () => {
    const { name } = this.props;
    const { data } = this.state;

    return (
      <div className="repo">
        {data && (
          <Fragment>
            <dt>
              <span className="repo__name">{name}</span>
              <span className="repo__stars" role="img" aria-label="start">
                ⭐️ {data.stargazers_count}
              </span>
            </dt>
            <dd>
              <span className="repo__description">{data.description}</span>
              <span className="repo__extraInfo">
                <span className="repo__url">
                  <a href={data.html_url} target="_blank">
                    Git url
                  </a>
                </span>
                {data.homepage && (
                  <span className="repo__docs">
                    <a href={data.homepage} target="_blank">
                      Docs
                    </a>
                  </span>
                )}
              </span>
            </dd>
          </Fragment>
        )}
      </div>
    );
  };
}

export default Repo;
