// Requerimos el modulo de path el Html plugin que isntalamos
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// Creamos un nuevo modulo que vamos a exportar con esta configuracion
// Vamos a configurar cada unos de los elementos que necesitamos

module.exports = (env, argv) => {
	// Detectar modo de producción
	const isProduction = argv.mode === "production";

	// Debug: mostrar el modo actual
	console.log(`Webpack mode: ${argv.mode || "development"}, isProduction: ${isProduction}`);

	return {
		mode: isProduction ? "production" : "development",
		// Iniciando por la entrada del proyecto
		// Haciendo referencia al archivo principal
		entry: "./src/index.js",
		// En este output, es donde vamos a guardar los archivos resultantes cuando hagamos la configuracion
		output: {
			// La instancia resolve nos ayuda a detectar el directorio donde nos encontramos y el directorio donde vamos a guardar los archivos compilados
			path: path.resolve(__dirname, "dist"),
			// Filename nos pode un nombre al archivo compilado
			filename: "bundle.js",
			publicPath: "/"
		},
		// Este elemento resulve las extensiones que vamos a utilizar
		resolve: {
			extensions: [".js", ".jsx"],
			alias: {
				"@": path.resolve(__dirname, "src")
			}
		},
		// Modulo con las reglas necesarias
		module: {
			rules: [
				{
					// Regla principal
					// Identificacion de los archivos con una expresion regular
					test: /\.(js|jsx)$/,
					// Exclusion de carpetas
					exclude: /node_modules/,
					// Utilizamos el loader de babel instalado
					use: {
						loader: "babel-loader"
					}
				},
				{
					test: /\.svg$/,
					type: "asset/inline"
				},
				{
					// Regla para trabajar con los archivos html
					test: /\.html$/,
					use: {
						loader: "html-loader",
						options: {
							minimize: false
						}
					}
				},
				{
					test: /\.(s*)css$/,
					use: [
						"style-loader",
						{
							loader: "css-loader",
							options: {
								sourceMap: true,
								importLoaders: 2
							}
						},
						{
							loader: "sass-loader",
							options: {
								sourceMap: true
							}
						}
					]
				},
				{
					test: /\.(jpe?g|png|gif)$/i,
					type: "asset/resource"
				}
			]
		},
		devServer: {
			historyApiFallback: true,
			hot: true,
			open: true,
			port: 8080,
			client: {
				overlay: {
					errors: true,
					warnings: false
				}
			},
			static: {
				directory: path.join(__dirname, "public")
			}
		},
		// Se añaden los plugins que necesitamos
		plugins: [
			// pasamo un objeto con la configuracion que necesitamos
			new HtmlWebpackPlugin({
				//Donde esta ubicado el template que tenemos
				template: "./public/index.html",
				filename: "./index.html",
				inject: true,
				minify: false
			}),
			...(isProduction
				? [
						new MiniCssExtractPlugin({
							filename: "assets/[name].css",
							ignoreOrder: true
						})
				  ]
				: [])
		]
	};
};
