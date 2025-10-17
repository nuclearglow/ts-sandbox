import { render } from './template-engine';

const rawTemplate = `
<html>
  <head>
    <title>{{ title }}</title>
  </head>
  <body>
    <h3>{{ title }}</h3>
    <p>{{ introductionText }}</p>
  </body>
</html>`;

const templateContext = {
  title: 'Welcome',
  introductionText: 'My first rendered template!'
};

document.querySelector<HTMLDivElement>('#app')!.innerHTML = render(rawTemplate, templateContext);
