ServerEvents.recipes(recipe => {
    
// alchemist cauldron

recipe.remove({id: 'irons_spellbooks:alchemist_cauldron'})
recipe.remove({id: 'irons_spellbooks:sequenced_assembly/alchemist_cauldron'})
recipe.shaped(
    Item.of('irons_spellbooks:alchemist_cauldron'),
    [
        'I I',
        'ICI',
        'AAA'
    ],
    {
        I: 'minecraft:iron_ingot',
        A: 'irons_spellbooks:arcane_essence',
        C: 'minecraft:cauldron'
    }
)

})