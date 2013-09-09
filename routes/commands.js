exports.executeCommand = function(req, res) {
        var command = req.body;
        console.log('Executing command: ' + JSON.stringify(command));
        res.send("Executed command : " + JSON.stringify(command));
};
