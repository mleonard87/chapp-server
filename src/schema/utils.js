export function enumValuesFromObject(obj){
  return Object.keys(obj).reduce((target, key)=>{
    return {
      ...target,
      [key]: {
          value: obj[key]
      }
    }
  }, {});
}
