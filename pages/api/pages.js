const pages = require('../../models/pages')

export default async (req, res) => {
    pages.find({}, (err, pages) => {
        res.json(pages);
    });
};
