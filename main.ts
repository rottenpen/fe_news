import blog, { ga } from "https://deno.land/x/blog@0.4.2/blog.tsx";

blog({
  title: "FE News 周刊",
  author: "Rottenpen",
  avatar: "./goal.png",
  avatarClass: "full",
  links: [
    { title: "Email", url: "mailto:rottenpen@outlook.com" },
    { title: "GitHub", url: "https://github.com/rottenpen" },
  ],
  favicon: "./goal.png",
  middlewares: [
    ga("G-TJWE3KPNCT")
  ],
});
