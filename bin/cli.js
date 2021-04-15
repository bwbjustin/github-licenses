#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const Licenses = require("..");

const args = require("arg")({
	"--output": String,
	"--name": String,
	"--year": Number,
	"-o": "--output",
	"-n": "--name",
	"-y": "--year"
});

function log(...data) {
	console.log(data.join("\n"));
}

if (!process.argv[2]) log(
	"Format: licenses (license) (option(s))",
	"",
	"Options:",
	"--output/-n?: The output of the license",
	"--name/-n: The name of the licensor",
	"--year/-y?: The year the license was created",
	"",
	"List of Licenses:",
	Licenses.List.join("\n")
);
else if (Object.keys(Licenses).splice(1, 31).some(x => new RegExp(args._[0], "i").test(x))) {
	if (!args["--name"]) return log("Please specify a name.");
	try {
		fs.writeFileSync(args["--output"] || path.resolve(process.cwd(), "LICENSE"), Licenses[args._[0]](args["--name"], args["--year"] || new Date().getFullYear()));
		log(`License written to ${args["--output"] || path.resolve(process.cwd(), "LICENSE")}.`);
	} catch (error) {
		if (error.errno == -4068) log("This is the name of a directory! Please try again.");
		else log("An error occurred when writing the license! Please try again.");
	}
} else if (!Object.keys(Licenses).splice(1, 31).some(x => new RegExp(args._[0], "i").test(x))) log("Please specify a valid license name.");