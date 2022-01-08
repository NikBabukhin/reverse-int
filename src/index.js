module.exports = function reverse (n) {
    let res = n.toString().split('').reverse();
    return res.filter(element => element !== '-').join('');
};
