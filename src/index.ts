import licenses = require("./licenses.json");

/**
 * The Licenses class, no constructor.
 */
class Licenses {
	/**
	 * The Academic Free License v3.0
	 * @returns {string}
	 */
	static AFL(): string {
		return licenses.AFL;
	}
	/**
	 * The Apache License 2.0
	 * @returns {string}
	 */
	static APACHE(): string {
		return licenses.APACHE;
	}
	/**
	 * The Artistic License 2.0
	 * @returns {string}
	 */
	static ART(): string {
		return licenses.ART;
	}
	/**
	 * The Boost Software License 1.0
	 * @returns {string}
	 */
	static BSL(): string {
		return licenses.BSL;
	}
	/**
	 * The BSD 2-clause "Simplified" License
	 * @param {string} name The name of the licensor
	 * @param {number} year The year the license was created
	 * @returns {string}
	 */
	static BSD2C(name: string, year?: number): string {
		return licenses.BSD2C.replace(/\[year\]/g, (year || new Date().getFullYear()).toString()).replace(/\[fullname\]/g, name);
	}
	/**
	 * The BSD 3-clause "New" or "Revised" License
	 * @param {string} name The name of the licensor
	 * @param {number} year The year the license was created
	 * @returns {string}
	 */
	static BSD3C(name: string, year?: number): string {
		return licenses.BSD3C.replace(/\[year\]/g, (year || new Date().getFullYear()).toString()).replace(/\[fullname\]/g, name);
	}
	/**
	 * The BSD 3-clause Clear License
	 * @param {string} name The name of the licensor
	 * @param {number} year The year the license was created
	 * @returns {string}
	 */
	static BSD3CC(name: string, year?: number): string {
		return licenses.BSD3CC.replace(/\[year\]/g, (year || new Date().getFullYear()).toString()).replace(/\[fullname\]/g, name);
	}
	/**
	 * The Creative Commons Zero v1.0 Universal
	 * @returns {string}
	 */
	static CC0(): string {
		return licenses.CC0;
	}
	/**
	 * The Creative Commons Attribution 4.0
	 * @returns {string}
	 */
	static CCBY(): string {
		return licenses.CCBY;
	}
	/**
	 * The Creative Commons Attribution Share Alike 4.0
	 * @returns {string}
	 */
	static CCBYSA(): string {
		return licenses.CCBYSA;
	}
	/**
	 * The Do What The F You Want To Public License
	 * @returns {string}
	 */
	static WTFPL(): string {
		return licenses.WTFPL;
	}
	/**
	 * The Educational Community License v2.0
	 * @returns {string}
	 */
	static ECL(): string {
		return licenses.ECL;
	}
	/**
	 * The Eclipse Public License 1.0
	 * @returns {string}
	 */
	static EPL1(): string {
		return licenses.EPL1;
	}
	/**
	 * The Eclipse Public License 2.0
	 * @returns {string}
	 */
	static EPL2(): string {
		return licenses.EPL2;
	}
	/**
	 * The European Union Public License 1.1
	 * @returns {string}
	 */
	static EUPL(): string {
		return licenses.EUPL;
	}
	/**
	 * The GNU Affero General Public License v3.0
	 * @returns {string}
	 */
	static AGPL(): string {
		return licenses.AGPL;
	}
	/**
	 * The GNU General Public License v2.0
	 * @returns {string}
	 */
	static GPL2(): string {
		return licenses.GPL2;
	}
	/**
	 * The GNU General Public License v3.0
	 * @returns {string}
	 */
	static GPL3(): string {
		return licenses.GPL3;
	}
	/**
	 * The GNU Lesser General Public License v2.1
	 * @returns {string}
	 */
	static LGPL21(): string {
		return licenses.LGPL21;
	}
	/**
	 * The GNU Lesser General Public License v3.0
	 * @returns {string}
	 */
	static LGPL3(): string {
		return licenses.LGPL3;
	}
	/**
	 * The ISC License
	 * @param {string} name The name of the licensor
	 * @param {number} year The year the license was created
	 * @returns {string}
	 */
	static ISC(name: string, year?: number): string {
		return licenses.ISC.replace(/\[year\]/g, (year || new Date().getFullYear()).toString()).replace(/\[fullname\]/g, name);
	}
	/**
	 * The LaTeX Project Public License v1.3c
	 * @returns {string}
	 */
	static LPPL(): string {
		return licenses.LPPL;
	}
	/**
	 * The Microsoft Public License
	 * @returns {string}
	 */
	static MSPL(): string {
		return licenses.MSPL;
	}
	/**
	 * The MIT License
	 * @param {string} name The name of the licensor
	 * @param {number} year The year the license was created
	 * @returns {string}
	 */
	static MIT(name: string, year?: number): string {
		return licenses.MIT.replace(/\[year\]/g, (year || new Date().getFullYear()).toString()).replace(/\[fullname\]/g, name);
	}
	/**
	 * The Mozilla Public License 2.0
	 * @returns {string}
	 */
	static MPL(): string {
		return licenses.MPL;
	}
	/**
	 * The Open Software License 3.0
	 * @returns {string}
	 */
	static OSL(): string {
		return licenses.OSL;
	}
	/**
	 * The PostgreSQL License
	 * @param {string} name The name of the licensor
	 * @param {number} year The year the license was created
	 * @returns {string}
	 */
	static POSTSQL(name: string, year?: number): string {
		return licenses.POSTSQL.replace(/\[year\]/g, (year || new Date().getFullYear()).toString()).replace(/\[fullname\]/g, name);
	}
	/**
	 * The SIL Open Font License 1.1
	 * @param {string} name The name of the licensor
	 * @param {number} year The year the license was created
	 * @returns {string}
	 */
	static OFL(name: string, year?: number): string {
		return licenses.OFL.replace(/\[year\]/g, (year || new Date().getFullYear()).toString()).replace(/\[fullname\]/g, name);
	}
	/**
	 * The University of Illinois/NCSA Open Source License
	 * @param {string} name The name of the licensor
	 * @param {number} year The year the license was created
	 * @returns {string}
	 */
	static NCSA(name: string, year?: number): string {
		return licenses.NCSA.replace(/\[year\]/g, (year || new Date().getFullYear()).toString()).replace(/\[fullname\]/g, name);
	}
	/**
	 * The Unlicense
	 * @returns {string}
	 */
	static UNL(): string {
		return licenses.UNL;
	}
	/**
	 * The zLib License
	 * @param {string} name The name of the licensor
	 * @param {number} year The year the license was created
	 * @returns {string}
	 */
	static ZLIB(name: string, year?: number): string {
		return licenses.ZLIB.replace(/\[year\]/g, (year || new Date().getFullYear()).toString()).replace(/\[fullname\]/g, name);
	}
}

export = Licenses;