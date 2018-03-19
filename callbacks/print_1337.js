getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print_1337 (html) {
  const translations = [
    ['you', 'j00'], ['er', '0r'], ['ck', 'x'], ['a', '4'], ['e', '3'], ['l', '1'], ['o', '0'], ['s', '5'], ['t', '7']
  ];
  for (let i = 0; i < translations.length; ++i) {
    while (html.indexOf (translations[i][0]) != -1)
      html = html.replace(translations[i][0], translations[i][1]);
  }
  console.log(html);
}

getHTML(requestOptions, print_1337);
