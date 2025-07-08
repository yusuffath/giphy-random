export default function handler(req, res) {
    const gifs = [
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExejExdnp5eTZkdXplZ3ZmZmU4dmYza2I5d20yZndxODQyZzQwYWc5OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uUpZjjE0kHkY7rHJWn/giphy.gif",
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2swZmJ1dWV3aXg5Nmx2dDlscjEzMmc2ZXMzb2cyM3puZm5sMjk0MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/llK8g5jtVU92lIjLjj/giphy.gif",
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExODc4a3NjdDFsbHdsdjZqcHYxYnQxMzlzMXo0MGpzNGFwaXoydXN1bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YPUA7s6l6vZ7eMI7L3/giphy.gif",
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2JoZXp2Zjlxa2hvMWF5NmlvYWJxN2ttMHE4ejBuaG13YmpoYzgzZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RfQXq0eSgKFPFthcNr/giphy.gif",
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW0zcDRuaGs4cmZ4cW52MzFtcmR4YndocTEwaG1rYmF2Mzg4c3MzZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jBEYhLSEBpJ6JahOBo/giphy.gif",
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWUxcXNyNXE3aGkwNDJ4bW96Y2QyN2ZjOGdweG54dnoxYWZvenR3OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jzVmgZq8UUPcHaQMjh/giphy.gif",
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGt6dnBseTF6MDVnaHNubHRteHdxNzJudXRwMTg0cWRmcjA3Y2U5cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sWPxv7XaSFfHXyQEIN/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDM5Mjc5N3YxZzczZWQwZ3JxM3p3M2dueXZtamp6djVhNW1yYWJ1ZCZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/3oriOiqKfPa3j4MKha/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDM5Mjc5N3YxZzczZWQwZ3JxM3p3M2dueXZtamp6djVhNW1yYWJ1ZCZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/kph2mRBrmQJ2C5MdwE/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTgyYTE0OTNiMDJ3ZWs5c2wwNjZ6NHR0dnlqYzZ5N3RraTR3aXQzdzZ5Z2ZpZXZ0dyZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/5GdhgaBpA3oCA/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTgyYTE0OTNiN2lyNjY0NDR1YWtuOGhiajViaGcwM3JoOWp4NWZxdzVtZ2J3bzZ1cyZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/J2WQhnfK2WuUE/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTgyYTE0OTNidTVjY2czdTd3dTQzZGhuYWt0MW51NzNwdHFqbWcwOWFuamxlZzFxeiZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/l0HlVSOUScteNAbuw/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2F6cjE1ZjZnaDU1azB3eHFnczhxcWRxaWkxaWEwaHNuemIzN2JkeSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/TRSimgHMAd0CdJfGY4/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2F6cjE1ZjZnaDU1azB3eHFnczhxcWRxaWkxaWEwaHNuemIzN2JkeSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/TRSimgHMAd0CdJfGY4/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExemI1NXFwNnJnNG00OGN3aHI1NG53d3R2enBkcDh0ajQ3anoxbXhibiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kOIbusN7fPnkk/giphy.gif"
    ];

    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

    res.writeHead(302, {
        Location: randomGif
    });
    res.end();
}
