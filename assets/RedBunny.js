// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var Bunny = require("Bunny"); 
cc.Class({
    extends: Bunny,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
       // this.name ="RedBunny";
    },

    update (dt) {
        this.time += dt;
        if (this.time <= 0.5){
            this.node.skewX += 30*dt;
        }
        else if(this.time <= 1){
            this.node.skewX += -60*dt;
        }
        else if (this.time <= 1.5){
            this.node.skewX += 30*dt;
        }
        else if (this.time <= 2){
        }
        else {
            this.time = 0;
            this.node.skewX = 0;
            this.talk();
        }
    },
});
