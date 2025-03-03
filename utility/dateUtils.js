import { formatDistanceToNow, parseISO, format } from 'date-fns';

export const formatDate = (dateString) => {
  const date = parseISO(dateString);
  const now = new Date();

  // Calculate the difference in days
  const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) {
    // If the date is today, show "today" or "X hours ago"
    return formatDistanceToNow(date, { addSuffix: true });
  } else if (diffInDays === 1) {
    // If the date is yesterday, show "yesterday"
    return 'yesterday';
  } else if (diffInDays < 7) {
    // If the date is within the last week, show "X days ago"
    return `${diffInDays} days ago`;
  } else if (diffInDays < 30) {
    // If the date is within the last month, show "X weeks ago"
    const diffInWeeks = Math.floor(diffInDays / 7);
    return `${diffInWeeks} week${diffInWeeks > 1 ? 's' : ''} ago`;
  } else if (diffInDays < 365) {
    // If the date is within the last year, show "X months ago"
    const diffInMonths = Math.floor(diffInDays / 30);
    return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
  } else {
    // If the date is older than a year, show the full date
    return format(date, 'dd MMM yyyy');
  }
};