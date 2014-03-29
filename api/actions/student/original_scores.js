module.exports = function (kingo, callback) {
  kingo.getOriginalScores(function (error, scores) {
    callback(error, scores);
  });
};
