import rss from '@astrojs/rss';


export function GET(context: { site: any; }) {
  return rss({
    title: 'Zakiullah Khan',
    description: 'RSS feed for simplyzaki.com',
    site: context.site,
    items: [],
    customData: `<language>en-us</language>`,
  });
}