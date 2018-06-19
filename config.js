/*
 * Compiling config for KVN engine by Kirinnee97
 * Please refer any questions, bugs and copyright issue to https://bigbulb.studio or email me at kirinnee97@gmail.com
 */
module.exports ={
	seperate:false,
	initFile: "init.js",
	configFile: "config.js",
	name: "Winery",
	fileName: "winery",
	patch:true,
	patchDir: "patch/",
	//if you are going want to use reposnsive images, enable image compression too
	compressImage: false,
	//whether to append images!
	appendImage: true,
	//the two below should not be changed unless you put the KVN script in some awkward place
	//if you use customDir in your workspace code (.setCustomDirectory),
	//then the images in the folder below will be optimized and resized based on this config
	//and your workspace config
	charImgDir: "kvn/images/char",
	bkgdDir:"kvn/images/bkgd",
	//the higher you put this, the faster the program will finish. But if you computersucks,
	//it might explode if you put this too high.
	concurrentThreads: 20
}
