/*
 *  @Soldy\theuniverse\2021.01.23\GPL3
 */
'use strict';

/*
 * @param {integer} limitIn //maximum size of package
 * @prototype
 */
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
     * @constant {integer}
     */
    const _0 = Date.now();
    /*
     * @private
     * @constant {integer}
     */
    const _t1m3 = 1000;
    /*
     * @private
     * @var {object}
     *
     */
    let _g4l4x13s = {};
    /*
     * @private
     * @var {object}
     *
     */
    let _b4s3 = {};
    /*
     * @private
     * @var object
     *
     */
    let _hydr0g3n = {};
    /*
     * @private
     * @var boolean 
     *
     */
    let _v4l1d  = true;
    /*
     * @private
     * @var boolean
     */
    let _h4pp3n3d = false;
    /*
     * @private
     * @var {integer} [Uint64]
     */
    let _t1ck3d = 0;
    /*
     * @private
     * @var {integer} [Uint32]
     */
    let _l4st = 0;
    /*
     * @private
     * @var {timeout}
     */
    let _int3rv4l ;
    /*
     * @private
     */
    const _endOfTheUniverse = function(){
        clearTimeout(_int3rv4l);
    };
    /*
      * @param {string}
      * @param {function||class||object||mixed}
      * @private
      * @return {function||class||object||mixed}
     */
    const _baseAdd = function(name, base){
        if(typeof _b4s3[name] !== 'undefined')
            return _baseGet(name);
        _b4s3[name] = base;
        return base;
    };
    /*
      * @param {string}
      * @param {function||class||object||mixed}
      * @private
      * @return {function||class||object||mixed}
     */
    const _baseGet = function(_name){
        if(typeof b4s3[name] === 'undefined') 
            return false;
        return _b4s3[name];
    };
    /* Create a galaxy
     * @param {string}
     * @private
     * @return {boolean}
     */
    const _galaxyAdd = function(name){
        if(typeof name === 'undefined')
            name = 'm1lkyw4y';
        if(typeof _g4l4x13s[name] !== 'undefined')
            return name;
        _g4l4x13s[name] = {};
        return name;
    };
    /*
      * @param {string}
      * @param {any}
      * @param {void||string}
      * @private
      * @return {boolean}
     */
    const _galaxyTo = function(solar, planets, galaxy){
        _galaxyAdd(galaxy);
        if(typeof _g4l4x13s[galaxy][solar] !== 'undefined')
            return false;
        _g4l4x13s[galaxy][solar] = planets;
        return true;
    };
    /*
      * @param {string}
      * @param {void||string}
      * @private
      * @return {any}
     */
    const _galaxyFrom = function(solar, galaxy){
        _galaxyAdd(galaxy);
        if(typeof _g4l4x13s[galaxy][solar] !== 'undefined')
            return undefined;
        return _g4l4x13s[galaxy][solar];
    };
    /*  !!! NEVER USE IT JUST FOR MIGRATION !!!
      * @param {string}
      * @private
      * @return {any}
     */
    const _galaxyGet = function(galaxy){
        _galaxyAdd(galaxy);
        if(typeof _g4l4x13s[galaxy] === 'undefined') 
            return undefined;
        return _g4l4x13s[galaxy];
    };
    /*
     * @private
     */
    const _boo000om = function(){
        let now = Date.now();
        if(_ev3ryth1ng.theUn1v3rse !== _hydr0g3n){
             _ev3ryth1ng.theUn1v3rse = _hydr0g3n;
             if(_h4pp3n3d === true)
                 _v4l1d = false;
        }
        // we can not stop in here :( the universe have to be fix himself
        _h4pp3n3d = true;
        _l4st = now;
        _t1ck3d++;
        // temporaly code.
        _hydr0g3n.stat = {
            'ad'       : (_0),
            'happened' : (_h4pp3n3d),
            'valid'    : (_v4l1d),
            'ticked'   : (_t1ck3d),
            'last'     : (_l4st)

        };
        _hydr0g3n.controls = {
            'baseAdd'     : _baseAdd,
            'basGet'      : _baseGet,
            'galaxyGet'   : _galaxyGet,
            'galaxyAdd'   : _galaxyAdd,
            'galaxyTo'    : _galaxyTo,
            'galaxyFrom'  : _galaxyFrom,
            'exit'        : _endOfTheUniverse
        };
        _int3rv4l = setTimeout(
            _boo000om, 
            (
                _t1m3-Math.abs(Date.now()-now)
            )
        );
    };
    /*
     *  init
     */
    let _ev3ryth1ng;
    if(typeof window !== 'undefined')
        _ev3ryth1ng = window;
    else
        _ev3ryth1ng = global;
    _boo000om();
};


// doubleverse defense

if(
     (
         (typeof global === 'undefined') ||
         (typeof global.theUn1v3rse === 'undefined')
     )&&(
         (typeof window === 'undefined') ||
         (typeof window.theUn1v3rse === 'undefined')
     )
)
     new bigBang();



