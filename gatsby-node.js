exports.createPages = async ({ actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({
    fromPath: `/index.html`,
    toPath: `/`,
  });
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  });
}
