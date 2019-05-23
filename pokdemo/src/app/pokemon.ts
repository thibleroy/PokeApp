export class Pokemon {
    id: Number;
    name: String;
    species:{
        url:String;
    };
    capture_rate:Number;
    color:{
        name:String,
        url:String
    };
    happiness:Number;
    experience: Number;
    abilities?: [{
        ability: {
            name: String
        }

    }];
    height?: Number;
    sprites?: {
        front_default: String,
        back_default: String
    };
    stats?: [{
        base_stat: Number,
        stat: {
            name: String
        }

    }];
    types?: [{
        type:{
            name: String
        }
        
    }];
    weight?: Number;
    description?: String
}
