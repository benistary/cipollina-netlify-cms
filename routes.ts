const dev = process.env.NODE_ENV !== "production";

const routes = {
  homepage: "/",
};

export const originUrl = dev
  ? "http://localhost:3000/"
  : "https://www.cipollina.sk/";

export const externalRoutes = {
  facebook: "https://www.facebook.com/PizzaCipollina",
  instagram: "https://www.instagram.com/pizzacipollina/",
};

export default routes;
