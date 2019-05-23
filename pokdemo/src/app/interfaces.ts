export interface Value {
    entry_number: Number,
    pokemon_species: {
        name: String,
        url: String
    }
}
export interface Description {

base_happiness:Number,
capture_rate:Number,
color:{
    name:String,
    url:String
},
flavor_text_entries:[{

    flavor_text: String,
    language: {
        name: String
    }
}],
}

export interface Info {
    id:Number,
    name:String
    abilities: [{
        ability: {
            name: String
        }
    }
    ],
    base_experience: Number,
    height: Number,
    species: {
        url: String
    },
    stats: [{
        base_stat: Number,
        stat: {
            name: String
        }
    }],
    types: [{
        type: {
            name: String
        }
    }],
    weight: Number,
    sprites:{
        back_default:String,
        front_default:String
    }
}
