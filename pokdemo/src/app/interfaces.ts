export interface Values {

    pokemon_entries: [{
        entry_number: number,
        pokemon_species: {
            name: String,
            url: String
        }
    }]

}
export interface Infos {
    flavor_text_entries: [{
        flavor_text: String,
        language: {
            name: String
        }
    }]
}
