import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

declare const process: {
  env: Record<string, string | undefined>;
};

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserPage = repositoryName?.toLowerCase() === "oussamabek.github.io";
const githubPagesBase =
  process.env.GITHUB_ACTIONS === "true" && repositoryName && !isUserPage ? `/${repositoryName}/` : "/";

export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? githubPagesBase,
  plugins: [react()],
});
