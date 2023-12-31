/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");

const sharp = require("sharp");
// const directory = './../../public/login';
const directory = "/public/assets/images/projects";
// const directory = "public/defaults";
// const directory = 'public/login/community';

// fs.readdirSync(directory).forEach(file => {
//   console.log(file);
//   file === "phone.png" && sharp(`${directory}/${file}`)
//     // .resize(1920, 1080) // width, height
//     .toFile(`${directory}/phone.webp`);
//   });

export const fax = () =>
  fs.readdirSync(directory).forEach((file) => {
    sharp(`${directory}/${file}`)
      .resize(400, 200, {
        fit: "contain",
        position: "top"
      }) // width, height
      .toFile(`${directory}/${file.slice(0, file.length - 4)}-400x200.webp`);
  });

fax();

