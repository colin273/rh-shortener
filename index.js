var http = require("http");

function redirect(res, url, other) {
    if (!other) {
        url = "https://routinehub.co/" + url;
    }
    
    res.writeHead(301, {
        Location: url
    });
    res.end();
}

http.createServer(function(req, res) {
    const pathname = req.url;
    const type = pathname.charAt(1);
    const itemValue = pathname.substr(2);

    if (type === "") {
        // Serve index.html
    } else {
        switch (type) {
            case "u":
                redirect(res, `user/${itemValue}`);
                break;
            case "s":
                redirect(res, `shortcut/${itemValue}`);
                break;
            case "c":
                redirect(res, `shortcut/${itemValue}/changelog`);
                break;
            case "h":
                redirect(res, "");
                break;
            case "r":
                redirect(res, "register");
                break;
            case "l":
                redirect(res, "login");
                break;
            case "m":
                redirect(res, "membership");
                break;
            case "q":
                redirect(res, "faq");
                break;
            case "b":
                redirect(res, "blog");
                break;
            case "t":
                redirect(res, "terms");
                break;
            case "p":
                redirect(res, "privacy");
                break;
            case "k":
                redirect(res, "cookies");
                break;
            case "f":
                redirect(res, "https://feedback.routinehub.co", true);
                break;
            default: // Change this to redirect to 404 page
                redirect(res, "https://example.com", true);
        }
    }
}).listen(3000);