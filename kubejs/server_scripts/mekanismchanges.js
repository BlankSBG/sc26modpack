//defining "recipe"
ServerEvents.recipes(recipe => {

// remove dimensional stablizer, we have ftb chunks
recipe.remove({id: 'mekanism:dimensional_stabilizer'})

// force metallurgic enfuser for circuits
recipe.remove({id: 'mekanism:control_circuit/advanced'})
recipe.remove({id: 'mekanism:control_circuit/elite'})
recipe.remove({id: 'mekanism:control_circuit/ultimate'})

// metallurgic infuser require brass and electron tube
recipe.remove({id: 'mekanism:metallurgic_infuser'})
recipe.shaped(
    Item.of('mekanism:metallurgic_infuser', 1),
    [
        'BFB',
        'ROR',
        'BFB'
    ],
    {
        B: 'create:brass_ingot',
        F: 'minecraft:furnace',
        R: 'create:electron_tube',
        O: 'mekanism:ingot_osmium'
    }
)

// steel casing require ande alloy
recipe.remove({id: 'mekanism:steel_casing'})
recipe.shaped(
    Item.of('mekanism:steel_casing', 1),
    [
        'SAS',
        'AOA',
        'SAS'
    ],
    {
        S: 'mekanism:ingot_steel',
        A: 'create:andesite_alloy',
        O: 'mekanism:ingot_osmium'
    }
)

// enrichment chamber require electron tube
recipe.remove({id: 'mekanism:enrichment_chamber'})
recipe.shaped(
    Item.of('mekanism:enrichment_chamber', 1),
    [
        'TAT',
        'ISI',
        'TAT'
    ],
    {
        T: 'create:electron_tube',
        A: 'mekanism:basic_control_circuit',
        I: 'minecraft:iron_ingot',
        S: 'mekanism:steel_casing'
    }
)

// crusher requires electron tube and advanced circuit
recipe.remove({id: 'mekanism:crusher'})
recipe.shaped(
    Item.of('mekanism:crusher', 1),
    [
        'TET',
        'LSL',
        'TAT'
    ],
    {
        T: 'mekanism:alloy_infused',
        A: 'mekanism:advanced_control_circuit',
        L: 'minecraft:lava_bucket',
        S: 'mekanism:steel_casing',
        E: 'mekanism:elite_control_circuit'
    }
)

// crusher pre crusher recipe
recipe.recipes.create.mechanical_crafting('mekanism:crusher', 
    [
        'APA',
        'WSW',
        'ACA'
    ],
    {
        A: 'mekanism:alloy_infused',
        C: 'mekanism:advanced_control_circuit',
        W: 'create:crushing_wheel',
        S: 'mekanism:steel_casing',
        P: 'create:precision_mechanism'
    }
)

// energized smelter requires infused alloy
recipe.remove({id: 'mekanism:energized_smelter'})
recipe.shaped(
    Item.of('mekanism:energized_smelter', 1),
    [
        'TAT',
        'LSL',
        'TAT'
    ],
    {
        T: 'mekanism:alloy_infused',
        A: 'mekanism:basic_control_circuit',
        L: '#c:glass_blocks/cheap',
        S: 'mekanism:steel_casing'
    }
)

// electric sawmill require iron plates
recipe.remove({id: 'mekanism:precision_sawmill'})
recipe.shaped(
    Item.of('mekanism:precision_sawmill', 1),
    [
        'PCP',
        'ASA',
        'PCP'
    ],
    {
        P: 'create:iron_sheet',
        C: 'mekanism:basic_control_circuit',
        A: 'mekanism:alloy_infused',
        S: 'mekanism:steel_casing'
    }
)

// make basic factory blocks require electron tube
recipe.remove({id: 'mekanism:factory/basic/smelting'})
recipe.remove({id: 'mekanism:factory/basic/enriching'})
recipe.remove({id: 'mekanism:factory/basic/crushing'})
recipe.remove({id: 'mekanism:factory/basic/compressing'})
recipe.remove({id: 'mekanism:factory/basic/combining'})
recipe.remove({id: 'mekanism:factory/basic/purifying'})
recipe.remove({id: 'mekanism:factory/basic/injecting'})
recipe.remove({id: 'mekanism:factory/basic/infusing'})
recipe.remove({id: 'mekanism:factory/basic/sawing'})
recipe.remove({id: 'mekanism:tier_installer/basic'})
recipe.shaped(
    Item.of('mekanism:basic_smelting_factory', 1),
    [
        'TAT',
        'IMI',
        'TAT'
    ],
    {
        T: 'create:electron_tube',
        A: 'mekanism:basic_control_circuit',
        I: 'minecraft:iron_ingot',
        M: 'mekanism:energized_smelter'
    }
)
recipe.shaped(
    Item.of('mekanism:basic_enriching_factory', 1),
    [
        'TAT',
        'IMI',
        'TAT'
    ],
    {
        T: 'create:electron_tube',
        A: 'mekanism:basic_control_circuit',
        I: 'minecraft:iron_ingot',
        M: 'mekanism:enrichment_chamber'
    }
)
recipe.shaped(
    Item.of('mekanism:basic_crushing_factory', 1),
    [
        'TAT',
        'IMI',
        'TAT'
    ],
    {
        T: 'create:electron_tube',
        A: 'mekanism:basic_control_circuit',
        I: 'minecraft:iron_ingot',
        M: 'mekanism:crusher'
    }
)
recipe.shaped(
    Item.of('mekanism:basic_compressing_factory', 1),
    [
        'TAT',
        'IMI',
        'TAT'
    ],
    {
        T: 'create:electron_tube',
        A: 'mekanism:basic_control_circuit',
        I: 'minecraft:iron_ingot',
        M: 'mekanism:osmium_compressor'
    }
)
recipe.shaped(
    Item.of('mekanism:basic_combining_factory', 1),
    [
        'TAT',
        'IMI',
        'TAT'
    ],
    {
        T: 'create:electron_tube',
        A: 'mekanism:basic_control_circuit',
        I: 'minecraft:iron_ingot',
        M: 'mekanism:combiner'
    }
)
recipe.shaped(
    Item.of('mekanism:basic_purifying_factory', 1),
    [
        'TAT',
        'IMI',
        'TAT'
    ],
    {
        T: 'create:electron_tube',
        A: 'mekanism:basic_control_circuit',
        I: 'minecraft:iron_ingot',
        M: 'mekanism:purification_chamber'
    }
)
recipe.shaped(
    Item.of('mekanism:basic_injecting_factory', 1),
    [
        'TAT',
        'IMI',
        'TAT'
    ],
    {
        T: 'create:electron_tube',
        A: 'mekanism:basic_control_circuit',
        I: 'minecraft:iron_ingot',
        M: 'mekanism:chemical_injection_chamber'
    }
)
recipe.shaped(
    Item.of('mekanism:basic_infusing_factory', 1),
    [
        'TAT',
        'IMI',
        'TAT'
    ],
    {
        T: 'create:electron_tube',
        A: 'mekanism:basic_control_circuit',
        I: 'minecraft:iron_ingot',
        M: 'mekanism:metallurgic_infuser'
    }
)
recipe.shaped(
    Item.of('mekanism:basic_sawing_factory', 1),
    [
        'TAT',
        'IMI',
        'TAT'
    ],
    {
        T: 'create:electron_tube',
        A: 'mekanism:basic_control_circuit',
        I: 'minecraft:iron_ingot',
        M: 'mekanism:precision_sawmill'
    }
)
recipe.shaped(
    Item.of('mekanism:basic_tier_installer', 1),
    [
        'TAT',
        'ILI',
        'TAT'
    ],
    {
        T: 'create:electron_tube',
        A: 'mekanism:basic_control_circuit',
        I: 'minecraft:iron_ingot',
        L: 'create:andesite_alloy'
    }
)

// change enriched diamond to require dust
recipe.remove({id: 'mekanism:enriching/enriched/diamond'})
recipe.recipes.mekanism.enriching('mekanism:enriched_diamond', 'mekanism:dust_diamond')

// energy tablet require electrum wire
recipe.remove({id: 'mekanism:energy_tablet'})
recipe.shaped(
    Item.of ('mekanism:energy_tablet'),
    [
        'RWR',
        'AWA',
        'RWR'
    ],
    {
        R: 'minecraft:redstone',
        W: 'createaddition:electrum_wire',
        A: 'mekanism:alloy_infused'
    }
)

// heat gen changes
recipe.remove({id: 'mekanismgenerators:generator/heat'})
recipe.shaped(
    Item.of('mekanismgenerators:heat_generator'),
    [
        'III',
        'SPS',
        'CFC'
    ],
    {
        I: 'create:iron_sheet',
        S: 'mekanism:steel_casing',
        P: 'create:precision_mechanism',
        C: 'create:copper_sheet',
        F: 'minecraft:furnace'
    }
)

// solar panel requires lapis sheet
recipe.remove({id: 'mekanismgenerators:solar_panel'})
recipe.shaped(
    Item.of ('mekanismgenerators:solar_panel'),
    [
        'AAA',
        'BGB',
        'OOO'
    ],
    {
        A: 'ccbr:lapis_sheet',
        B: 'minecraft:redstone',
        G: 'mekanism:alloy_infused',
        O: 'mekanism:ingot_osmium'
    }
)

// electrolytic core requires calibrated precision mechanism
recipe.remove({id: 'mekanism:electrolytic_core'})
recipe.shaped(
    Item.of ('mekanism:electrolytic_core'),
    [
        'AOA',
        'DGB',
        'AOA'
    ],
    {
        A: 'mekanism:alloy_infused',
        D: 'mekanism:dust_iron',
        B: 'mekanism:dust_gold',
        G: 'ars_technica:calibrated_precision_mechanism',
        O: 'mekanism:dust_osmium'
    }
)
// biogen requires steel
recipe.remove({id: 'mekanismgenerators:generator/bio'})
recipe.shaped(
    Item.of ('mekanismgenerators:bio_generator'),
    [
        'AOA',
        'BGB',
        'COC'
    ],
    {
        A: 'mekanism:dust_refined_obsidian',
        B: 'mekanism:bio_fuel',
        G: 'mekanism:advanced_control_circuit',
        O: 'mekanism:alloy_reinforced',
        C: 'mekanism:ingot_steel'
    }
)
// adv solar requires steel
recipe.remove({id: 'mekanismgenerators:generator/advanced_solar'})
recipe.shaped(
    Item.of('mekanismgenerators:advanced_solar_generator'),
    [
        'SAS',
        'SAS',
        'III'
    ],
    {
        S: 'mekanismgenerators:solar_generator',
        A: 'mekanism:alloy_infused',
        I: 'mekanism:ingot_steel'
    }
)


//wind gen
recipe.remove({id: 'mekanismgenerators:generator/wind'})
recipe.shaped(
    Item.of ('mekanismgenerators:wind_generator'),
    [
        ' O ',
        'OGO',
        'CBC'
    ],
    {
        B: 'mekanism:advanced_control_circuit',
        G: 'mekanism:alloy_infused',
        O: 'mekanism:ingot_osmium',
        C: 'mekanism:energy_tablet'
    }
)
// gas burn gen change
recipe.remove({id: 'mekanismgenerators:generator/gas_burning'})
recipe.shaped(
    Item.of('mekanismgenerators:gas_burning_generator'),
    [
        'ACA',
        'SES',
        'APA'
    ],
    {
        C: 'mekanism:alloy_atomic',
        A: 'mekanism:ultimate_control_circuit',
        S: 'mekanism:steel_casing',
        E: 'mekanism:electrolytic_core',
        P: 'mekanism:pressurized_reaction_chamber'

    }
)

// pressurized reaction chamber require reinforced/elite
recipe.remove({id: 'mekanism:pressurized_reaction_chamber'})
recipe.shaped(
    Item.of('mekanism:pressurized_reaction_chamber'),
    [
        'SAS',
        'CEC',
        'TDT'
    ],
    {
        S: 'mekanism:ingot_steel',
        A: 'mekanism:alloy_reinforced',
        C: 'mekanism:elite_control_circuit',
        E: 'mekanism:enrichment_chamber',
        T: 'mekanism:basic_chemical_tank',
        D: 'mekanism:dynamic_tank'
    }

)

// rotary condensentrator requires elite circuit
recipe.remove({id: 'mekanism:rotary_condensentrator'})
recipe.shaped(
    Item.of('mekanism:rotary_condensentrator'),
    [
        'GCG',
        'TBL',
        'GCG'
    ],
    {
        G: '#c:glass_blocks/cheap',
        C: 'mekanism:elite_control_circuit',
        T: 'mekanism:basic_chemical_tank',
        B: 'mekanism:energy_tablet',
        L: 'mekanism:basic_fluid_tank'
    }
)

// chemical infuser requires elite circuit
recipe.remove({id: 'mekanism:chemical_infuser'})
recipe.shaped(
    Item.of('mekanism:chemical_infuser'),
    [
        'ACA',
        'TST',
        'ACA'
    ],
    {
        A: 'mekanism:alloy_infused',
        C: 'mekanism:elite_control_circuit',
        T: 'mekanism:basic_chemical_tank',
        S: 'mekanism:steel_casing'
    }
)

// chemical oxidizer requires elite circuit
recipe.remove({id: 'mekanism:chemical_oxidizer'})
recipe.shaped(
    Item.of('mekanism:chemical_oxidizer'),
    [
        'ACA',
        'BST',
        'ACA'
    ],
    {
        A: 'mekanism:alloy_infused',
        C: 'mekanism:elite_control_circuit',
        T: 'mekanism:basic_chemical_tank',
        S: 'mekanism:dynamic_tank',
        B: '#mekanism:personal_storage'
    }
)

// basic uni cable requires capacitor
recipe.remove({id: 'mekanism:transmitter/universal_cable/basic'})
recipe.shaped(
    Item.of('mekanism:basic_universal_cable', 8),
    [
        'SCS'
    ],
    {
        S: 'mekanism:ingot_steel',
        C: 'createaddition:capacitor'
    }
)
// basic pipe requires fluid tank
recipe.remove({id: 'mekanism:transmitter/mechanical_pipe/basic'})
recipe.shaped(
    Item.of('mekanism:basic_mechanical_pipe', 8),
    [
        'SCS'
    ],
    {
        S: 'mekanism:ingot_steel',
        C: 'create:fluid_tank'
    }
)

// basic pressure tube require chem tank
recipe.remove({id: 'mekanism:transmitter/pressurized_tube/basic'})
recipe.shaped(
    Item.of('mekanism:basic_pressurized_tube', 8),
    [
        'SCS'
    ],
    {
        S: 'mekanism:ingot_steel',
        C: 'mekanism:basic_chemical_tank'
    }
)

// electric pump requires fluid tank
recipe.remove({id: 'mekanism:electric_pump'})
recipe.shaped(
    Item.of('mekanism:electric_pump'),
    [
        ' F ',
        'ASA',
        'OOO'
    ],
    {
        F: 'create:fluid_tank',
        A: 'mekanism:alloy_infused',
        S: 'mekanism:steel_casing',
        O: 'mekanism:ingot_osmium'
    }
)

// basic fluid tank and chemical tank requires create fluid tank
recipe.remove({id: 'mekanism:fluid_tank/basic'})
recipe.remove({id: 'mekanism:chemical_tank/basic'})
recipe.shaped(
    Item.of('mekanism:basic_fluid_tank'),
    [
        'RIR',
        'IFI',
        'RIR'
    ],
    {
        R: 'minecraft:redstone',
        I: 'minecraft:iron_ingot',
        F: 'create:fluid_tank'
    }
)
recipe.shaped(
    Item.of('mekanism:basic_chemical_tank'),
    [
        'RIR',
        'IFI',
        'RIR'
    ],
    {
        R: 'minecraft:redstone',
        I: 'mekanism:ingot_osmium',
        F: 'create:fluid_tank'
    }
)

// jetpack requires calibrated precision mechanism 
recipe.remove({id: 'mekanism:jetpack'})
recipe.shaped(
    Item.of('mekanism:jetpack'),
    [
        'IPI',
        'ICI',
        'T T'
    ],
    {
        I: 'mekanism:ingot_steel',
        P: 'ars_technica:calibrated_precision_mechanism',
        C: 'mekanism:elite_control_circuit',
        T: 'mekanism:basic_chemical_tank'
    }
)


// meksuit requires ice and fire metals
recipe.remove({id: 'mekanism:mekasuit_helmet'})
recipe.remove({id: 'mekanism:mekasuit_bodyarmor'})
recipe.remove({id: 'mekanism:mekasuit_pants'})
recipe.remove({id: 'mekanism:mekasuit_boots'})
recipe.shaped(
    Item.of('mekanism:mekasuit_helmet'),
    [
        'SCS',
        'IAI',
        'PBP'
    ],
    {
        S: 'mekanism:hdpe_sheet',
        C: 'mekanism:ultimate_control_circuit',
        I: '#iceandfire:dragon_steels',
        A: 'minecraft:netherite_helmet',
        P: 'mekanism:pellet_polonium',
        B: 'mekanism:basic_induction_cell'
    }
)
recipe.shaped(
    Item.of('mekanism:mekasuit_bodyarmor'),
    [
        'SCS',
        'IAI',
        'PBP'
    ],
    {
        S: 'mekanism:hdpe_sheet',
        C: 'mekanism:ultimate_control_circuit',
        I: '#iceandfire:dragon_steels',
        A: 'minecraft:netherite_chestplate',
        P: 'mekanism:pellet_polonium',
        B: 'mekanism:basic_induction_cell'
    }
)
recipe.shaped(
    Item.of('mekanism:mekasuit_pants'),
    [
        'SCS',
        'IAI',
        'PBP'
    ],
    {
        S: 'mekanism:hdpe_sheet',
        C: 'mekanism:ultimate_control_circuit',
        I: '#iceandfire:dragon_steels',
        A: 'minecraft:netherite_leggings',
        P: 'mekanism:pellet_polonium',
        B: 'mekanism:basic_induction_cell'
    }
)
recipe.shaped(
    Item.of('mekanism:mekasuit_boots'),
    [
        'SCS',
        'IAI',
        'PBP'
    ],
    {
        S: 'mekanism:hdpe_sheet',
        C: 'mekanism:ultimate_control_circuit',
        I: '#iceandfire:dragon_steels',
        A: 'minecraft:netherite_boots',
        P: 'mekanism:pellet_polonium',
        B: 'mekanism:basic_induction_cell'
    }
)

// formulaic assembler requires create mech crafter
recipe.remove({id: 'mekanism:formulaic_assemblicator'})
recipe.shaped(
    Item.of('mekanism:formulaic_assemblicator'),
    [
        'SCS',
        'BAB',
        'SHS'
    ],
    {
        S: 'mekanism:ingot_steel',
        C: 'create:mechanical_crafter',
        B: 'mekanism:advanced_control_circuit',
        A: 'mekanism:steel_casing',
        H: '#c:chests/wooden'
    }
)
// teleport core requires ae2 fluix pearl, arcane ingot, calibrated precision mechanism
recipe.remove({id: 'mekanism:teleportation_core'})
recipe.shaped(
    Item.of('mekanism:teleportation_core'),
    [
        'PAP',
        'ICI',
        'PAP'
    ],
    {
        P: 'ae2:fluix_pearl',
        A: 'mekanism:alloy_atomic',
        I: 'irons_spellbooks:arcane_ingot',
        C: 'ars_technica:calibrated_precision_mechanism'
    }
)

// atmoic dissasembler replace atomic alloy with enchanter wand and replace infused alloy with atmoic alloy
recipe.remove({id: 'mekanism:atomic_disassembler'})
recipe.shaped(
    Item.of('mekanism:atomic_disassembler'),
    [
        'PAP',
        'PBP',
        ' H '
    ],
    {
        P: 'mekanism:alloy_atomic',
        A: 'mekanism:energy_tablet',
        B: 'ars_nouveau:wand',
        H: 'mekanism:ingot_refined_obsidian'

    }
)

// configurator require wrench
recipe.remove({id: 'mekanism:configurator'})
recipe.shaped(
    Item.of('mekanism:configurator'),
    [
        'P P',
        ' C ',
        ' A '
    ],
    {
        P: 'mekanism:ingot_osmium',
        C: 'create:wrench',
        A: 'mekanism:ingot_steel'
    }
)

// charge pad use sturdy sheets
recipe.remove({id: 'mekanism:chargepad'})
recipe.shaped(
    Item.of('mekanism:chargepad'),
    [
        'PPP',
        'SBS'
    ],
    {
        P: 'create:sturdy_sheet',
        S: 'mekanism:ingot_steel',
        B: 'mekanism:energy_tablet'
    }
)

// robit require calibrated precision mech
recipe.remove({id: 'mekanism:robit'})
recipe.shaped(
    Item.of('mekanism:robit'),
    [
     'SPS',
     'BCB',
     'IHI'
    ],
    {
        S: 'mekanism:ingot_steel',
        P: 'ars_technica:calibrated_precision_mechanism',
        B: 'mekanism:energy_tablet',
        C: 'mekanism:ultimate_control_circuit',
        I: 'mekanism:ingot_refined_obsidian',
        H: '#mekanism:personal_storage'
    }
)

// digital miner requires elite circuit
recipe.remove({id: 'mekanism:digital_miner'})
recipe.shaped(
    Item.of('mekanism:digital_miner'),
    [
        'ACA',
        'LRL',
        'TST'
    ],
    {
        A: 'mekanism:alloy_atomic',
        C: 'mekanism:ultimate_control_circuit',
        L: 'mekanism:logistical_sorter',
        R: 'mekanism:robit',
        T: 'mekanism:teleportation_core',
        S: 'mekanism:steel_casing'
    }
)

});
