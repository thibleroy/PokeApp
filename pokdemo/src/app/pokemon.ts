export class Pokemon {
    id:number;
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
    }]
    weight?:number
 
}
