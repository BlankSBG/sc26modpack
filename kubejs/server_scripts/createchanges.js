// remove platium from propulsion, require steel or other mid-game mek resource for all plat recipes

ServerEvents.recipes(recipe =>{

// remove crushing wheel diamond to dust
recipe.remove({id: 'createaddition:crushing/diamond'})

// remove crushing wheel obsidian to dust
recipe.remove({id: 'create:crushing/obsidian'})

// remove crafts and additions seed oil
recipe.remove({id: 'createaddition:compacting/seed_oil'})

// remove bigcannons cinder bronze
recipe.remove({id: 'createbigcannons/mixing/alloy_bronze_brass'})
recipe.remove({id: 'createbigcannons/mixing/alloy_bronze_tinless'})

// steam engine require precision mech
recipe.remove({id: 'create:crafting/kinetics/steam_engine'})
recipe.shaped(
    Item.of('create:steam_engine'),
    [
        'A',
        'P',
        'C'
    ],
    {
        A: 'create:andesite_alloy',
        P: 'create:precision_mechanism',
        C: 'minecraft:copper_block'
    }
)

// steam vent aero requires precision mech
recipe.remove({id: 'aeronautics:steam_vent'})
recipe.shaped(
    Item.of('aeronautics:steam_vent'),
    [
        'P',
        'B'
    ],
    {
        P: 'create:precision_mechanism',
        B: 'minecraft:copper_block'
    }
)

// diesel engine piston
recipe.remove({id: 'createdieselgenerators:crafting/engine_piston'})
recipe.shaped(
    Item.of('createdieselgenerators:engine_piston', 2),
    [
        '  I',
        ' S ',
        'N  '
    ],
    {
        I: 'mekanism:ingot_steel',
        S: 'create:shaft',
        N: 'mekanism:nugget_steel'
    }
)

// engine turbocharger
recipe.remove({id: 'createdieselgenerators:crafting/engine_turbocharger'})
recipe.shaped(
    Item.of('createdieselgenerators:engine_turbocharger'),
    [
        'SIT',
        'IPI',
        'IIS'
    ],
    {
        S: 'create:sturdy_sheet',
        I: 'mekanism:ingot_steel',
        T: 'mekanism:advanced_pressurized_tube',
        P: 'create:propeller'
    }
)

// basic diesel generator
recipe.remove({id: 'createdieselgenerators:crafting/diesel_engine'})
recipe.recipes.create.mechanical_crafting('createdieselgenerators:diesel_engine', 
    [
        ' PMP ',
        ' PBP ',
        'OSCSO'
    ],
    {
        P: 'createdieselgenerators:engine_piston',
        M: 'ars_technica:calibrated_precision_mechanism',
        B: 'create:brass_block',
        S: 'mekanism:steel_casing',
        C: 'simulated:engine_assembly',
        O: 'create:sturdy_sheet'
    }
)

// modular diesel generator
recipe.remove({id: 'createdieselgenerators:crafting/large_diesel_engine'})
recipe.recipes.create.mechanical_crafting('createdieselgenerators:large_diesel_engine', 
    [
        ' PMP ',
        ' PBP ',
        'SCCCS'
    ],
    {
        P: 'create:brass_sheet',
        M: 'create:brass_block',
        B: 'createdieselgenerators:diesel_engine',
        S: 'mekanism:steel_casing',
        C: 'mekanism:advanced_mechanical_pipe'
    }
)

// huge diesel generator
recipe.remove({id: 'createdieselgenerators:crafting/huge_diesel_engine'})
recipe.recipes.create.mechanical_crafting('createdieselgenerators:huge_diesel_engine', 
    [
        ' PPP ',
        'PMEMP',
        'PTSTP',
        'PMDMP',
        ' PAP '
    ],
    {
        P: 'create:brass_sheet',
        M: 'mekanism:advanced_mechanical_pipe',
        D: 'createdieselgenerators:diesel_engine',
        T: 'createdieselgenerators:engine_turbocharger',
        S: 'mekanism:block_steel',
        A: 'create:brass_block',
        E: 'create:steam_engine'
    }
)

// aeroworks gyroscope
recipe.remove({id: 'aeroworks:gyroscope'})
recipe.recipes.create.mechanical_crafting('aeroworks:gyroscope',
    [
        ' BBB ',
        'BBFBB',
        'BEPEB',
        'BBCBB',
        ' SLS '
    ],
    {
        B: 'create:brass_sheet',
        F: 'create:flywheel',
        E: 'create:electron_tube',
        P: 'ars_technica:calibrated_precision_mechanism',
        C: 'simulated:gimbal_sensor',
        S: 'mekanism:steel_casing',
        L: 'mekanism:elite_control_circuit'

    }
)

// propulsion plat removal

recipe.remove({id: 'createpropulsion:mixing/coral'})
recipe.remove({id: 'createpropulsion:crafting/cable'})
recipe.remove({id: 'createpropulsion:crafting/coral_generator'})
recipe.remove({id: 'createpropulsion:crafting/vector_thruster'})
recipe.shaped(
    Item.of('createpropulsion:vector_thruster'),
    [
        'SIS',
        'NGN'
    ],
    {
        G: 'simulated:gimbal_sensor',
        I: 'createpropulsion:ion_thruster',
        S: 'mekanism:ingot_steel',
        N: 'mekanism:nugget_steel'
    }
)
recipe.remove({id: 'createpropulsion:crafting/redstone_converter'})
recipe.shaped(
    Item.of('createpropulsion:redstone_converter'),
    [
        'TST',
        'DAD'
    ],
    {
        A: 'simulated:redstone_accumulator',
        S: 'mekanism:ingot_steel',
        T: 'minecraft:redstone_torch',
        D: 'minecraft:redstone'
    }
)
recipe.remove({id: 'createpropulsion:pressing/platinum_sheet'})

// ion thruster require elite control circuit
recipe.remove({id: 'createpropulsion:crafting/ion_thruster'})
recipe.shaped(
    Item.of('createpropulsion:ion_thruster'),
    [
        'ABI',
        'SES',
        'SUS'
    ],
    {
        A: 'simulated:redstone_accumulator',
        B: 'create:brass_sheet',
        I: 'simulated:redstone_inductor',
        S: 'create:sturdy_sheet',
        E: 'mekanism:elite_control_circuit',
        U: 'create:chute'
    }
)


})