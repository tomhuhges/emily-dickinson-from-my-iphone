const fs = require('fs');
const Twit = require('twit');

const t = new Twit({
  consumer_key: 'c2qw6z1JSrb2W7M7FtmZasWLM',
  consumer_secret: 'sGjQ8UZh6fuXdR9oTzQ1GIbqE3UOTlovhPvByClk1kQ5dbHVKl',
  access_token: '886022692977205248-2AEhymkgIHh6ZW5T8s1kCTwwGgNofl8',
  access_token_secret: 'q8NxkfPmm8NIDIT2WmHwEcOyoORMExPgClx05NCBmhfxI',
  timeout_ms: 60 * 1000,
});

const postTweet = (tweet) => {
  t.post('statuses/update', { status: tweet }, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('tweeted');
    }
  });
};

fs.readFile('lines.json', 'utf8', (err, data) => {
  if (err) throw err;
  const lines = JSON.parse(data);
  const random = Math.ceil(Math.random() * lines.length);
  const tweet = `${lines[random]}\n${lines[random + 1]}\n\nSent from my iPhone`;
  setInterval(() => postTweet(tweet), 3600000 * 6);
});
