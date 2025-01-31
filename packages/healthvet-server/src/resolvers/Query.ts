import { QueryResolvers } from '../generated/graphqlgen';
import { getUserId } from '../utils';

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,

  me: (parent, args, context) => {
    const userId = getUserId(context);
    return context.prisma.user({ id: userId });
  },
  feed: (parent, args, context) => {
    const userId = getUserId(context);

    if (!userId) {
      throw new Error('Not authorized');
    }

    return context.prisma.posts({
      where: { author: { id: userId }, published: true },
    });
  },
  filterPosts: (parent, { searchString }, context) => {
    return context.prisma.posts({
      where: {
        OR: [
          {
            title_contains: searchString,
          },
          {
            content_contains: searchString,
          },
        ],
      },
    });
  },
  post: (parent, { id }, context) => {
    return context.prisma.post({ id });
  },
  listMessagesByPost: (parent, { postId }, context) => {
    return context.prisma.messages({
      where: {
        post: {
          id: postId,
        },
      },
    });
  },
  listHistoriesByPost: (parent, { postId }, context) => {
    return context.prisma.histories({
      where: {
        post: {
          id: postId,
        },
      },
    });
  },
};
