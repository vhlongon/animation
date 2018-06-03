import React, { Component } from 'react';
import './Repo.css';
import RepoInfo from './RepoInfo';
import CodeHighlighter from './CodeHighlighter';

class Repo extends Component {
  state = {
    exampleComponent: null,
  };

  componentDidMount = async () => {
    try {
      await this.loadExampleComponent();
    } catch (error) {
      console.warn(error);
    }
  };

  componentWillReceiveProps = async () => {
    try {
      await this.loadExampleComponent();
    } catch (error) {
      console.warn(error);
    }
  };

  loadExampleComponent = async () => {
    try {
      const { name } = this.props;
      const component = await import(`./examples/${name}`);

      this.setState({ exampleComponent: component.default });
    } catch (error) {
      console.warn(error);
    }
  };

  render = () => {
    const { exampleComponent: ExampleComponent } = this.state;
    return (
      <div>
        <RepoInfo {...this.props} />

        {ExampleComponent && (
          <div>
            <p>Example:</p>
            <ExampleComponent>
              <CodeHighlighter code={this.props.example} />
            </ExampleComponent>
          </div>
        )}
      </div>
    );
  };
}

export default Repo;
