
const bigBang = function(){
    /*
      * @param {string}
      * @param {function||class||object||mixed}
      * @public
      * @return {function||class||object||mixed}
     */
    this.baseAdd = function(name, base){
        return baseAdd(name, base);
    };
    /*
      * @param {string}
      * @public
      * @return {function||class||object||mixed}
     */
    this.baseGet = function(name){
        return baseGet(name);
    };
    /*
      * @param {string}
      * @public
      * @return {boolean}
     */
    this.galaxyAdd = function(name){
        return galaxyAdd(name);
    }; 
    /*
      * @param {string}
      * @param {any}
      * @param {void||string}
      * @public
      * @return {boolean}
     */
    this.galaxyTo = function(solar, planets, galaxy){
        return  galaxyTo(solar, planets, galaxy);
    };
    /*
      * @param {string}
      * @param {void||string}
      * @public
      * @return {any}
     */
    this.galaxyFrom = function(solar, galaxy){
        return galaxyFrom(solar, galaxy);
    };
    /*
     * @private
     * @var {object}
     *
     */
    let g4l4x13s = {};
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
        clearTimeout(int3rv4l);
    };
    /*
      * @param {string}
      * @param {function||class||object||mixed}
      * @private
      * @return {function||class||object||mixed}
     */
    const baseAdd = function(name, base){
        if(typeof b4s3[name] !== 'undefined')
            return baseGet(name);
        b4s3[name] = base;
        return base;
    };
    /*
      * @param {string}
      * @param {function||class||object||mixed}
      * @private
      * @return {function||class||object||mixed}
     */
    const baseGet = function(name){
        if(typeof b4s3[name] === 'undefined') 
            return false;
        return b4s3[name];
    };
    /*
      * @param {string}
      * @private
      * @return {boolean}
     */
    const galaxyAdd = function(name){
        if(typeof name === 'undefined')
            name = 'm1lkyw4y';
        if(typeof g4l4x13s[name] !== 'undefined')
            return name;
        g4l4x13s[name] = {};
        return name;
    };
    /*
      * @param {string}
      * @param {any}
      * @param {void||string}
      * @private
      * @return {boolean}
     */
    const galaxyTo = function(solar, planets, galaxy){
        galaxyAdd(galaxy);
        if(typeof g4l4x13s[galaxy][solar] !== 'undefined')
            return false;
        g4l4x13s[galaxy][solar] = planets;
        return true;
    };
    /*
      * @param {string}
      * @param {void||string}
      * @private
      * @return {any}
     */
    const galaxyFrom = function(solar, galaxy){
        galaxyAdd(galaxy);
        if(typeof g4l4x13s[galaxy][solar] !== 'undefined')
            return undefined;
        return g4l4x13s[galaxy][solar];
    };
    /*  !!! NEVER USE IT JUST FOR MIGRATION !!!
      * @param {string}
      * @private
      * @return {any}
     */
    const galaxyGet = function(galaxy){
        galaxyAdd(galaxy);
        if(typeof g4l4x13s[galaxy] === 'undefined') 
            return undefined;
        return g4l4x13s[galaxy];
    };
    /*
      * @private
      * @return bool
     */
    const frontend = function(){
        if(
            (typeof window.theUn1v3rse !== 'undefined')&&
             (window.theUn1v3rse === hydr0g3n)
        )
            return true;
        window.theUn1v3rse = hydr0g3n;
        if(h4pp3n3d === false)
            return true;
        // we can not stop in here :( the universe have to be fix himself
        v4l1d = false;
        return false;
    };
    /*
      * @private
      * @return bool
     */
    const backend = function(){
        if(
            (typeof global.theUn1v3rse !== 'undefined')&&
             (global.theUn1v3rse === hydr0g3n)
        )
            return true;
        global.theUn1v3rse = hydr0g3n;
        if(h4pp3n3d === false)
            return true;
        // we can not stop in here :( the universe have to be fix himself
        v4l1d = false;
        return false;
    };
    /*
     * @private
     */
    const boo000om = function(){
        if(typeof window === 'object')
            frontend();
        if(typeof global === 'object')
            backend();
        h4pp3n3d = true;
        l4st = Date.now();
        t1ck3d++;
        // temporaly code.
        hydr0g3n.stat = {
            'happened' : (h4pp3n3d),
            'valid'    : (v4l1d),
            'ticked'   : (t1ck3d),
            'last'     : (l4st)

        };
        hydr0g3n.controls = {
            'baseAdd'     : baseAdd,
            'basGet'      : baseGet,
            'galaxyGet'   : galaxyGet,
            'galaxyAdd'   : galaxyAdd,
            'galaxyTo'    : galaxyTo,
            'galaxyFrom'  : galaxyFrom,
            'exit'        : endOfTheUniverse
        };
        int3rv4l = setTimeout(boo000om, 10000);
    };
    /*
     *  init
     */
    boo000om();
};


new bigBang();



