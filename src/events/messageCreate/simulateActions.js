export default function (message) {
    if (message.content.startsWith('!simulateBan')) {
        const args = message.content.split(' ').slice(1);
        const user = args[0];
        const reason = args.slice(1).join(' ');

        if (!user || !reason) {
            return message.reply('Please provide a user and a reason for the ban.');
        }

        // Simulate the ban action
        message.channel.send(`Simulating ban for ${user} for reason: ${reason}`);
    }
}