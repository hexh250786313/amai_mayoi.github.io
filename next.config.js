const debug = process.env.NODE_ENV !== 'production';
const fs = require("fs");
const path = require("path");

const outTree = [];

(function findDirBuildTree(dir) {
  dir = dir || ".";
  var directory = path.join(__dirname, "./pages/post", dir);
  fs.readdirSync(directory).forEach(function (file) {
    var fullpath = path.join(directory, file);
    var stat = fs.statSync(fullpath);
    var extname = path.extname(fullpath);
    if (stat.isFile() && extname === ".md") {
      var keyname = path.join(dir, path.basename(file, extname));
      // var base_url =
      // ENV === "SC"
      // ? "https://raw.githubusercontent.com/Woshiajuana/woshiajuana.github.io/master/src/images/"
      // : "http://localhost:8080/src/images/";
      var article = {
        id: keyname,
        // src: base_url + keyname + ".jpg",
      };
      outTree.unshift(article);
      // console.log(outTree);
    } else if (stat.isDirectory()) {
      var subdir = path.join(dir, file);
      findDirBuildTree(subdir);
    }
  });
})();

module.exports = {
  // 新增前缀
  assetPrefix: !debug ? '/amai_mayoi.github.io/' : '',
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    return config
  },

  publicRuntimeConfig: {
    // Will be available on both server and client
    outTree,
  },

}
