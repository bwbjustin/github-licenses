import licenses = require("./licenses.json");

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
	public static AFL(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static APACHE(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static ART(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static BSL(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static BSD2C(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static BSD3C(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static BSD3CC(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static CC0(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static CCBY(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static CCBYSA(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static WTFPL(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static ECL(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static EPL1(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static EPL2(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static EUPL(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static AGPL(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static GPL2(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static GPL3(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static LGPL21(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static LGPL3(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static ISC(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static LPPL(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static MSPL(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static MIT(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static MPL(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static OSL(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static POSTSQL(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static OFL(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static NCSA(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static UNL(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
	public static ZLIB(name: string, year?: number): string { return nameYearLicenses.includes(arguments.callee.name) ? licenses[arguments.callee.name].replace(/\[year\]/g, year).replace(/\[fullname\]/g, name) : licenses[arguments.callee.name]; }
}

export = Licenses;