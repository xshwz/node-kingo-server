module.exports = function (kingo, callback) {
  kingo.getEffectiveScores(function (error, scores) {
    callback(error, scores);
  });
};
