import { reactive } from 'vue';

export const store= reactive ({
    cards:[],
    cardArchtypes: [],
    searchkey: '',
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=1000&offset=0',
    apiUlrActhetypes:   'https://db.ygoprodeck.com/api/v7/archetypes.php',
});