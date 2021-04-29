// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class ({
    extends: cc.Component,

    properties: {
        //name = "",
        time: 0,
        // get name (){
        //     return this.name;
        // },
        // set name(value){
        //     this.name = value;
        // }
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

    },
    talk(){
        cc.log("a ă");
    },
    update (dt) {
        this.time += dt;
        if (this.time <= 0.5){
            this.node.y += 300 * dt;
        }
        else if(this.time <= 1){
            this.node.y += -300 * dt;
        }
        else if (this.time <=2){}
        else{
        this.time = 0;
        this.talk();
        }

    },
});
