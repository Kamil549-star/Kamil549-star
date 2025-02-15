<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Run Git Commands</title>
</head>
<body>
    <button id="runGitCommands">Run Git Commands</button>

    <script>
        document.getElementById('runGitCommands').addEventListener('click', () => {
            fetch('/run-git-commands', {
                method: 'POST'
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        });
    </script>
</body>
</html>
