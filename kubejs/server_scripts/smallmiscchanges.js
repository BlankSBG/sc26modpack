//define "recipe"
ServerEvents.recipes(recipe => {

    //building gadgets
    recipe.remove({id: 'buildinggadgets2:gadget_destruction'})
    recipe.remove({id: 'buildinggadgets2:gadget_cut_paste'})
    recipe.remove({id: 'buildinggadgets2:gadget_building'})
    recipe.remove({id: 'buildinggadgets2:gadget_exchanging'})
    recipe.remove({id: 'buildinggadgets2:gadget_copy_paste'})
    recipe.shaped(
        Item.of('buildinggadgets2:gadget_building'),
        [
            'SRS',
            'DRD',
            'SLS'
        ],
        {
            S: 'mekanism:ingot_steel',
            R: 'minecraft:redstone',
            D: 'minecraft:diamond',
            L: 'minecraft:lapis_lazuli'

        }
    )
    recipe.shaped(
        Item.of('buildinggadgets2:gadget_exchanging'),
        [
            'SRS',
            'DLD',
            'SLS'
        ],
        {
            S: 'mekanism:ingot_steel',
            R: 'minecraft:redstone',
            D: 'minecraft:diamond',
            L: 'minecraft:lapis_lazuli'

        }
    )
    recipe.shaped(
        Item.of('buildinggadgets2:gadget_copy_paste'),
        [
            'SRS',
            'ERE',
            'SLS'
        ],
        {
            S: 'mekanism:ingot_steel',
            R: 'minecraft:redstone',
            E: 'minecraft:emerald',
            L: 'minecraft:lapis_lazuli'

        }
    )

// drive by wire with electrum wire and steel
recipe.remove({id: 'drivebywire:wire'})
recipe.remove({id: 'drivebywire:wire_cutter'})
recipe.shaped(
    Item.of('drivebywire:wire', 4),
    [
        ' W ',
        'SWS',
        ' W '
    ],
    {
        W: 'createaddition:electrum_wire',
        S: 'mekanism:ingot_steel'
    }
)
recipe.shaped(
    Item.of('drivebywire:wire_cutter'),
    [
        'SI',
        ' S'
    ],
    {
        S: 'minecraft:stick',
        I: 'mekanism:ingot_steel'
    }
)

// drive by wire controller hubs

// creative phys staff - atomic dissasembler, antimatter pellet, quantum plate, mark of mastery, legendary ink
recipe.shaped(
    Item.of({id: 'simulated:creative_physics_staff'}),
    [
        ' MA',
        ' DL',
        'Q  '
    ],
    {
        D: 'mekanism:atomic_disassembler',
        Q: 'advanced_ae:quantum_alloy_plate',
        M: 'ars_elemental:mark_of_mastery',
        A: 'mekanism:pellet_antimatter',
        L: 'irons_spellbooks:legendary_ink'
    }
)

// remove iron's portal frame
recipe.remove({id: 'irons_spellbooks:portal_frame'})
recipe.remove({id: 'irons_spellbooks:sequenced_assembly/portal_frame'})

// waystones
recipe.remove({id: 'waystones:warp_stone'})
recipe.shaped(
    Item.of('waystones:warp_stone'),
    [
        'GFG',
        'FTF',
        'GFG'
    ],
    {
        G: 'ars_nouveau:source_gem',
        F: 'ae2:fluix_pearl',
        T: 'mekanism:teleportation_core'
    }
)

})
