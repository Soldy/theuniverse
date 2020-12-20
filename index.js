
const bigBang = function(){
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
    let interval ;
    /*
     * @private
     *
     */
    let ex1t = function(){
        clearTimeout(interval);
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
              'exit'     : ex1t
          }
          interval = setTimeout(boo000om, 10000);
    }
    /*
     *  init
     */
    boo000om();
}


new bigBang();



