import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  html {
    overflow-y: scroll;
    font-size: 10px;
  }

  body {
    margin: 0;
    background-color: #fff;
    color: #222;
  }

  body,
  button,
  input,
  select,
  td,
  textarea,
  th {
    font-family: 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input {
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: inherit;
  }

  abbr[title] {
    cursor: help;
    text-decoration: none;
  }

  ol,
  ul {
    list-style: none;
  }

  li {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  img {
    width: 100%;
  }

  // focus 코드 추가
  *:focus:not(focus-visible) {
    outline: none;
  }

`;
