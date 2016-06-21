/*
  TODO: Implement empty function bodies according to their requirements
*/

'use strict'

function createGrowthModel (lengthToWingspan, leavesEatenToWeight) {
  return {
    lengthToWingspan,
    leavesEatenToWeight
  }
}

/**
 * Given an array of growth models, this function finds their average and returns
 * this result as a new growth model object
 *
 * @param growthModels [Array<GrowthModel>] the growth models to average.
 *                                          If empty or undefined, return
 *                                          an undefined growth model
 *
 * @return a GrowthModel object
 */
function averageGrowthModel (growthModels) {
  // TODO: implement using Array.prototype.reduce()
  if(growthModels.length > 0){
  const average = growthModels.reduce((acc, next) =>
  createGrowthModel(acc.lengthToWingspan + next.lengthToWingspan,
    acc.leavesEatenToWeight + next.leavesEatenToWeight), createGrowthModel(0, 0))

return createGrowthModel(average.lengthToWingspan / growthModels.length, average.leavesEatenToWeight / growthModels.length)
}}


module.exports = {
  createGrowthModel,
  averageGrowthModel
}
