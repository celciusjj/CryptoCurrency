import { SocialStat, SocialStatResponse } from '../models';

export const socialStatAdapter = (response: SocialStatResponse): SocialStat => {
  return {
    redditActiveUsers: response.reddit.avg_active_users,
    redditSubscribers: response.reddit.subscribers,
    twitterFollowers: response.twitter.followers_count,
    twitterPosts: response.twitter.status_count,
  };
};
