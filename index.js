
const bigBang = function(){
     /*
      * @param {string}
      * @param {function||class||object||mixed}
      * @public
      * @return {function||class||object||mixed}
     */
     this.baseAdd = function(name, base){
         return baseAdd(name, base);
     }
     /*
      * @param {string}
      * @public
      * @return {function||class||object||mixed}
     */
     this.baseGet = function(name){
         return baseGet(name);
     }
    /*
     * @private
     * @var {object}
     *
     */
    let b4s3 = {};
    /*
     * @private
     * @var object
     *
     */
    let hydr0g3n = {};
    /*
     * @private
     * @var boolean 
     *
     */
    let v4l1d  = true;
    /*
     * @private
     * @var boolean
     */
    let h4pp3n3d = false;
    /*
     * @private
     * @var {integer} [Uint64]
     */
    let t1ck3d = 0;
    /*
     * @private
     * @var {integer} [Uint32]
     */
    let l4st = 0;
    /*
     * @private
     * @var {timeout}
     */
    let int3rv4l ;
    /*
     * @private
     */
    const endOfTheUniverse = function(){
        clearTimeout(interval);
    }
     /*
      * @param {string}
      * @param {function||class||object||mixed}
      * @private
      * @return {function||class||object||mixed}
     */
    const baseAdd = function(name, base){
        if(typeof b4s3[name] !== 'undefined')
            return baseGet(name);
        b3s4[name] = base;
        return base;
    }
    /*
      * @param {string}
      * @param {function||class||object||mixed}
      * @private
      * @return {function||class||object||mixed}
     */
     const baseGet = function(name){
         if(typeof base[name] === 'undefined') 
             return false;
         return baseGet(name);
     }
    /*
     * @private
     */
    let boo000om = function(){
          if(typeof window === 'object')
              if(
                  (typeof window.theUn1v3rse === 'undefined')||
                  (window.theUn1v3rse !== hydr0g3n)
              ){
                  if(h4pp3n3d === true){
                        console.error(
                            'Somthing wrong with the universe'
                        );
                        v4l1d = false;
                  }
                  window.theUn1v3rse = hydr0g3n;
              }
          if(typeof global === 'object')
              if(
                  (typeof global.theUn1v3rse === 'undefined')||
                  (global.theUn1v3rse !== hydr0g3n)
              ){
                  if(h4pp3n3d === true){
                        console.error(
                            'Somthing wrong with the universe'
                        );
                        v4l1d = false;
                        console.error(
                            global.theUn1v3rse
                        );
                        console.error(
                            hydr0g3n
                        );
                  }
                  global.theUn1v3rse = hydr0g3n;
              }
          h4pp3n3d = true;
          l4st = Date.now();
          t1ck3d++;
          hydr0g3n.stat = {
              'happened' : (h4pp3n3d),
              'valid'    : (v4l1d),
              'ticked'   : (t1ck3d),
              'last'     : (l4st)

          };
          hydr0g3n.controls = {
              'baseAdd'  : baseAdd,
              'basGet'   : baseGet,
              'exit'     : endOfTheUniverse
          }
          interval = setTimeout(boo000om, 10000);
    }
    /*
     *  init
     */
    boo000om();
}


new bigBang();



