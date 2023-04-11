import * as fs from "fs";
import * as path from "path";

const licenses: Record<string, string> = JSON.parse(fs.readFileSync(path.join(__dirname, "../licenses.json"), "utf8"));

/**
 * The Academic Free License v3.0
 */
export function AFL() {
    return licenses.AFL;
}
/**
 * The Apache License 2.0
 */
export function APACHE() {
    return licenses.APACHE;
}
/**
 * The Artistic License 2.0
 */
export function ART() {
    return licenses.ART;
}
/**
 * The Boost Software License 1.0
 */
export function BSL() {
    return licenses.BSL;
}
/**
 * The BSD 2-clause "Simplified" License
 * @param name The name of the licensor
 * @param year The year the license was created
 */
export function BSD2C(name: string, year: number = new Date().getFullYear()) {
    return licenses.BSD2C.replace(/\[year\]/g, year.toString()).replace(/\[fullname\]/g, name);
}
/**
 * The BSD 3-clause "New" or "Revised" License
 * @param name The name of the licensor
 * @param year The year the license was created
 */
export function BSD3C(name: string, year: number = new Date().getFullYear()) {
    return licenses.BSD3C.replace(/\[year\]/g, year.toString()).replace(/\[fullname\]/g, name);
}
/**
 * The BSD 3-clause Clear License
 * @param name The name of the licensor
 * @param year The year the license was created
 */
export function BSD3CC(name: string, year: number = new Date().getFullYear()) {
    return licenses.BSD3CC.replace(/\[year\]/g, year.toString()).replace(/\[fullname\]/g, name);
}
/**
 * The Creative Commons Zero v1.0 Universal
 */
export function CC0() {
    return licenses.CC0;
}
/**
 * The Creative Commons Attribution 4.0
 */
export function CCBY() {
    return licenses.CCBY;
}
/**
 * The Creative Commons Attribution Share Alike 4.0
 */
export function CCBYSA() {
    return licenses.CCBYSA;
}
/**
 * The Do What The F You Want To Public License
 */
export function WTFPL() {
    return licenses.WTFPL;
}
/**
 * The Educational Community License v2.0
 */
export function ECL() {
    return licenses.ECL;
}
/**
 * The Eclipse Public License 1.0
 */
export function EPL1() {
    return licenses.EPL1;
}
/**
 * The Eclipse Public License 2.0
 */
export function EPL2() {
    return licenses.EPL2;
}
/**
 * The European Union Public License 1.1
 */
export function EUPL() {
    return licenses.EUPL;
}
/**
 * The GNU Affero General Public License v3.0
 */
export function AGPL() {
    return licenses.AGPL;
}
/**
 * The GNU General Public License v2.0
 */
export function GPL2() {
    return licenses.GPL2;
}
/**
 * The GNU General Public License v3.0
 */
export function GPL3() {
    return licenses.GPL3;
}
/**
 * The GNU Lesser General Public License v2.1
 */
export function LGPL21() {
    return licenses.LGPL21;
}
/**
 * The GNU Lesser General Public License v3.0
 */
export function LGPL3() {
    return licenses.LGPL3;
}
/**
 * The ISC License
 * @param name The name of the licensor
 * @param year The year the license was created
 */
export function ISC(name: string, year: number = new Date().getFullYear()) {
    return licenses.ISC.replace(/\[year\]/g, year.toString()).replace(/\[fullname\]/g, name);
}
/**
 * The LaTeX Project Public License v1.3c
 */
export function LPPL() {
    return licenses.LPPL;
}
/**
 * The Microsoft Public License
 */
export function MSPL() {
    return licenses.MSPL;
}
/**
 * The MIT License
 * @param name The name of the licensor
 * @param year The year the license was created
 */
export function MIT(name: string, year: number = new Date().getFullYear()) {
    return licenses.MIT.replace(/\[year\]/g, year.toString()).replace(/\[fullname\]/g, name);
}
/**
 * The Mozilla Public License 2.0
 */
export function MPL() {
    return licenses.MPL;
}
/**
 * The Open Software License 3.0
 */
export function OSL() {
    return licenses.OSL;
}
/**
 * The PostgreSQL License
 * @param name The name of the licensor
 * @param year The year the license was created
 */
export function POSTSQL(name: string, year: number = new Date().getFullYear()) {
    return licenses.POSTSQL.replace(/\[year\]/g, year.toString()).replace(/\[fullname\]/g, name);
}
/**
 * The SIL Open Font License 1.1
 * @param name The name of the licensor
 * @param year The year the license was created
 */
export function OFL(name: string, year: number = new Date().getFullYear()) {
    return licenses.OFL.replace(/\[year\]/g, year.toString()).replace(/\[fullname\]/g, name);
}
/**
 * The University of Illinois/NCSA Open Source License
 * @param name The name of the licensor
 * @param year The year the license was created
 */
export function NCSA(name: string, year: number = new Date().getFullYear()) {
    return licenses.NCSA.replace(/\[year\]/g, year.toString()).replace(/\[fullname\]/g, name);
}
/**
 * The Unlicense
 */
export function UNL() {
    return licenses.UNL;
}
/**
 * The zLib License
 * @param name The name of the licensor
 * @param year The year the license was created
 */
export function ZLIB(name: string, year: number = new Date().getFullYear()) {
    return licenses.ZLIB.replace(/\[year\]/g, year.toString()).replace(/\[fullname\]/g, name);
}