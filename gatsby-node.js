exports.onCreateWebpackConfig = ({
    actions
  }) => {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.(glb|gltf|mp4)$/i,
            use: {
              loader: "url-loader",
              options: {
                limit: 8192,
              },
            }
          },
        ]
      }
    })
  }