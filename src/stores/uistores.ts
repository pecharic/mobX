import {action, computed, observable} from "mobx";

export class User{
    @observable public name:string="neni mozny";
    @action public setname(){this.name="gerger";}
    @computed public get total(){return this.name+"jhhdgr";}
}

const user = new  User();
export default  user;