const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.post('/run-git-commands', (req, res) => {
    const commands = `
        echo "# https-kamil549-star.github.io" >> README.md
        git init
        git add README.md
        git commit -m "first commit"
        git branch -M main
        git remote add origin https://github.com/Kamil549-star/https-kamil549-star.github.io.git
        git push -u origin main
    `;

    exec(commands, (error, stdout, stderr) => {
        if (error) {
            res.status(500).json({ error: stderr });
        } else {
            res.status(200).json({ message: stdout });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
