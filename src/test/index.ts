import assert = require("assert");
import Licenses = require("..");
import licenses = require("../licenses.json");

describe("Licenses", () => {
	describe("APACHE", () => {
		it("should return the Apache License 2.0", () => {
			assert.strictEqual(licenses.APACHE, Licenses.APACHE());
		});
	});
	describe("ISC", () => {
		it("should return the ISC License", () => {
			assert.strictEqual(licenses.ISC.replace(/\[year\]/g, (2021).toString()).replace(/\[fullname\]/g, "John Doe"), Licenses.ISC("John Doe", 2021));
		});
	});
	describe("MIT", () => {
		it("should return the MIT License", () => {
			assert.strictEqual(licenses.MIT.replace(/\[year\]/g, (2021).toString()).replace(/\[fullname\]/g, "Deez Nuts"), Licenses.MIT("Deez Nuts"));
		});
	});
	describe("GPL3", () => {
		it("should return the GNU Public License 3.0", () => {
			assert.strictEqual(licenses.GPL3, Licenses.GPL3());
		});
	});
});