const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "production",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "",
	},
	devtool: "none",
	module: {
		rules: [
			{
				test: /\.js$/, //Every file ended in .js will be affected by this rule
				loader: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{ loader: "style-loader" },
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
							modules: {
								localIdentName: "[name]__[local]__[hash:base65:5]",
							},
						},
					},
					{
						loader: "postcss-loader",
						options: {
							ident: "postcss",
							plugins: () => [autoprefixer()],
						},
					},
				],
			},
			{
				test: /\.(png|jp?g|gif)$/,
				loader: "url-loader?limit=8000&name=images/[name].[ext]",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + "/src/index.html",
			filename: "index.html",
			inject: "body",
		}),
	],
};
