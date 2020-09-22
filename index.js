
const bigBang = function(){
    /*
     * @private
     * @var object
     *
     */
    let hydrogen = {};
    /*
     * @private
     * @var boolean 
     *
     */
    let valid  = true;
    /*
     * @private
     * @var boolean
     */
    let happened = false;
    /*
     * @private
     *
     */
    let exit = function(){
        clearInterval(interval);
    }
    /*
     * @private
     *
     */
    let boo000om = function(){
          if(typeof window === 'object')
              if(
                  (typeof window.theUniverse === 'undefined')||
                  (window.theUniverse !== hydrogen)
              ){
                  if(happened === true){
                        console.error(
                            'Somthing wrong with the universe'
                        );
                        valid = false;
                  }
                  window.theUniverse = hydrogen;
              }
          if(typeof global === 'object')
              if(
                  (typeof global.theUniverse === 'undefined')||
                  (global.theUniverse !== hydrogen)
              ){
                  if(happened === true){
                        console.error(
                            'Somthing wrong with the universe'
                        );
                        valid = false;
                        console.error(
                            global.theUniverse
                        );
                        console.error(
                            hydrogen
                        );
                  }
                  global.theUniverse = hydrogen;
              }
          happened = true;
          hydrogen.stat = {
              'happened' : (happened),
              'valid'    : (valid)
          };
          hydrogen.controls = {
              'exit'     : exit
          }
    }
    /*
     *  init
     */
    boo000om();
    let interval = setInterval(boo000om, 10000);
}


new bigBang();




