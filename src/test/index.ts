import * as fs from "fs";
import * as path from "path";
import assert from "assert";
import * as Licenses from "..";

const licenses: Record<string, string> = JSON.parse(fs.readFileSync(path.join(__dirname, "../../licenses.json"), "utf8"));

describe("Licenses", () => {
    describe("APACHE", () => {
        it("should return the Apache License 2.0", () => {
            assert.strictEqual(licenses.APACHE, Licenses.APACHE());
        });
    });
    describe("ISC", () => {
        it("should return the ISC License", () => {
            assert.strictEqual(licenses.ISC.replace(/\[year\]/g, new Date().getFullYear().toString()).replace(/\[fullname\]/g, "John Doe"), Licenses.ISC("John Doe"));
        });
    });
    describe("MIT", () => {
        it("should return the MIT License", () => {
            assert.strictEqual(licenses.MIT.replace(/\[year\]/g, (2021).toString()).replace(/\[fullname\]/g, "Deez Nuts"), Licenses.MIT("Deez Nuts", 2021));
        });
    });
    describe("GPL3", () => {
        it("should return the GNU Public License 3.0", () => {
            assert.strictEqual(licenses.GPL3, Licenses.GPL3());
        });
    });
});