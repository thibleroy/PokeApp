import {Values,Infos} from './interfaces'
export class Pokemon {
    id:String;
    name:String;
    abilities?:[{
            name:String
    }];
    height?:number;
    sprites?:{
        front_default:String,
        back_default:String
    };
    stats?:[{
        base_stat:number,
        effort:number,
        name:String
    }];
    types?:[{
        name:String
    }];
    weight?:number;
    infos?:Infos;
    description?:String;
}
