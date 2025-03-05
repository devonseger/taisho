export default function (message, client, handler) {
    // Update this to grab words from server specific db
    const bannedWords = ['bad', 'words', 'here'];
    if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {
      message.delete();
      message.reply('You cannot say that word!');
    }
  };