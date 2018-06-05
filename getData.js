const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const repositories = [
  { name: 'ReactMotion', url: 'chenglou/react-motion' },
  { name: 'ReactTransitionGroup', url: 'reactjs/react-transition-group' },
  { name: 'ReactMove', url: 'react-tools/react-move' },
  { name: 'ReactSpring', url: 'drcmda/react-spring' },
  { name: 'Pose', url: 'Popmotion/popmotion' },
  { name: 'ReactAnime', url: 'hyperfuse/react-anime' },
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

const getFileExample = file =>
  fs.readFileSync(file, 'utf8', (err, data) => {
    if (err) throw err;
    return data;
  });

const getData = async repos => {
  try {
    const dirPath = path.join(__dirname, 'src');
    const reposData = await Promise.all(
      repos.map(async ({ name, url }) => ({
        name,
        example: getFileExample(`${dirPath}/examples/${name}.jsx`),
        data: await getRepoData(url),
      }))
    );

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }

    fs.writeFileSync(`${dirPath}/data.json`, buildDataFile(reposData), 'utf8');
  } catch (e) {
    console.log('error fetching repos data ', e);
  }
};

getData(repositories);
