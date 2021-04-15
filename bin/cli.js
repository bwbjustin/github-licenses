#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const Licenses = require("..");

const args = require("arg")({
	"--help": Boolean,
	"--name": String,
	"--year": Number,
	"-h": "--help",
	"-n": "--name",
	"-y": "--year"
});

function log(...data) {
	console.log(data.join("\n"));
}

if (args["--help"] || !process.argv[2]) log(
	"Format: licenses (license) (option(s))",
	"",
	"Options:",
	"--name/-n: The name of the licensor",
	"--year/-y?: The year the license was created",
	"",
	"List of Licenses:",
	Licenses.List.join("\n")
);
else if (Object.keys(Licenses).splice(1, 31).some(x => new RegExp(args._[0], "i").test(x))) {
	if (!args["--name"]) return console.log("Please specify a name.");
	fs.writeFileSync(path.resolve(process.cwd(), "LICENSE"), Licenses[args._[0]](args["--name"], args["--year"] || new Date().getFullYear()));
	console.log(`License written to ${path.resolve(process.cwd(), "LICENSE")}.`)
}