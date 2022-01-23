const hosted_base = "https://fs.hubspotusercontent00.net/hubfs/2661559/Teneo/Work%20from%20Anywhere%20-%20Lie%20Detector"
const base_link = process.env.ELEVENTY_ENV == "prod" ? hosted_base : "."
module.exports = {
    base_link,
    js_link: process.env.ELEVENTY_ENV == "prod" ? `${hosted_base}` : `./js`,
    css_link: process.env.ELEVENTY_ENV == "prod" ? `${hosted_base}` : `./css`,
}