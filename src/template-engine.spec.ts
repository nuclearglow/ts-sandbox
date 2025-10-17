import { expect, test } from 'vitest';
import { render } from './template-engine';

test('should correctly render first template', () => {
  const rawTemplate = `
<html>
  <head>
    <title>{{ title }}</title>
  </head>
  <body>
    <p>{{ introductionText }}</p>
  </body>
</html>`;

  const templateContext = {
    title: 'Welcome',
    introductionText: 'My first rendered template!'
  };

  const result = `
<html>
  <head>
    <title>Welcome</title>
  </head>
  <body>
    <p>My first rendered template!</p>
  </body>
</html>`;

  expect(render(rawTemplate, templateContext)).toStrictEqual(result);
});

test('should correctly render second template', () => {
  const rawTemplate = `
<html>
  <head>
    <title>{{ departmentTitle }}</title>
  </head>
  <body>
    <p>{{ departmentText }}</p>
  </body>
</html>`;

  const templateContext = {
    departmentTitle: 'IT',
    departmentText: 'My second rendered template for IT!'
  };

  const result = `
<html>
  <head>
    <title>IT</title>
  </head>
  <body>
    <p>My second rendered template for IT!</p>
  </body>
</html>`;

  expect(render(rawTemplate, templateContext)).toStrictEqual(result);
});

test('should interpolate two template occurrences', () => {
  const rawTemplate = `
<html>
  <head>
    <title>{{ departmentTitle }}</title>
  </head>
  <body>
    <p>{{ departmentText }}</p>
    <p>{{ departmentText }}</p>
  </body>
</html>`;

  const templateContext = {
    departmentTitle: 'IT',
    departmentText: 'My third rendered template for IT!'
  };

  const result = `
<html>
  <head>
    <title>IT</title>
  </head>
  <body>
    <p>My third rendered template for IT!</p>
    <p>My third rendered template for IT!</p>
  </body>
</html>`;

  expect(render(rawTemplate, templateContext)).toStrictEqual(result);
});

test('should correctly fall back to the key', () => {
  const rawTemplate = `
<html>
  <head>
    <title>{{ departmentTitle }}</title>
  </head>
  <body>
    <p>{{ departmentInfo }}</p>
  </body>
</html>`;

  const templateContext = {
    departmentTitle: 'Department Details'
  };

  const result = `
<html>
  <head>
    <title>Department Details</title>
  </head>
  <body>
    <p>{{ departmentInfo }}</p>
  </body>
</html>`;

  expect(render(rawTemplate, templateContext)).toStrictEqual(result);
});
