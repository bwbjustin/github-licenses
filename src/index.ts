import licenses = require("./licenses.json");

/**
 * The Licenses class, that has all the licenses included in GitHub.
 */
class Licenses {
	/**
	 * The Academic Free License v3.0
	 * @type {string}
	 */
	AFL: string;
	/**
	 * The Apache License 2.0
	 * @type {string}
	 */
	APACHE: string;
	/**
	 * The Artistic License 2.0
	 * @type {string}
	 */
	ART: string;
	/**
	 * The Boost Software License 1.0
	 * @type {string}
	 */
	BSL: string;
	/**
	 * The BSD 2-clause "Simplified" License
	 * @type {string}
	 */
	BSD2C: string;
	/**
	 * The BSD 3-clause "New" or "Revised" License
	 * @type {string}
	 */
	BSD3C: string;
	/**
	 * The BSD 3-clause Clear License
	 * @type {string}
	 */
	BSD3CC: string;
	/**
	 * The Creative Commons Zero v1.0 Universal
	 * @type {string}
	 */
	CC0: string;
	/**
	 * The Creative Commons Attribution 4.0
	 * @type {string}
	 */
	CCBY: string;
	/**
	 * The Creative Commons Attribution Share Alike 4.0
	 * @type {string}
	 */
	CCBYSA: string;
	/**
	 * The Do What The F You Want To Public License
	 * @type {string}
	 */
	WTFPL: string;
	/**
	 * The Educational Community License v2.0
	 * @type {string}
	 */
	ECL: string;
	/**
	 * The Eclipse Public License 1.0
	 * @type {string}
	 */
	EPL1: string;
	/**
	 * The Eclipse Public License 2.0
	 * @type {string}
	 */
	EPL2: string;
	/**
	 * The European Union Public License 1.1
	 * @type {string}
	 */
	EUPL: string;
	/**
	 * The GNU Affero General Public License v3.0
	 * @type {string}
	 */
	AGPL: string;
	/**
	 * The GNU General Public License v2.0
	 * @type {string}
	 */
	GPL2: string;
	/**
	 * The GNU General Public License v3.0
	 * @type {string}
	 */
	GPL3: string;
	/**
	 * The GNU Lesser General Public License v2.1
	 * @type {string}
	 */
	LGPL21: string;
	/**
	 * The GNU Lesser General Public License v3.0
	 * @type {string}
	 */
	LGPL3: string;
	/**
	 * The ISC License
	 * @type {string}
	 */
	ISC: string;
	/**
	 * The LaTeX Project Public License v1.3c
	 * @type {string}
	 */
	LPPL: string;
	/**
	 * The Microsoft Public License
	 * @type {string}
	 */
	MSPL: string;
	/**
	 * The MIT License
	 * @type {string}
	 */
	MIT: string;
	/**
	 * The Mozilla Public License 2.0
	 * @type {string}
	 */
	MPL: string;
	/**
	 * The Open Software License 3.0
	 * @type {string}
	 */
	OSL: string;
	/**
	 * The PostgreSQL License
	 * @type {string}
	 */
	POSTSQL: string;
	/**
	 * The SIL Open Font License 1.1
	 * @type {string}
	 */
	OFL: string;
	/**
	 * The University of Illinois/NCSA Open Source License
	 * @type {string}
	 */
	NCSA: string;
	/**
	 * The Unlicense
	 * @type {string}
	 */
	UNL: string;
	/**
	 * The zLib License
	 * @type {string}
	 */
	ZLIB: string;

	/**
 	 * The Licenses constructor.
	 * @param {string} name The name of the licensor
	 * @param {number} year The year the license was created
 	 */
	constructor(name: string, year?: number) {
		this.AFL = licenses.AFL;
		this.APACHE = licenses.APACHE;
		this.ART = licenses.ART;
		this.BSL = licenses.BSL;
		this.BSD2C = licenses.BSD2C.replace(/\[year\]/g, (year || new Date().getFullYear()).toString()).replace(/\[fullname\]/g, name);
		this.BSD3C = licenses.BSD3C.replace(/\[year\]/g, (year || new Date().getFullYear()).toString()).replace(/\[fullname\]/g, name);
		this.BSD3CC = licenses.BSD3CC.replace(/\[year\]/g, (year || new Date().getFullYear()).toString()).replace(/\[fullname\]/g, name);
		this.CC0 = licenses.CC0;
		this.CCBY = licenses.CCBY;
		this.CCBYSA = licenses.CCBYSA;
		this.WTFPL = licenses.WTFPL;
		this.ECL = licenses.ECL;
		this.EPL1 = licenses.EPL1;
		this.EPL2 = licenses.EPL2;
		this.EUPL = licenses.EUPL;
		this.AGPL = licenses.AGPL;
		this.GPL2 = licenses.GPL2;
		this.GPL3 = licenses.GPL3;
		this.LGPL21 = licenses.LGPL21;
		this.LGPL3 = licenses.LGPL3;
		this.ISC = licenses.ISC.replace(/\[year\]/g, (year || new Date().getFullYear()).toString()).replace(/\[fullname\]/g, name);
		this.LPPL = licenses.LPPL;
		this.MSPL = licenses.MSPL;
		this.MIT = licenses.MIT.replace(/\[year\]/g, (year || new Date().getFullYear()).toString()).replace(/\[fullname\]/g, name);
		this.MPL = licenses.MPL;
		this.OSL = licenses.OSL;
		this.POSTSQL = licenses.POSTSQL.replace(/\[year\]/g, (year || new Date().getFullYear()).toString()).replace(/\[fullname\]/g, name);
		this.OFL = licenses.OFL.replace(/\[year\]/g, (year || new Date().getFullYear()).toString()).replace(/\[fullname\]/g, name);
		this.NCSA = licenses.NCSA.replace(/\[year\]/g, (year || new Date().getFullYear()).toString()).replace(/\[fullname\]/g, name);
		this.UNL = licenses.UNL;
		this.ZLIB = licenses.ZLIB.replace(/\[year\]/g, (year || new Date().getFullYear()).toString()).replace(/\[fullname\]/g, name);
	}
}

export = Licenses;