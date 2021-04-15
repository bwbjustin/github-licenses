const licenses = require("./licenses");

const nameYearLicenses = [
	"BSD2C",
	"BSD3C",
	"BSD3CC",
	"ISC",
	"MIT",
	"NCSA",
	"OFL",
	"POSTSQL",
	"ZLIB"
]

class Licenses {}

for (const license of Object.keys(licenses)) {
	Licenses[license] = (name, year = new Date().getFullYear()) => nameYearLicenses.includes(license) ? licenses[license].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[licenses];
}

module.exports = Licenses;