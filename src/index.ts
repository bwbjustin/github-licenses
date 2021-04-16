import licenses = require("./licenses.json");

class Licenses {
	static AFL(): string { return licenses.AFL; }
	static AGPL(): string { return licenses.AGPL; }
	static APACHE(): string { return licenses.APACHE; }
	static ART(): string { return licenses.ART; }
	static BSL(): string { return licenses.BSL; }
	static BSD2C(name: string, year?: number): string { return licenses.BSD2C.replace(/\[year\]/g, year.toString()).replace(/\[fullname\]/g, name); }
	static BSD3C(name: string, year?: number): string { return licenses.BSD3C.replace(/\[year\]/g, year.toString()).replace(/\[fullname\]/g, name); }
	static BSD3CC(name: string, year?: number): string { return licenses.BSD3CC.replace(/\[year\]/g, year.toString()).replace(/\[fullname\]/g, name); }
	static CC0(): string { return licenses.CC0; }
	static CCBY(): string { return licenses.CCBY; }
	static CCBYSA(): string { return licenses.CCBYSA; }
	static ECL(): string { return licenses.ECL; }
	static EPL1(): string { return licenses.EPL1; }
	static EPL2(): string { return licenses.EPL2; }
	static EUPL(): string { return licenses.EUPL; }
	static GPL2(): string { return licenses.GPL2; }
	static GPL3(): string { return licenses.GPL3; }
	static ISC(name: string, year?: number): string { return licenses.ISC.replace(/\[year\]/g, year.toString()).replace(/\[fullname\]/g, name); }
	static LGPL21(): string { return licenses.LGPL21; }
	static LGPL3(): string { return licenses.LGPL3; }
	static LPPL(): string { return licenses.LPPL; }
	static MSPL(): string { return licenses.MSPL; }
	static MIT(name: string, year?: number): string { return licenses.MIT.replace(/\[year\]/g, year.toString()).replace(/\[fullname\]/g, name); }
	static MPL(): string { return licenses.MPL; }
	static NCSA(name: string, year?: number): string { return licenses.NCSA.replace(/\[year\]/g, year.toString()).replace(/\[fullname\]/g, name); }
	static OFL(name: string, year?: number): string { return licenses.OFL.replace(/\[year\]/g, year.toString()).replace(/\[fullname\]/g, name); }
	static OSL(): string { return licenses.OSL; }
	static POSTSQL(name: string, year?: number): string { return licenses.POSTSQL.replace(/\[year\]/g, year.toString()).replace(/\[fullname\]/g, name); }
	static UNL(name: string, year?: number): string { return licenses.UNL; }
	static WTFPL(): string { return licenses.WTFPL; }
	static ZLIB(name: string, year?: number): string { return licenses.ZLIB.replace(/\[year\]/g, year.toString()).replace(/\[fullname\]/g, name); }
}

export = Licenses;