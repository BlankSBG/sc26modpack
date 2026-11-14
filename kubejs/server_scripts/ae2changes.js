ServerEvents.recipes(recipe => {

// remove inscriber recipes in favor of create sequence recipes
//AE2Recipes.removeByOutput(recipe, 'inscriber', '')
AE2Recipes.removeByOutput(recipe, 'inscriber', 'mekanism:dust_diamond')
AE2Recipes.removeByOutput(recipe, 'inscriber', 'ae2:calculation_processor')
AE2Recipes.removeByOutput(recipe, 'inscriber', 'ae2:engineering_processor')
AE2Recipes.removeByOutput(recipe, 'inscriber', 'ae2:logic_processor')
AE2Recipes.removeByOutput(recipe, 'inscriber', 'ae2:calculation_processor_press')
AE2Recipes.removeByOutput(recipe, 'inscriber', 'ae2:engineering_processor_press')
AE2Recipes.removeByOutput(recipe, 'inscriber', 'ae2:logic_processor_press')
AE2Recipes.removeByOutput(recipe, 'inscriber', 'ae2:silicon_press')
AE2Recipes.removeByOutput(recipe, 'inscriber', 'ae2:printed_silicon')
AE2Recipes.removeByOutput(recipe, 'inscriber', 'ae2:printed_engineering_processor')
AE2Recipes.removeByOutput(recipe, 'inscriber', 'ae2:certus_quartz_dust')
AE2Recipes.removeByOutput(recipe, 'inscriber', 'mekanism:dust_emerald')
AE2Recipes.removeByOutput(recipe, 'inscriber', 'ae2:ender_dust')
AE2Recipes.removeByOutput(recipe, 'inscriber', 'ae2:printed_logic_processor')
AE2Recipes.removeByOutput(recipe, 'inscriber', 'ae2:fluix_dust')
AE2Recipes.removeByOutput(recipe, 'inscriber', 'ae2:printed_calculation_processor')
AE2Recipes.removeByOutput(recipe, 'inscriber', 'ae2:sky_dust')

// me gearbox require ars technica source motor
recipe.remove({id: 'appliedcreate:me_gearbox'})
recipe.recipes.create.mechanical_crafting('appliedcreate:me_gearbox', 
    [
        'BCB',
        'FSF',
        'BMB'
    ],
    {
        B: 'create:brass_ingot',
        C: 'create:cogwheel',
        S: 'create:shaft',
        F: 'ae2:fluix_glass_cable',
        M: 'ars_technica:source_motor'
    }
)

})

