PlayerEvents.tick(event => {
    const { player } = event
    let playtime = player.persistentData.getDouble('playtime_seconds') || 0
    
    // Update playtime every second (20 ticks)
    if (event.tick % 20 === 0) {
        playtime += 1
        if (playtime >= 10) {
            // Reset playtime by subtracting 30 minutes (1800 seconds)
            player.persistentData.putDouble('playtime_seconds', playtime - 10)
            Utils.server.runCommand(`tell @p TEST!`)
            Utils.server.runCommand(`give @p numismatics:sprocket`)
        } else {
            player.persistentData.putDouble('playtime_seconds', playtime)
        }
    }
})
