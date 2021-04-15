# github-licenses
Get all the licenses that are included in GitHub.

# Licenses
All licenses are functions that take the name, and optionally, the year. For example:
```js
const Licenses = require("github-licenses");
Licenses.MIT("Deez Nuts"); // copyright 2021
Licenses.MIT("Deez Nuts", 2012); // copyright 2012
```

The list of licenses that are included are:

License | Function
--------|---------
Academic Free License v3.0 | AFL
Apache license 2.0 | APACHE
Artistic license 2.0 | ART
Boost Software License 1.0 | BSL
BSD 2-clause "Simplified" license | BSD2C
BSD 3-clause "New" or "Revised" license | BSD3C
BSD 3-clause Clear license | BSD3CC
Creative Commons Zero v1.0 Universal | CC0
Creative Commons Attribution 4.0 | CCBY
Creative Commons Attribution Share Alike 4.0 | CCBYSA
Do What The F You Want To Public License | WTFPL
Educational Community License v2.0 | ECL
Eclipse Public License 1.0 | EPL1
Eclipse Public License 2.0 | EPL2
European Union Public License 1.1 | EUPL
GNU Affero General Public License v3.0 | AGPL
GNU General Public License v2.0 | GPL2
GNU General Public License v3.0 | GPL3
GNU Lesser General Public License v2.1 | LGPL21
GNU Lesser General Public License v3.0 | LGPL3
ISC | ISC
LaTeX Project Public License v1.3c | LPPL
Microsoft Public License | MSPL
MIT | MIT
Mozilla Public License 2.0 | MPL
Open Software License 3.0 | OSL
PostgreSQL License | POSTSQL
SIL Open Font License 1.1 | OFL
University of Illinois/NCSA Open Source License | NCSA
The Unlicense | UNL
zLib License | ZLIB

# CLI
The CLI allows you to choose a license and write to a file. (Default: (cwd)/LICENSE)

Format: licenses (license) (option(s))

Options:

Name | Description
-----|------------
--output/-n? | The output of the license
--name/-n | The name of the licensor
--year/-y? | The year the license was created

# License
This project is licensed under the [MIT License](./LICENSE).