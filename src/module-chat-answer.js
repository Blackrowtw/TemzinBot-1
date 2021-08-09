module.exports = function(bot) {
  bot.on('chat', (username, message) => {
    const answers = [
      {
        keyword: /^(?i)(map|dynmap|まｐ|ダイナ|マップ|地図)$/i,
        answer: 'https://kenmomine.club:8123/'
      },
      {
        keyword: /^(?i)(event|イベント|ev|いべんと)$/i,
        answer: 'http://kenmomine.wiki.fc2.com/wiki/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E4%BC%81%E7%94%BB/'
      },
      {
        keyword: /^(?i)(event|イベント|ev|いべんと)$/i,
        answer: 'http://kenmomine.wiki.fc2.com/wiki/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E4%BC%81%E7%94%BB/'
      },
      {
        keyword: /^(?i)(wiki|うぃき|ウィキ)$/i,
        answer: 'http://kenmomine.wiki.fc2.com/'
      },
      {
        keyword: /^(?i)(うに|uni)$/gi,
        answer: 'うに'
      },
      {
        keyword: /^(?i)(ぶり|buri)$/gi,
        answer: 'うに'
      },
      {
        keyword: /^(?i)(ぷちぷち|putiputi)$/gi,
        answer: 'ぷちぷちあ！'
      },
      {
        keyword: /^(?i)(為替|ドル円|JPY|USD|EUR|GBP)$/gi,
        answer: 'https://sekai-kabuka.com/kawase/html'
      },
      {
        keyword: /^(?i)(kabuka|株価)$/gi,
        answer: 'https://sekai-kabuka.com/'
      },
      {
        keyword: /^(?i)(tenhou|tenho|麻雀|天鳳)$/gi,
        answer: 'https://tenhou.net/make_lobby.html?lobby'
      },
      {
        keyword: /^(?i)(duel|デュエル|GF|ゴッドフィールド|godfield)$/gi,
        answer: 'https://godfield.net/'
      },
      {
        keyword: /^(?i)(qma|QMAclone|quiz|kuizu|クイズ)$/gi,
        answer: 'http://kishibe.dyndns.tb/QMAClone/'
      },
      {
        keyword: /^(?i)(oekaki|お絵かき|pictsense|ピクトセンス|quiz|kuizu|クイズ)$/gi,
        answer: 'https://pictsense.com/'
      },
      {
        keyword: /^(?i)(oekaki|お絵かき|dengon|伝言|伝言ゲーム)$/gi,
        answer: 'https://garticphone.com/ja'
      },
      {
        keyword: /^(?i)(jisin|jishin|地震|自信|じしん|自身)$/gi,
        answer: 'https://www.jma.go.jp/jp/quake/'
      },
      {
        keyword: /^(?i)(taifu|taifuu|taihu|台風)$/gi,
        answer: 'https://www.jma.go.jp/jp/bosai/map.html#contents=typhoon'
      },
      {
        keyword: /^(?i)(ra[dj]io|ら[じぢ]お|ラ[ヂジ]オ|ラディオ|レディオ|ラヂヲ|レイディオ)$/gi,
        answer: 'http://radio.kenmomine.club:8980/r/kenmomine'
      },
    ]

    if (username === bot.username) return;

    answers.forEach((q) => {
      if (message.match(q.keyword)) {
        bot.safechat(q.answer, 1000);
        break;
      }
    });

  });
}