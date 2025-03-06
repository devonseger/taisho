export default function (ban) {
    console.log(`User ${ban.user.username} has been banned by ${ban.executor.username} from the server ${ban.guild.name}`);
}