const model = require("../models/formModel.js");

module.exports = {
    /**
     * desc : saves data
     */
    addData: function (req, res) {
        try {
            var formData = req.body;
            var data = new model(formData);
            data.save(function (err, data) {
                if (err) {
                    console.log(error);
                }
                else {
                    res.send("Data inserted");
                }
            });
        }
        catch (error) {
            console.log("Data not added");
        }
    },
    /**
     * desc : gets list of all data
     */
    //find()
    getData: function (req, res) {
        try {
            model.find({}).lean().exec(function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send(data);
                }
            });
        }
        catch (error) {
            console.log("Data not found");
        }
    },
    /**
     * desc : gets delete data
     */
    deleteData: function (req, res) {
        try {
            model.findByIdAndRemove((req.params.id),
                function (err, data) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        res.send(data);
                        console.log("Data Deleted!");
                    }
                });
        }
        catch (error) {
            console.log("Data not deleted");
        }
    },
    /**
     * desc : gets update data
     */
    //$set
    updateData: function (req, res) {
        try {
            model.findByIdAndUpdate(req.params.id,
                { "$set": req.body }, function (err, data) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        res.send(data);
                        console.log("Data updated!");
                    }
                });
        }
        catch (error) {
            console.log("Data not updated.");
        }
    }
}