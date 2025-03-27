import { expect, test } from 'vitest';
import { render } from './template-engine';

test('should correctly render first template', () => {
  const rawTemplate = `<html>\n<head>\n<title>{{ title }}</title>\n</head>\n<body>\n<p>{{ introductionText }}\n</p>\n`;

  const templateContext = {
    title: 'Welcome',
    introductionText: 'My first rendered template!'
  };

  const result = `<html>\n<head>\n<title>Welcome</title>\n</head>\n<body>\n<p>My first rendered template!\n</p>\n`;

  expect(render(rawTemplate, templateContext)).toStrictEqual(result);
});

test('should correctly render second template', () => {
  const rawTemplate = `<html>\n<head>\n<title>{{ departmentTitle }}</title>\n</head>\n<body>\n<p>{{ departmentText }}\n</p>\n`;

  const templateContext = {
    departmentTitle: 'IT',
    departmentText: 'My first rendered template for IT!'
  };

  const result = `<html>\n<head>\n<title>IT</title>\n</head>\n<body>\n<p>My first rendered template for IT!\n</p>\n`;

  expect(render(rawTemplate, templateContext)).toStrictEqual(result);
});
