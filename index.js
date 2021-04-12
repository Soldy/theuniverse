if(
     (
         (typeof global === 'undefined') ||
         (typeof global.theUn1v3rse === 'undefined')
     )&&(
         (typeof window === 'undefined') ||
         (typeof window.theUn1v3rse === 'undefined')
     )
)
     new (require('./universe.js')).base();
