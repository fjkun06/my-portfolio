export const codeSnippets = [
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
            }`,
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

export const sampleCode = `// sample JavaScript comments
// you can also see it on my Github page
const  githubLink  =  “https://github.com/example/url”`;

export const logoData = [
  {
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    title: "JavaScript"
  },
  {
    url: "https://www.adobe.com/products/illustrator.html",
    title: "Adobe Illustrator"
  },
  {
    url: "https://www.w3.org/Style/CSS/",
    title: "CSS3"
  },
  {
    url: "https://expressjs.com/",
    title: "Express.js"
  },
  {
    url: "https://git-scm.com/",
    title: "Git"
  },
  {
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    title: "HTML5"
  },
  {
    url: "https://nodejs.org/",
    title: "Node.js"
  },
  {
    url: "https://reactjs.org/",
    title: "React.js"
  },
  {
    url: "https://tailwindcss.com/",
    title: "Tailwind CSS"
  },
  {
    url: "https://sass-lang.com/",
    title: "SASS (SCSS)"
  },
  {
    url: "https://www.typescriptlang.org/",
    title: "TypeScript"
  },
  {
    url: "https://jestjs.io/",
    title: "Jest"
  },
  {
    url: "https://mui.com/",
    title: "Material UI"
  },
  {
    url: "https://www.mongodb.com/",
    title: "Mongo DB"
  },
  {
    url: "https://nextjs.org/",
    title: "Next.js"
  },
  {
    url: "https://storybook.js.org/",
    title: "Storybook"
  },
  {
    url: "https://redux.js.org/",
    title: "Redux"
  }
];

//desc1 twice to avoid errors in translation...but it is replaced immediately
export const summaryKeys = ["question", "opener", "desc1", "desc1", "contact"];
