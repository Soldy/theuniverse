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
        return _galaxyAdd(name);
    }; 
    /*
      * @param {string}
      * @param {any}
      * @param {void||string}
      * @public
      * @return {boolean}
     */
    this.solarToGalaxy = function(galaxy, solar, planets){
        return  _toGalaxy(solar, planets, galaxy);
    };
    /*
      * @param {string}
      * @param {void||string}
      * @public
      * @return {any}
     */
    this.fromGalaxy = function(galaxy, solar){
        return _fromGalaxy(solar, galaxy);
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
     * @var {timeout}
     */
    let _3rr0r5 = {};
    /*
     * @param {Error}
     * @private
     * @return {boolean} // always false because the pipe
    */
    const _3rr0r0 = function(err){
        _3rr0r0(err);
        return undefined;
    }
    /*
     * @param {Error}
     * @private
     * @return {boolean} // always false because the pipe
    */
    const _3rr0r = function(err){
        let stamp = parseInt(Date.now()).toString();
        if(typeof _3rr0r5[stamp] !== 'undefined')
             return _3rr0r(err);
        _3rr0r5[stamp]=err;
        return false;
    }
    /*
     * @private
     * @return {array}
    */
    const _3rr0rList = function(){
        let out = 0;
        for (let i in _3rr0r5)
            out++;
        return out;
    }
    /*
     * @param {string}
     * @private
     * @return {Error}
    */
    const _3rr0rGet = function(id){
        if(typeof _3rr0r5[id] === 'undefined')
            return new Error('Requested error not exist');
    }
    /*
     * @privat
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
            return _3rr0r0(new RangeError('base not exist'));
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
    const _solarToGalaxy = function(galaxy, solar, planets){
        galaxy = _galaxyAdd(galaxy);
        if(typeof _g4l4x13s[galaxy][solar] !== 'undefined')
            return _3rr0r0(new RangeError('solar already in this galaxy'));
        _g4l4x13s[galaxy][solar] = planets;
        return true;
    };
    /*
      * @param {string}
      * @param {void||string}
      * @private
      * @return {any}
     */
    const _solarFromGalaxy = function(galaxy, solar){
        _galaxyAdd(galaxy);
        if(typeof _g4l4x13s[galaxy][solar] !== 'undefined')
            return _3rr0r0(new RangeError('solar not exist'));
        return _g4l4x13s[galaxy][solar];
    };
    /*  !!! JUST FOR MIGRATION !!!
      * @param {string}
      * @private
      * @return {any}
     */
    const _galaxyGet = function(galaxy){
        _galaxyAdd(galaxy);
        if(typeof _g4l4x13s[galaxy] === 'undefined') 
            return _3rr0r0(new Error('galaxy is impossible'));
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
                 _v4l1d = _3rr0r(new Error('Broken universe on '+_t1ck3d+'. tick' ));
        }
        // we can not stop in here :( the universe have to be fix himself
        _h4pp3n3d = true;
        _l4st = now;
        _t1ck3d++;
        // temporaly code.
        _hydr0g3n.stat = {
            'ad'       : parseInt(_0),
            'happened' : (_h4pp3n3d === true),
            'valid'    : (_v4l1d === true),
            'ticked'   : parseInt(_t1ck3d),
            'last'     : parseInt(_l4st)

        };
        _hydr0g3n.controls = {
            'baseAdd'         : function(name,base){return _baseAdd(name,base);},
            'basGet'          : function(name){return _baseGet(name);},
            'galaxyGet'       : function(galaxy){return _galaxyGet(galaxy);},
            'galaxyAdd'       : function(name){return _galaxyAdd(name);},
            'error'           : function(error){return _3rr0r(error);},
            'errorGet'        : function(stamp){return _3rr0rGet(stamp);},
            'errorList'       : function(){return _3rr0rList();},
            'solarTogalaxy'   : function(galaxy,solar,planets){return _solarToGalaxy(galaxy,solar,palnets);},
            'solarFromGalaxy' : function(galaxy,solar){return _solarFromGalaxy(galaxy,solar);},
            'exit'            : function(){return _endOfTheUniverse();}
        };
        _int3rv4l = setTimeout(
            _boo000om, 
            (
                _t1m3 - Math.abs( Date.now() - now )
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


