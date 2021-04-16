import licenses = require("./licenses.json");

class Licenses {
	static AFL() { return licenses.AFL; }
	static AGPL() { return licenses.AGPL; }
	static APACHE() { return licenses.APACHE; }
	static ART() { return licenses.ART; }
	static BSL() { return licenses.BSL; }
	static BSD2C(name: string, year?: number) { return licenses.BSD2C.replace(/\[year\]/g, year.toString()).replace(/\[fullname\]/g, name); }
	static BSD3C(name: string, year?: number) { return licenses.BSD3C.replace(/\[year\]/g, year.toString()).replace(/\[fullname\]/g, name); }
	static BSD3CC(name: string, year?: number) { return licenses.BSD3CC.replace(/\[year\]/g, year.toString()).replace(/\[fullname\]/g, name); }
	static CC0() { return licenses.CC0; }
	static CCBY() { return licenses.CCBY; }
	static CCBYSA() { return licenses.CCBYSA; }
	static ECL() { return licenses.ECL; }
	static EPL1() { return licenses.EPL1; }
	static EPL2() { return licenses.EPL2; }
	static EUPL() { return licenses.EUPL; }
	static GPL2() { return licenses.GPL2; }
	static GPL3() { return licenses.GPL3; }
	static ISC(name: string, year?: number) { return licenses.ISC.replace(/\[year\]/g, year.toString()).replace(/\[fullname\]/g, name); }
	static LGPL21() { return licenses.LGPL21; }
	static LGPL3() { return licenses.LGPL3; }
	static LPPL() { return licenses.LPPL; }
	static MSPL() { return licenses.MSPL; }
	static MIT(name: string, year?: number) { return licenses.MIT.replace(/\[year\]/g, year.toString()).replace(/\[fullname\]/g, name); }
	static MPL() { return licenses.MPL; }
	static NCSA(name: string, year?: number) { return licenses.NCSA.replace(/\[year\]/g, year.toString()).replace(/\[fullname\]/g, name); }
	static OFL(name: string, year?: number) { return licenses.OFL.replace(/\[year\]/g, year.toString()).replace(/\[fullname\]/g, name); }
	static OSL() { return licenses.OSL; }
	static POSTSQL(name: string, year?: number) { return licenses.POSTSQL.replace(/\[year\]/g, year.toString()).replace(/\[fullname\]/g, name); }
	static UNL() { return licenses.UNL; }
	static WTFPL() { return licenses.WTFPL; }
	static ZLIB(name: string, year?: number) { return licenses.ZLIB.replace(/\[year\]/g, year.toString()).replace(/\[fullname\]/g, name); }
}

export = Licenses;