ServerEvents.recipes(recipe => {

// infusion crystal requires earth essence
recipe.remove({id: 'mysticalagriculture:infusion_crystal'})
recipe.shaped(
    Item.of('mysticalagriculture:infusion_crystal'),
    [
        'ESE',
        'SIS',
        'ESE'
    ],
    {
        E: 'ars_nouveau:earth_essence',
        S: 'mysticalagriculture:prosperity_shard',
        I: 'mysticalagriculture:inferium_gemstone'
    }
)


// amethyst to prosperity enchanting apperatus
recipe.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:iron_ingot'], // input items
        'minecraft:amethyst_shard', // reagent
        'mysticalagriculture:prosperity_shard', // output
        100 // source cost
)

})
