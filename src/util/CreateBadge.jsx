export const CreateBadge = ({ lan }) => {
  let name = "";
  let color = "";
  switch (lan.toLowerCase()) {
    case "html":
      name = "HTML5";
      color = "E34F26";
      break;
    case "css":
      name = "CSS3";
      color = "1572B6";
      break;
    case "javascript":
      name = "JavaScript";
      color = "F7DF1E";
      break;
    case "scss" || "sass":
      name = "Sass";
      color = "CC6699";
      break;
    case "jquery":
      name = "jQuery";
      color = "0769AD";
      break;
    case "typescript":
      name = "TypeScript";
      color = "3178C6";
      break;
    case "react":
      name = "React";
      color = "61DAFB";
      break;
    case "node.js":
      name = "node.js";
      color = "339933";
      break;
    case "express":
      name = "express";
      color = "000000";
      break;
  }

  return (
    <img
      src={`https://img.shields.io/badge/${name}-${color}?style=flat-square&logo=${name}&logoColor=white`}
    />
  );
};
