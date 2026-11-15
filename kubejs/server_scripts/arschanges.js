ServerEvents.recipes(recipe =>{

//Ars source motor enchantin apparatus
recipe.remove({id: 'ars_technica:source_motor'})
recipe.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:glyph_orbit', 'ars_nouveau:glyph_orbit', 'ars_technica:calibrated_precision_mechanism', 'ars_technica:calibrated_precision_mechanism', 'ars_technica:mark_of_technomancy', 'ars_technica:mark_of_technomancy', 'ars_technica:mark_of_technomancy', 'ars_technica:mark_of_technomancy', 'ars_nouveau:shapers_focus', 'ars_elemental:mark_of_mastery', 'irons_spellbooks:arcane_ingot', 'ars_technica:transmutation_turret'], // input items
        'createaddition:electric_motor', // reagent
        'ars_technica:source_motor', // output
        20000 // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    )

// agronomic sourcelink require magebloom seeds
recipe.shaped(
    Item.of('ars_nouveau:agronomic_sourcelink'),
    [
        ' S ',
        'GMG',
        ' S '
    ],
    {
        S: 'ars_nouveau:source_gem',
        M: 'ars_nouveau:magebloom_crop',
        G: 'minecraft:gold_ingot'
    }
)

})