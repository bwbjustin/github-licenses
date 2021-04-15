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

class Licenses {
	static List = [
		"Academic Free License v3.0",
		"Apache license 2.0",
		"Artistic license 2.0",
		"Boost Software License 1.0",
		"BSD 2-clause \"Simplified\" license",
		"BSD 3-clause \"New\" or \"Revised\" license",
		"BSD 3-clause Clear license",
		"Creative Commons Zero v1.0 Universal",
		"Creative Commons Attribution 4.0",
		"Creative Commons Attribution Share Alike 4.0",
		"Do What The Fuck You Want To Public License",
		"Educational Community License v2.0",
		"Eclipse Public License 1.0",
		"Eclipse Public License 2.0",
		"European Union Public License 1.1",
		"GNU Affero General Public License v3.0",
		"GNU General Public License v2.0",
		"GNU General Public License v3.0",
		"GNU Lesser General Public License v2.1",
		"GNU Lesser General Public License v3.0",
		"ISC",
		"LaTeX Project Public License v1.3c",
		"Microsoft Public License",
		"MIT",
		"Mozilla Public License 2.0",
		"Open Software License 3.0",
		"PostgreSQL License",
		"SIL Open Font License 1.1",
		"University of Illinois/NCSA Open Source License",
		"The Unlicense",
		"zLib License",
	]
}

for (const license of Object.keys(licenses)) {
	Licenses[license] = (name, year = new Date().getFullYear()) => nameYearLicenses.includes(license) ? licenses[license].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[licenses];
}

module.exports = Licenses;