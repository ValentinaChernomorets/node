module.exports.checkType = function (value) {
    return typeof value === "number" && !Number.isNaN(value);
}