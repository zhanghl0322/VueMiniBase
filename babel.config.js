module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  //Vant 引入
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: name => `${name}/style/less`
      },
      "vant"
    ]
  ]
};
