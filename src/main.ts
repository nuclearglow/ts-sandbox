import { render } from './template-engine';

const rawTemplate = `<html>\n<head>\n<title>{{ title }}</title>\n</head>\n<body>\n<p>{{ introductionText }}\n</p>\n`;

const templateContext = {
  title: 'Welcome',
  introductionText: 'My first rendered template!'
};

document.querySelector<HTMLDivElement>('#app')!.innerHTML = render(rawTemplate, templateContext);
