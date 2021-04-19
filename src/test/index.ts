import assert = require("assert");
import Licenses = require("..");
import licenses = require("../licenses.json");

describe("Licenses", () => {
	describe("APACHE", () => {
		it("should return the Apache License 2.0", () => {
			assert.strictEqual(licenses.APACHE, new Licenses("").APACHE);
		});
	});
	describe("ISC", () => {
		it("should return the ISC License", () => {
			assert.strictEqual(licenses.ISC.replace(/\[year\]/g, (2021).toString()).replace(/\[fullname\]/g, "John Doe"), new Licenses("John Doe").ISC);
		});
	});
	describe("MIT", () => {
		it("should return the MIT License", () => {
			assert.strictEqual(licenses.MIT.replace(/\[year\]/g, (2021).toString()).replace(/\[fullname\]/g, "Deez Nuts"), new Licenses("Deez Nuts", 2021).MIT);
		});
	});
	describe("GPL3", () => {
		it("should return the GNU Public License 3.0", () => {
			assert.strictEqual(licenses.GPL3, new Licenses("").GPL3);
		});
	});
});