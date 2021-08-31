if(
    (
        (typeof global === 'undefined') ||
         (typeof global.theUn1v3rse === 'undefined')
    )&&(
        (typeof window === 'undefined') ||
         (typeof window.theUn1v3rse === 'undefined')
    )
){
   const universeBase = (require('./universe.js')).base;
   new universeBase(universeBase.prototype)

}
