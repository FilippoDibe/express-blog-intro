const { readJson, writeJson } = require('../functions');

module.exports = {
    get: (req, res) => {
        const blog = readJson('posts');
        res.format({
            html: () => {
                let html = `<div style="display: flex; justify-content: center; flex-direction: column; align-items: center;">`;
                blog.forEach(({ title, text, image, tags }) => {
                    html += `
                        <div>
                            <h2>${title}</h2>
                            <img src="${image}" heigth="100px" width="250px"/>
                            <h6>${text}</h6>
                    `;
                    tags.forEach(tag => html += `<ul><li>${tag}</li></ul>`);
                    html += `
                        </div>
                    `;
                });
                html += '</div>';
                res.send(html);
            },
            json: () => {
                res.json(blog);
            }
        });
    },
    post: (req, res) => {
        const blog = readJson('posts');
        writeJson('posts', [...blog, req.body]);
        res.send('Post effettuato correttamente')
    }
};
