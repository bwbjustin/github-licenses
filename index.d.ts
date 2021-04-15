type License = (name: string, year?: number) => string;

declare class Licenses {
	public static AFL: License;
	public static APACHE: License;
	public static ART: License;
	public static BSL: License;
	public static BSD2C: License;
	public static BSD3C: License;
	public static BSD3CC: License;
	public static CC0: License;
	public static CCBY: License;
	public static CCBYSA: License;
	public static WTFPL: License;
	public static ECL: License;
	public static EPL1: License;
	public static EPL2: License;
	public static EUPL: License;
	public static AGPL: License;
	public static GPL2: License;
	public static GPL3: License;
	public static LGPL21: License;
	public static LGPL3: License;
	public static ISC: License;
	public static LPPL: License;
	public static MSPL: License;
	public static MIT: License;
	public static MPL: License;
	public static OSL: License;
	public static POSTSQL: License;
	public static OFL: License;
	public static NCSA: License;
	public static UNL: License;
	public static ZLIB: License;
}

export = Licenses;