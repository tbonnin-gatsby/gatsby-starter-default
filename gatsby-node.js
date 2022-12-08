exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: `/index.html`,
    toPath: `/`,
  });
}
