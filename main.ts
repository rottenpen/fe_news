import blog from "https://deno.land/x/blog@0.3.3/blog.tsx";

blog({
  title: "FE News 周刊",
  author: "Rottenpen",
  avatar: "./goal.png",
  avatarClass: "full",
  links: [
    { title: "Email", url: "mailto:rottenpen@outlook.com" },
    { title: "GitHub", url: "https://github.com/rottenpen" },
  ],
  background: "#fff",
  middlewares: [
    // ga("UA-91675022-1"),
    // redirects({
    //   "iocp-links.html": "iocp_links",
    //   "rant.html": "rant",
    // }),
  ],
});
