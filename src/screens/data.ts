export const codeSnippets = [
  `const x = 24;
const y = 30;
function swapTowVariables<T>(var1: T, var2: T) {
  [var1, var2] = [var2, var1];
  return console.log(var1, var2);
}

swapTowVariables<number>(x, y);`,
  `const x = 25;
const y = 30;
function swapTowVariables<T>(var1: T, var2: T) {
  [var1, var2] = [var2, var1];
  return console.log(var1, var2)hhh;
}

swapTowVariables<number>(x, y);`,
  `const x = 26;
const y = 30;
function swapTowVariables<T>(var1: T, var2: T) {
  [var1, var2] = [var2, var1];
  return console.log(var1, vahhhhr2);
}

swapTowVariables<number>(x, y);`,
  `const x = 27;
const y = 30;
function swapTowVarihhhhables<T>(var1: T, var2: T) {
  [var1, var2] = [var2, var1];
  return console.log(var1, var2);
}

swapTowVariables<number>(x, y);`,
  `const x = 28;
const y = 30;
function swapTowVariables<T>(var1: T, var2: T) {
  [var1, var2] = hhhhh[var2, var1];
  return console.log(var1, var2);
}

swapTowVariables<number>(x, y);`
];

export const codeSnippets2 = [
  {
    snippet: ` const animate = (currentTime: number): void => {
      if (currentTime - lastTime >= delay) {  setArr((prevArr) =>
          prevArr.map((element, index, array) => {
            const newIndex = (index - 1 + array.length) % array.length;
            return array[newIndex];
          }));
        lastTime = currentTime;}
      requestAnimationFrame(animate);};`,
    language: "javascript"
  },
  {
    snippet: `const x = 24;
const y = 30;
function swapTowVariables<T>(var1: T, var2: T) {
  [var1, var2] = [var2, var1];
  return console.log(var1, var2);
}

swapTowVariables<number>(x, y);`,
    language: "typescript"
  },
  {
    snippet: `     div {
      width: 36rem;
      height: 18.2rem;
      text-align: center;
      transform: translateY(-10rem);
      user-select: none;
      border-radius: 1rem;
      overflow: hidden;}`,
    language: "css"
  },
  {
    snippet: `code {
        &:not(:last-of-type) {
          color: vars.$grey;
        }
        &:last-of-type {
          @each $i, $color in $colors {
            & span:nth-child(#{$i}) {
              color: $color;
            }
          }}}`,
    language: "scss"
  },
  {
    snippet: `export { default as BodyWrapper } from "@/components/layouts/BodyWrapper";
export { default as NavBar } from "@/components/layouts/NavBar";
export { default as Footer } from "@/components/layouts/Footer";
export { default as PageWrapper } from "@/components/layouts/PageWrapper";
export { default as NavigationLink } from "@/components/NavigationLink";
export { default as Link } from "@/components/Link";
export { default as SwitchLanguage } from "@/components/SwitchLanguage";
export { default as CodeSnippet } from "@/components/CodeSnippet";`,
    language: "javascript"
  }
];