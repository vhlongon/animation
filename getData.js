const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const repositories = [
  { name: 'Velocity-react', url: 'google-fabric/velocity-react' },
  { name: 'GSAP', url: 'azazdeaz/react-gsap-enhancer' },
  { name: 'React motion', url: 'chenglou/react-motion' },
  { name: 'React Transition-group ', url: 'reactjs/react-transition-group' },
  { name: 'React Move', url: 'react-tools/react-move' },
  { name: 'React Spring', url: 'drcmda/react-spring' },
  { name: 'Popmotion', url: 'Popmotion/popmotion' },
  { name: 'React-anime', url: 'hyperfuse/react-anime' },
];

const getRepoData = async url => {
  try {
    const response = await fetch(`https://api.github.com/search/repositories?q=${url}`);
    const data = await response.json();
    return data.items.find(({ full_name: fullName }) => fullName === url);
  } catch (error) {
    console.log('error fetching data', error);
    return error;
  }
};

const buildDataFile = data => `${JSON.stringify(data)}`;

const getData = async repos => {
  try {
    const dirPath = path.join(__dirname, 'src');
    const reposData = await Promise.all(repos.map(async ({ url }) => getRepoData(url)));

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }

    fs.writeFileSync(`${dirPath}/data.json`, buildDataFile(reposData), 'utf8');
  } catch (e) {
    console.log('error fetching repos data ', e);
  }
};

getData(repositories);
