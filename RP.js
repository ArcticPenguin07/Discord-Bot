static void UpdatePresence()
{
    DiscordRichPresence discordPresence;
    memset(&discordPresence, 0, sizeof(discordPresence));
    discordPresence.state = "Converstion with random";
    discordPresence.startTimestamp = 1507665886;
    discordPresence.largeImageKey = "1f44b";
    discordPresence.largeImageText = "Converstion";
    Discord_UpdatePresence(&discordPresence);
}