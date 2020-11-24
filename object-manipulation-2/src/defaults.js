/* exported defaults */
function defaults(target,source) {
  var newObj =Object.assign(source,target)
  Object.assign(target,newObj)
}
